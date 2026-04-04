import { createLinkShort } from "@/services/apiLinkShortner";
import { useMutation } from "@tanstack/react-query";

export function useCreateShortLink() {
  const {
    mutate: generateshortlink,
    isPending,
    data,
  } = useMutation({
    mutationFn: createLinkShort,
  });
  return { generateshortlink, data, isPending };
}
