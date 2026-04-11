import { getUserLinks } from "@/services/apiProfile";
import { useQuery } from "@tanstack/react-query";

export function useGetAllLinks() {
  const { data: allLinks } = useQuery({
    queryKey: ["allLinks"],
    queryFn: getUserLinks,
  });
  return { allLinks };
}
