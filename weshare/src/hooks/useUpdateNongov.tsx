import { useMutation, useQueryClient } from "@tanstack/react-query";
import Nongov from "../interfaces/nongov";
import { URL_NONGOV } from "../util/constants";
import useAPI from "./useAPI";

const useUpdateNongov = () => {
  const {update} = useAPI<Nongov>(URL_NONGOV);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (nongov: Nongov) => update(nongov),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["ngos"],
      }),
  });
};
export default useUpdateNongov;
