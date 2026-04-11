import { addLink } from "@/services/apiProfile";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddLink() {
  const { mutate: addlink } = useMutation({
    mutationFn: addLink,
    onSuccess({ message }) {
      toast.success(message);
    },
  });
  return { addlink };
}
