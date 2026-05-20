import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../components/ui/input-otp";
import {
  RefreshCwIcon,
  ShieldCheck,
  ArrowLeft,
  Loader2,
  Link as LinkIcon,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { useVerifyOtp } from "@/authentication/useVerifyOtp";
import { useManualEmailVerify } from "@/authentication/useManualEmailVerify";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function EmailVerification() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      otp: "",
    },
  });
  const navigate = useNavigate();
  const { verifyotp, isPending } = useVerifyOtp();
  const { manualemailverify, isPending: isResending } = useManualEmailVerify();

  function onSubmit(data) {
    if (data.otp.length !== 6) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }
    verifyotp(data.otp);
  }

  const handleResend = async () => {
    try {
      await manualemailverify();
      toast.success("Verification code resent!");
    } catch {
      toast.error("Failed to resend code");
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Left Side - Visual/Branding (Consistent with Login/Signup) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary-indigo to-primary-violet p-12 flex-col justify-between">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-24 -mb-24 blur-3xl"></div>

        <a href="/" className="flex items-center gap-2 group relative z-10">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <LinkIcon className="text-primary-indigo w-6 h-6" />
          </div>
          <span className="text-2xl font-bold font-heading tracking-tight text-white">
            Rootly
          </span>
        </a>

        <div className="relative z-10 max-w-md">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
          <h1 className="text-5xl font-extrabold font-heading text-white mb-6 leading-tight">
            Secure your <br /> account.
          </h1>
          <p className="text-white/80 text-lg font-medium leading-relaxed">
            We take your security seriously. Verify your identity to protect
            your links and analytics.
          </p>
        </div>

        <div className="relative z-10 text-white/60 text-sm font-medium">
          © {new Date().getFullYear()} Rootly Inc. All rights reserved.
        </div>
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md space-y-8">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary-indigo transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold font-heading tracking-tight text-foreground">
              Verify Code
            </h2>
            <p className="text-muted-foreground font-medium">
              We've sent a 6-digit verification code to your email address.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
              <Controller
                name="otp"
                control={control}
                rules={{ required: true, minLength: 6 }}
                render={({ field }) => (
                  <InputOTP
                    maxLength={6}
                    value={field.value}
                    onChange={field.onChange}
                    className="gap-4"
                  >
                    <InputOTPGroup className="gap-3">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="size-14 md:size-16 text-2xl font-bold bg-muted/50 border-2 border-border focus:border-primary-indigo focus:ring-primary-indigo/20 rounded-2xl transition-all"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />

              <div className="flex items-center justify-center">
                <button
                  type="button"
                  disabled={isResending}
                  onClick={handleResend}
                  className="flex items-center gap-2 text-sm font-bold text-primary-indigo hover:text-primary-violet transition-colors disabled:opacity-50"
                >
                  {isResending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <RefreshCwIcon className="w-4 h-4" />
                  )}
                  Resend Code
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full py-8 bg-gradient-to-r from-primary-indigo to-primary-violet text-white font-bold text-lg rounded-2xl shadow-lg shadow-primary-indigo/20 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {isPending ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Verify & Continue"
              )}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground font-medium">
              Having trouble?{" "}
              <a
                href="#"
                className="text-primary-indigo hover:text-primary-violet font-bold transition-colors"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
