import { useUpdatePassword } from "@/authentication/useUser-UpdatePassword";
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
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { KeyRound, ShieldCheck, ArrowLeft, Lock } from "lucide-react";

export function UpdatePasswordForm() {
  const { handleSubmit, register, watch } = useForm();
  const navigate = useNavigate();
  const { changepassword } = useUpdatePassword();

  const newPassword = watch("newPassword");

  function onSubmit(data) {
    if (data.currPassword === data.newPassword) {
      toast.error("New password cannot be the same as current password");
      return;
    }

    changepassword({
      currentPassword: data.currPassword,
      newPassword: data.newPassword,
    });
  }

  function onError(err) {
    const firstError = Object.values(err)[0];
    if (firstError) {
      toast.error(firstError.message);
    }
  }

  return (
    <div className="w-full max-w-[70vw] mx-auto py-10 space-y-8">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/admin/settings")}
          className="rounded-full hover:bg-muted"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="space-y-1">
          <h2 className="text-3xl font-extrabold font-heading tracking-tight text-foreground">
            Security
          </h2>
          <p className="text-muted-foreground">
            Update your password to keep your account secure.
          </p>
        </div>
      </div>

      <Card className="max-w-2xl border-border/50 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm">
        <CardHeader className="border-b border-border/50 bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-violet/10 rounded-lg">
              <KeyRound className="w-5 h-5 text-primary-violet" />
            </div>
            <div>
              <CardTitle className="text-xl">Change Password</CardTitle>
              <CardDescription>
                Secure your account with a strong password
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-6"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <Label
                  htmlFor="currPassword"
                  className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Current Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="currPassword"
                    type="password"
                    placeholder="••••••••"
                    className="h-12 pl-11 bg-background border-border focus:ring-primary-violet/20 rounded-xl"
                    {...register("currPassword", {
                      required: "Current password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="newPassword"
                  className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                >
                  New Password
                </Label>
                <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                    className="h-12 pl-11 bg-background border-border focus:ring-primary-violet/20 rounded-xl"
                    {...register("newPassword", {
                      required: "New password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                  />
                </div>
                <p className="text-[10px] text-muted-foreground pl-1 italic">
                  Tip: Use a mix of letters, numbers, and symbols for a stronger
                  password.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-border/50">
              <Button
                type="submit"
                className="h-12 px-10 bg-primary-violet hover:bg-primary-indigo text-white font-bold rounded-xl shadow-lg shadow-primary-violet/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Update Password
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
