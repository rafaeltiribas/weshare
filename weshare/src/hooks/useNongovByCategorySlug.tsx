import { useQuery } from "@tanstack/react-query";
import useAPINongov from "./useAPINongov";

const useNongovByCategorySlug = (slug?: string) => {
  const {getNongovByCategorySlug} = useAPINongov();
  return useQuery({
    queryKey: slug ? ["ngos", "categorySlug", slug] : ["ngos"],
    queryFn: () => getNongovByCategorySlug(slug),
    staleTime: 10_000,
  })
};
export default useNongovByCategorySlug;