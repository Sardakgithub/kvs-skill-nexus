"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import PasswordInput from "@/components/auth/password-input";
import GoogleButton from "@/components/auth/google-button";
import AuthDivider from "@/components/auth/auth-divider";
import AuthFooter from "@/components/auth/auth-footer";

import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/schemas/login.schema";

import { useAuth } from "@/features/auth/hooks/use-auth";

export default function LoginForm() {
  const router = useRouter();

  const { login } = useAuth();

  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormValues) {
    setSubmitError("");

    try {
      await login(data);

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
          placeholder="••••••••"
          registration={register("password")}
          error={errors.password?.message}
        />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

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
            ? "Signing In..."
            : "Sign In"}
        </Button>
      </form>

      <AuthDivider />

      <GoogleButton />

      <AuthFooter
        text="Don't have an account?"
        linkText="Create one"
        href="/register"
      />
    </>
  );
}