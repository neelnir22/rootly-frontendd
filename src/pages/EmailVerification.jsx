// import { useValidateOtp } from "@/authentication/useValidateOtp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "../components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../components/ui/input-otp";
// import { manualEmailVerify, validateOtp } from "@/services/apiValidateOtp";
import { RefreshCwIcon } from "lucide-react";
import { useForm } from "react-hook-form";

export function EmailVerification() {
  const { register, handleSubmit } = useForm();
  // const { verifyOtp } = useValidateOtp();

  function onSubmit(otp) {
    console.log(otp);
    // verifyOtp(otp);
  }

  function onError(error) {
    console.log({ error });
  }
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Verify your login</CardTitle>
            <CardDescription>
              Enter the verification code we sent to your email address
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="otp-verification">
                  Verification code
                </FieldLabel>
                <Button
                  variant="outline"
                  size="xs"
                  // onClick={}
                >
                  <RefreshCwIcon />
                  Resend Code
                </Button>
              </div>

              <InputOTP
                maxLength={6}
                id="otp-verification"
                {...register("otp")}
              >
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator className="mx-2" />
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>

              <FieldDescription>
                <a href="#">I no longer have access to this email address.</a>
              </FieldDescription>
            </Field>
          </CardContent>
          <CardFooter>
            <Field>
              <Button type="submit" className="w-full">
                Verify
              </Button>
              <div className="text-sm text-muted-foreground">
                Having trouble signing in?{" "}
                <a
                  href="#"
                  className="underline underline-offset-4 transition-colors hover:text-primary"
                >
                  Contact support
                </a>
              </div>
            </Field>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
