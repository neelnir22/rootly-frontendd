import { login as loginapi } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginapi,
    onSuccess(data) {
      if (!data) return;
      localStorage.setItem("user_token", data.token);
      toast.success(data.message);
      if (data.emailVerified) {
        navigate("/admin");
      } else {
        navigate("/verify-email");
      }
    },
  });
  return { login, isPending };
}
