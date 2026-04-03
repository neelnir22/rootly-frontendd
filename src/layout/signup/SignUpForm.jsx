/* eslint-disable react-refresh/only-export-components */

import { useSignup } from "@/authentication/useSignup";
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

export function SignUpForm() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const { signup, isPending } = useSignup();

  function onSubmit(data) {
    signup(data);
  }

  function onError(err) {
    if (
      (err.firstName, err.lastName, err.userName, err.email || err.password)
    ) {
      toast.error(
        err.firstName.message ||
          err.lastName.message ||
          err.userName.message ||
          err.email.message ||
          err.password.message,
      );
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
              <Button variant="link" onClick={() => navigate("/login")}>
                Login
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">First Name</Label>
                  <Input
                    id="firstName"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "enter a firstName to signup",
                      },
                    })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Last Name</Label>
                  <Input
                    id="lastName"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "enter a lastName to signup",
                      },
                    })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">UserName</Label>
                  <Input
                    id="userName"
                    {...register("userName", {
                      required: {
                        value: true,
                        message: "enter a userName to signup",
                      },
                    })}
                  />
                </div>
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
