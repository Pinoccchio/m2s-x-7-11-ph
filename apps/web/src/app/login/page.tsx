import type { Metadata } from "next";
import { AuthPage } from "@/features/auth/components/auth-page";

export const metadata: Metadata = {
  title: "Sign in | M2S X 7-11 Ph",
  description: "Sign in to the M2S X 7-11 Ph workspace.",
};

export default function LoginPage() {
  return <AuthPage />;
}
