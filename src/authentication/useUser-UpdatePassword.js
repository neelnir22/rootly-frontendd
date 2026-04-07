import { updatePassword } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useUpdatePassword() {
  const navigate = useNavigate();
  const { mutate: changepassword } = useMutation({
    mutationFn: updatePassword,
    onSuccess(data) {
      toast.success(data);
      navigate("/admin/settings");
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { changepassword };
}
