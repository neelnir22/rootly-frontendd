// /* eslint-disable react-refresh/only-export-components */
import { useUpdatePassword } from "@/authentication/useUser-UpdatePassword";
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

export function UpdatePasswordForm() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const { changepassword } = useUpdatePassword();

  function onSubmit(data) {
    console.log({ data });
    if (data.currPassword === data.newPassword) {
      toast.error("newPassword cant be same as currPassword");
    } else {
      changepassword({
        currentPassword: data.currPassword,
        newPassword: data.newPassword,
      });
    }
  }

  function onError(err) {
    if (err.currPassword || err.newPassword) {
      toast.error(err.currPassword?.message || err.newPassword?.message);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm ">
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              Enter your current password to update password
            </CardDescription>
            <CardAction>
              <Button
                variant="link"
                onClick={() => navigate("/admin/settings")}
              >
                back
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="currPassword">Current Password</Label>
                  <Input
                    id="currPassword"
                    type="password"
                    {...register("currPassword", {
                      required: {
                        value: true,
                        message: "enter currentPassword",
                      },
                      minLength: {
                        value: 8,
                        message:
                          "password should be of atleast 8 characters long",
                      },
                    })}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">New Password</Label>
                  </div>
                  <Input
                    id="newPassword"
                    type="password"
                    {...register("newPassword", {
                      required: {
                        value: true,
                        message: "enter newPassword",
                      },
                      minLength: {
                        value: 8,
                        message:
                          "password should be of atleast 8 characters long",
                      },
                    })}
                  />
                </div>
              </div>
              <CardFooter className="flex-col gap-2 pt-3">
                <Button type="submit" className="w-full">
                  Update Password
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
