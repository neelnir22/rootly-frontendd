/* eslint-disable react-refresh/only-export-components */
import { useLogin } from "@/authentication/useLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { ArrowRight, Loader2, Mail, Lock } from "lucide-react";

export function LoginForm() {
  const {
    handleSubmit,
    register,
  } = useForm();
  const navigate = useNavigate();
  const { login, isPending } = useLogin();

  function onSubmit(data) {
    login(data);
  }

  function onError(err) {
    const errorMessages = Object.values(err).map((e) => e.message);
    if (errorMessages.length > 0) {
      toast.error(errorMessages[0]);
    }
  }

  return (
    <div className="w-full max-w-md space-y-8 p-6 md:p-0">
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold font-heading tracking-tight text-foreground">
          Welcome back
        </h2>
        <p className="text-muted-foreground font-medium">
          Enter your credentials to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-semibold text-foreground"
            >
              Email Address
            </Label>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary-indigo transition-colors" />
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="pl-10 py-6 bg-muted/50 border-border focus:ring-primary-indigo/20 transition-all rounded-xl"
                {...register("email", {
                  required: "Email is required to login",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-semibold text-foreground"
              >
                Password
              </Label>
              <button
                type="button"
                className="text-xs font-bold text-primary-indigo hover:text-primary-violet transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary-indigo transition-colors" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 py-6 bg-muted/50 border-border focus:ring-primary-indigo/20 transition-all rounded-xl"
                {...register("password", {
                  required: "Password is required to login",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full py-7 bg-gradient-to-r from-primary-indigo to-primary-violet text-white font-bold text-lg rounded-xl shadow-lg shadow-primary-indigo/20 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {isPending ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              Sign In <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>
      </form>

      <div className="pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="font-bold text-primary-indigo hover:text-primary-violet transition-colors"
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}
