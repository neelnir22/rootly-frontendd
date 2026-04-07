import { verifyOtp } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useVerifyOtp() {
  const { mutate: verifyotp, isPending } = useMutation({
    mutationFn: verifyOtp,
    onSuccess({ token, message }) {
      toast.success(message);
      localStorage.removeItem("user_token");
      window.location.href = "/admin";
      localStorage.setItem("user_token", token);
    },
  });
  return { verifyotp, isPending };
}
