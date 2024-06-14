import { useQuery } from "@tanstack/react-query";
import NonGov from "../interfaces/nongov";
import { URL_NONGOV } from "../util/constants";
import useAPI from "./useAPI";

interface QueryString {
  page: number;
  size: number;
  name: string;
}

const useNonGovWithPage = (query: QueryString) => {
  const { getPage } = useAPI<NonGov>(URL_NONGOV);

  return useQuery({
    queryKey: ["ngos", "page", query],
    queryFn: () =>
      getPage({
        params: {
          // pagina: query.pagina,
          // tamanho: query.tamanho
          ...query,
        },
      }),
    staleTime: 10_000,
  });
};
export default useNonGovWithPage;
