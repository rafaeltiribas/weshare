import { useQuery } from "@tanstack/react-query";
import useAPI from "./useAPI";
import { URL_NONGOV } from "../util/constants";
import Nongov from "../interfaces/nongov";

const useNongovs = () => {
  const {get} = useAPI<Nongov>(URL_NONGOV);
  return useQuery({
    queryKey: ["ngos"],
    queryFn: () => get(),
    staleTime: 10_000,
  })
};
export default useNongovs;
