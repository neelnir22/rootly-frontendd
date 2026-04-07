/* eslint-disable react-refresh/only-export-components */
import { useLogin } from "@/authentication/useLogin";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function LoginForm() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const { login, isPending } = useLogin();

  function onSubmit(data) {
    login(data);
  }

  function onError(err) {
    if (err.email || err.password) {
      toast.error(err.email.message || err.password.message);
    }
  }

  return (
    <>
      <h1 className=" flex justify-center pb-0 items-center">Rootly</h1>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm ">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "enter a email to login",
                      },
                    })}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href=""
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "enter password to login",
                      },
                    })}
                  />
                </div>
              </div>
              <CardFooter className="flex-col gap-2 pt-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
