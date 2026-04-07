import { updateUserUserName } from "@/services/apiProfile";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useChangeUserName() {
  const { mutate: changeusername } = useMutation({
    mutationFn: updateUserUserName,
    onSuccess(message) {
      toast.success(message);
    },
  });
  return { changeusername };
}
