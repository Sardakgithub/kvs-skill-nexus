import AuthLayout from "@/components/auth/auth-layout";
import RegisterForm from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Start your AI-powered career journey today."
    >
      <RegisterForm />
    </AuthLayout>
  );
}