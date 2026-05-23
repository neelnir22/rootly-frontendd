import { useChangeEmail } from "@/authentication/useUpdateUser-Email";
import { useChangeUserName } from "@/authentication/useUpdateUser-UserName";
import { useGetUserProfile } from "@/authentication/useGetUserProfile";
import { useUpdateUserNames } from "@/authentication/useUpdateUser-Name";
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
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUserDeactivate } from "@/authentication/useUser-Deactivate";
import { DeleteConfirmationModal } from "@/components/modal/DeleteConfirmationModal";
import { useNavigate } from "react-router";
import {
  User,
  Mail,
  ShieldCheck,
  Download,
  Trash2,
  Power,
  KeyRound,
} from "lucide-react";

export function SettingForm() {
  const navigate = useNavigate();
  const { userproile, isPending } = useGetUserProfile();
  const { changenames } = useUpdateUserNames();
  const { changeemail } = useChangeEmail();
  const { changeusername } = useChangeUserName();
  const { deactivateuser } = useUserDeactivate();

  const [isDisabled, setIsDisabled] = useState(true);
  const firstNameRef = useRef(null);

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

  useEffect(() => {
    if (!isDisabled && firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, [isDisabled]);

  if (isPending) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-indigo border-t-transparent"></div>
          <p className="text-lg font-medium text-muted-foreground">
            Loading settings...
          </p>
        </div>
      </div>
    );
  }

  function onSubmit(data) {
    const updates = Object.keys(dirtyFields);
    if (updates.length === 0) {
      setIsDisabled(true);
      return;
    }

    updates.forEach((key) => {
      if (key === "firstName") changenames({ firstName: data.firstName });
      if (key === "lastName") changenames({ lastName: data.lastName });
      if (key === "email") changeemail(data.email);
      if (key === "userName") changeusername(data.userName);
    });

    setIsDisabled(true);
  }

  function onError(err) {
    const firstError = Object.values(err)[0];
    if (firstError) {
      toast.error(firstError.message);
    }
  }

  return (
    <div className="w-full max-w-[70vw] mx-auto py-10 space-y-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold font-heading tracking-tight text-foreground">
          Account Settings
        </h2>
        <p className="text-muted-foreground text-lg">
          Update your profile information and manage your account security.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Profile Information Card */}
        <Card className="border-border/50 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-indigo/10 rounded-lg">
                <User className="w-5 h-5 text-primary-indigo" />
              </div>
              <div>
                <CardTitle className="text-xl">Profile Information</CardTitle>
                <CardDescription>
                  Personal details and public identity
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    First Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="firstName"
                      disabled={isDisabled}
                      className="h-12 bg-background border-border focus:ring-primary-indigo/20 rounded-xl"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      ref={(e) => {
                        register("firstName").ref(e);
                        firstNameRef.current = e;
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    disabled={isDisabled}
                    className="h-12 bg-background border-border focus:ring-primary-indigo/20 rounded-xl"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="userName"
                    className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Username
                  </Label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                      @
                    </div>
                    <Input
                      id="userName"
                      disabled={isDisabled}
                      className="h-12 pl-9 bg-background border-border focus:ring-primary-indigo/20 rounded-xl"
                      {...register("userName", {
                        required: "Username is required",
                      })}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      disabled={isDisabled}
                      className="h-12 pl-11 bg-background border-border focus:ring-primary-indigo/20 rounded-xl"
                      {...register("email", { required: "Email is required" })}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border/50">
                <Button
                  type={isDisabled ? "button" : "submit"}
                  onClick={() => {
                    if (isDisabled) {
                      setIsDisabled(false);
                    }
                  }}
                  className={`h-12 px-8 rounded-xl font-bold transition-all ${
                    isDisabled
                      ? "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                      : "bg-primary-indigo hover:bg-primary-violet text-white shadow-lg shadow-primary-indigo/20"
                  }`}
                >
                  {isDisabled ? "Edit Profile" : "Save Changes"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Account Actions Card */}
        <Card className="border-border/50 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-violet/10 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-primary-violet" />
              </div>
              <div>
                <CardTitle className="text-xl">Account Management</CardTitle>
                <CardDescription>
                  Security, data, and account status
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button
                onClick={() => navigate("/admin/change-password")}
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2 border-border/50 hover:border-primary-violet/50 hover:bg-primary-violet/5 rounded-2xl transition-all"
              >
                <KeyRound className="w-6 h-6 text-primary-violet" />
                <span className="font-bold">Change Password</span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2 border-border/50 hover:border-primary-indigo/50 hover:bg-primary-indigo/5 rounded-2xl transition-all"
              >
                <Download className="w-6 h-6 text-primary-indigo" />
                <span className="font-bold">Download Data</span>
              </Button>

              <Button
                onClick={deactivateuser}
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2 border-border/50 hover:border-orange-500/50 hover:bg-orange-500/5 rounded-2xl transition-all group"
              >
                <Power className="w-6 h-6 text-orange-500 group-hover:animate-pulse" />
                <span className="font-bold">Deactivate</span>
              </Button>

              <div className="contents">
                <DeleteConfirmationModal
                  trigger={
                    <Button
                      variant="outline"
                      className="h-24 w-full flex flex-col items-center justify-center gap-2 border-border/50 hover:border-destructive/50 hover:bg-destructive/5 rounded-2xl transition-all"
                    >
                      <Trash2 className="w-6 h-6 text-destructive" />
                      <span className="font-bold">Delete Account</span>
                    </Button>
                  }
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-destructive/5 p-4 flex items-start gap-3 border-t border-destructive/10">
            <ShieldCheck className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-xs text-destructive/80 font-medium">
              Actions in this section are sensitive. Some changes may be
              permanent or require email verification.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
