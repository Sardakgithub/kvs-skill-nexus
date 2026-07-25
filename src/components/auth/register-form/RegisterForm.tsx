"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import PasswordInput from "@/components/auth/password-input";
import GoogleButton from "@/components/auth/google-button";
import AuthDivider from "@/components/auth/auth-divider";
import AuthFooter from "@/components/auth/auth-footer";

import {
  registerSchema,
  type RegisterFormValues,
} from "@/features/auth/schemas/register.schema";

import { useAuth } from "@/features/auth/hooks/use-auth";

export default function RegisterForm() {
  const router = useRouter();

  const { register: registerUser } = useAuth();

  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterFormValues) {
    setSubmitError("");

    const { confirmPassword, ...payload } = data;

    try {
      await registerUser(payload);

      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError("Something went wrong.");
      }
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div>
          <Label htmlFor="fullName">
            Full Name
          </Label>

          <Input
            id="fullName"
            placeholder="John Doe"
            {...register("fullName")}
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            placeholder="john@example.com"
            {...register("email")}
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <PasswordInput
          id="password"
          label="Password"
          placeholder="Create a password"
          registration={register("password")}
          error={errors.password?.message}
        />

        <PasswordInput
          id="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          registration={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        {submitError && (
          <div className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-600">
            {submitError}
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}

          {isSubmitting
            ? "Creating Account..."
            : "Create Account"}
        </Button>
      </form>

      <AuthDivider />

      <GoogleButton />

      <AuthFooter
        text="Already have an account?"
        linkText="Sign In"
        href="/login"
      />
    </>
  );
}