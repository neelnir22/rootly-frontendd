import { updateUserEmail } from "@/services/apiProfile";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useChangeEmail() {
  const navigate = useNavigate();
  const { mutate: changeemail, isPending } = useMutation({
    mutationFn: updateUserEmail,
    onSuccess(data) {
      localStorage.removeItem("user_token");
      toast.success(data.message);
      localStorage.setItem("user_token", data.token);
      navigate("/verify-email");
    },
  });
  return { changeemail, isPending };
}
