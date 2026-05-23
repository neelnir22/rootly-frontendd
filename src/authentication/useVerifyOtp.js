import { verifyOtp } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useVerifyOtp() {
  const navigate = useNavigate();
  const { mutate: verifyotp, isPending } = useMutation({
    mutationFn: verifyOtp,
    onSuccess(data) {
      if (!data) return;
      toast.success(data.message);
      localStorage.setItem("user_token", data.token);
      navigate("/admin");
    },
  });
  return { verifyotp, isPending };
}
