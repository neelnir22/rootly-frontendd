// /* eslint-disable react-refresh/only-export-components */

import { useChangeEmail } from "@/authentication/useChangeEmail";
import { useGetUserProfile } from "@/authentication/useGetUserProfile";
import { useUpdateUserNames } from "@/authentication/useUpdateUser-Name";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function SettingForm() {
  const { userproile, isPending } = useGetUserProfile();
  const { changenames } = useUpdateUserNames();
  const { changeemail } = useChangeEmail();

  const [isDisabled, setIsDisabled] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { dirtyFields },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
    },
    values: userproile?.user,
  });

  if (isPending) {
    return (
      <h1 className="w-full flex justify-center items-center text-5xl">
        loading.....
      </h1>
    );
  }

  function onSubmit(data) {
    for (const [key] of Object.entries(dirtyFields)) {
      if (key === "firstName") {
        changenames({
          firstName: data["firstName"],
        });
      }
      if (key === "lastName") {
        changenames({
          lastName: data["lastName"],
        });
      }
      if (key === "email") {
        changeemail(data["email"]);
      }
    }
  }

  function onError(err) {
    console.log({ err });
    if (
      (err.firstName, err.lastName, err.userName, err.email || err.password)
    ) {
      toast.error(
        err.firstName?.message ||
          err.lastName?.message ||
          err.userName?.message ||
          err.email?.message ||
          err.password?.message,
      );
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className=" flex justify-center items-center text-4xl font-bold pb-2">
          Settings
        </h1>
        <Card className="w-full max-w-sm ">
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    id="firstName"
                    disabled={isDisabled}
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
                    disabled={isDisabled}
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
                    disabled={isDisabled}
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
                    disabled={isDisabled}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "enter a email to login",
                      },
                    })}
                  />
                </div>
              </div>
              <CardFooter className="flex-col gap-2 pt-3">
                <Button
                  type="submit"
                  className="w-full"
                  onClick={() => setIsDisabled((disabled) => !disabled)}
                >
                  {isDisabled ? "Edit" : "Save Changes"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
