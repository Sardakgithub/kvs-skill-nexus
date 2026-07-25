import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
} from "firebase/auth";

import { auth } from "@/lib/firebase";
import { userService } from "@/services/user.service";

import type {
  LoginCredentials,
  RegisterCredentials,
} from "../types";

export const authService = {
  async login({ email, password }: LoginCredentials) {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      return credential.user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  async register({
    fullName,
    email,
    password,
  }: RegisterCredentials) {
    let firebaseUser = null;

    try {
      // Create Firebase account
      const credential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      firebaseUser = credential.user;

      // Create MongoDB profile
      await userService.createUser({
        firebaseUid: firebaseUser.uid,
        fullName,
        email,
        role: "student",
      });

      return firebaseUser;
    } catch (error: any) {
      // Roll back Firebase account if MongoDB creation failed
      if (firebaseUser) {
        try {
          await deleteUser(firebaseUser);
        } catch {
          // Ignore rollback errors
        }
      }

      switch (error.code) {
        case "auth/email-already-in-use":
          throw new Error(
            "An account with this email already exists."
          );

        case "auth/invalid-email":
          throw new Error("Invalid email address.");

        case "auth/weak-password":
          throw new Error(
            "Password should be at least 6 characters."
          );

        default:
          throw new Error(
            error.message || "Something went wrong."
          );
      }
    }
  },

  async logout() {
    await signOut(auth);
  },
};