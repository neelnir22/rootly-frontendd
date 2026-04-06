import { updateUserName } from "@/services/apiProfile";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateUserNames() {
  const { mutate: changenames, isPending } = useMutation({
    mutationFn: updateUserName,
    onSuccess(data) {
      toast.success(data.message);
    },
  });
  return { changenames, isPending };
}
