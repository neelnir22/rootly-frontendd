import { deleteUser } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";

export function useDeleteUser() {
  const { mutate: deleteuser } = useMutation({
    mutationFn: deleteUser,
    onSuccess() {
      window.location.href = "/";
      localStorage.removeItem("user_token");
    },
  });
  return { deleteuser };
}
