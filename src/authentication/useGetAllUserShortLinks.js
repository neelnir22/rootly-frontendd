import { getAllShortLinkDetails } from "@/services/apiLinkShortner";
import { useQuery } from "@tanstack/react-query";

export function useGetAllUserShortLinks() {
  const { data: shortlinkdetails, isPending } = useQuery({
    queryKey: ["user-short-links"],
    queryFn: getAllShortLinkDetails,
  });
  return { shortlinkdetails, isPending };
}
