import { login as loginapi } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginapi,
    onSuccess(data) {
      localStorage.setItem("user_token", data.token);
      toast.success(data.message);
      navigate("/admin");
    },
  });
  return { login, isPending };
}
