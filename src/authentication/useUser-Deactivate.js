import { deactivateUser } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";

export function useUserDeactivate() {
  const { mutate: deactivateuser } = useMutation({
    mutationFn: deactivateUser,
    onSuccess() {
      window.location.href = "/";
    },
  });

  return { deactivateuser };
}
