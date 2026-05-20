/* eslint-disable react-refresh/only-export-components */
import { useSignup } from "@/authentication/useSignup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { ArrowRight, Loader2, User, Mail, Lock, AtSign } from "lucide-react";

export function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { signup, isPending } = useSignup();

  function onSubmit(data) {
    signup(data);
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
          Create account
        </h2>
        <p className="text-muted-foreground font-medium">
          Join Rootly and start managing your links better
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">
              First Name
            </Label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary-indigo transition-colors" />
              <Input
                id="firstName"
                placeholder="John"
                className="pl-9 py-5 bg-muted/50 border-border focus:ring-primary-indigo/20 transition-all rounded-xl text-sm"
                {...register("firstName", { required: "First name is required" })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">
              Last Name
            </Label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary-indigo transition-colors" />
              <Input
                id="lastName"
                placeholder="Doe"
                className="pl-9 py-5 bg-muted/50 border-border focus:ring-primary-indigo/20 transition-all rounded-xl text-sm"
                {...register("lastName", { required: "Last name is required" })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="userName" className="text-sm font-semibold text-foreground">
            Username
          </Label>
          <div className="relative group">
            <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary-indigo transition-colors" />
            <Input
              id="userName"
              placeholder="johndoe"
              className="pl-9 py-5 bg-muted/50 border-border focus:ring-primary-indigo/20 transition-all rounded-xl text-sm"
              {...register("userName", { required: "Username is required" })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email Address
          </Label>
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary-indigo transition-colors" />
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="pl-9 py-5 bg-muted/50 border-border focus:ring-primary-indigo/20 transition-all rounded-xl text-sm"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
              })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-semibold text-foreground">
            Password
          </Label>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary-indigo transition-colors" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="pl-9 py-5 bg-muted/50 border-border focus:ring-primary-indigo/20 transition-all rounded-xl text-sm"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" },
              })}
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full py-6 mt-4 bg-gradient-to-r from-primary-indigo to-primary-violet text-white font-bold text-lg rounded-xl shadow-lg shadow-primary-indigo/20 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {isPending ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>
      </form>

      <div className="pt-4 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-bold text-primary-indigo hover:text-primary-violet transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
