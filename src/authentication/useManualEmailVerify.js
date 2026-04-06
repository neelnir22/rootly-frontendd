import { manualEmailVerify } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";

export function useManualEmailVerify() {
  const { mutate: manualemailverify } = useMutation({
    mutationFn: manualEmailVerify,
  });
  return { manualemailverify };
}
