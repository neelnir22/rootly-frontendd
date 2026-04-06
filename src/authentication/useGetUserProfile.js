import { getUserProfile } from "@/services/apiProfile";
import { useQuery } from "@tanstack/react-query";

export function useGetUserProfile() {
  const { data: userproile, isPending } = useQuery({
    queryKey: ["user-profile"],
    queryFn: getUserProfile,
  });
  return { userproile, isPending };
}
