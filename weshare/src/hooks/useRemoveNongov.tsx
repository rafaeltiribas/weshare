import { useMutation, useQueryClient } from "@tanstack/react-query";
import Nongov from "../interfaces/nongov";
import { URL_NONGOV } from "../util/constants";
import useAPI from "./useAPI";

const useRemoveNongov = () => {
  const {remove} = useAPI<Nongov>(URL_NONGOV);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => remove(id),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["ngos"],
      }),
  });
};
export default useRemoveNongov;
