import { signUp } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess(data) {
      localStorage.setItem("user_token", data.token);
      toast.success(data.message);
      navigate("/verify-email");
    },
  });
  return { signup, isPending };
}
