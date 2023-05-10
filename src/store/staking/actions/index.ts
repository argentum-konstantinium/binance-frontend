import { SET_COINS } from '@/constants/store/staking/actions';
import {ICoin} from "@/types/api/coin";

export const setCoins = (coins: ICoin[]) => ({
    type: `staking/${SET_COINS}`,
    coins
})