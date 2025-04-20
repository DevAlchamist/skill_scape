"use client";

import { useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { CloudLightning, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { status, data: session } = useSession();
  const { syncGithubUser, fetchCurrentUser, token, user, loading, login } =
    useAuthStore();

  // Handle the form submit for login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password); // Using email and password from state
  };
  // Sync Github user on session change
  // ...
  const hasFetchedUser = useRef(false);

  useEffect(() => {
    if (session?.user && !token && !user && !loading) {
      syncGithubUser(session.user);
    }
  
    if (token && !user && !hasFetchedUser.current) {
      fetchCurrentUser();
      hasFetchedUser.current = true;
    }
  }, [session?.user, user, loading, token]);
  
  // Redirect to dashboard if authenticated
  useEffect(() => {
    if (status === "authenticated" && token && user) {
      router.push("/dashboard");
    }
  }, [status, token, user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Sign in to your SkillScape AI account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <Button
              onClick={() => signIn("github")}
              variant="outline"
              className="w-full"
              type="button"
            >
              <Github className="mr-2 h-4 w-4" />
              Sign in with GitHub
            </Button>
            <div className="text-sm text-muted-foreground text-center">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
