import { useMutation, useQueryClient } from "@tanstack/react-query";
import Nongov from "../interfaces/nongov";
import { URL_NONGOV } from "../util/constants";
import useAPI from "./useAPI";

const useSignUpNongov = () => {
  const {signup} = useAPI<Nongov>(URL_NONGOV);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (nongov: Nongov) => signup(nongov),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["ngos"],
      }),
  });
};
export default useSignUpNongov;
