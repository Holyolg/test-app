"use client";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/auth";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LOGIN_USER } from "../../graphql/mutations";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, { data, loading, error }] = useMutation(LOGIN_USER, {
    variables: { email, password },
  });
  const authStore = useAuthStore();

  const router = useRouter();

  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/my-info");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ variables: { email, password } });
      const accessToken = response.data.login.access_token;
      const refreshToken = response.data.login.access_token;

      document.cookie = `access_token=${accessToken}`;

      document.cookie = `refresh_token=${refreshToken}`;

      authStore.setAuthenticated(true);

      router.push("/my-info");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col">
            <Button type="submit" className="w-full" disabled={loading}>
              Sign in
            </Button>
            {error && <h2 className="text-red-700 mt-3">Incorrect login or password</h2>}
          </CardFooter>
        </Card>
      </form>
    </Container>
  );
}
