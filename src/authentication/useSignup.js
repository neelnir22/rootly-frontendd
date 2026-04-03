import { signUp } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess(data) {
      localStorage.setItem("user_token", data.token);
      toast.success(data.message);
    },
  });
  return { signup, isPending };
}
