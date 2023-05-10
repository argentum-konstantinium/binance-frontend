import {SET_COINS} from "@/constants/store/staking/actions";
import {ICoin} from "@/types/api/coin";
interface IStakingState {
    coins: ICoin[]
}
const stakingReducer = (state: IStakingState = {coins: []}, action: any) : IStakingState => {
    switch (action.type) {
        case `staking/${SET_COINS}`:
            return {
                ...state,
                coins: action.coins
            }
        default:
            return state
    }
}

export default stakingReducer;