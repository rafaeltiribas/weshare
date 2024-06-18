import axios from "axios";
import CustomError from "../util/CustomError";
import { URL_BASE, URL_NONGOV } from "../util/constants";
import Nongov from "../interfaces/nongov";

const useAPINongov = () => {

    const axiosInstance = axios.create({
        baseURL: URL_BASE
    });

    const categoryMap: Record<string, number> = {
        animal: 1,
        child: 2,
        education: 3,
        environment: 4,
        food: 5,
        health: 6
    };

    const getNongovByCategorySlug = (slug?: string) => axiosInstance
        .get<Nongov[]>(URL_NONGOV + (slug ? "/category/" + categoryMap[slug] : ""))
        .then((response) => response.data)
        .catch((error) => {
            if (error.response) {
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode);
                // significa servidor respondeu
            }
            else if(error.request) {
                throw error;
                // significa que o servidor não respondeu
            }
            else {
                throw error;
                // erro desconhecido
            }
        })

    return {getNongovByCategorySlug}    
}
export default useAPINongov