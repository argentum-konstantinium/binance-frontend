import axios, {AxiosResponse} from "axios";
import {API_URL} from "@/constants/api";
import {ICoin} from "@/types/api/coin";
export default {
    axiosInstance: axios.create({
        baseURL: `${API_URL}/staking`
    }),

    getStakingList(): Promise<AxiosResponse<ICoin[]>> {
        return this.axiosInstance.get('/list');
    }
}