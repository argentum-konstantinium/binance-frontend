import stakingReducer from "@/store/staking/reducers";
import {combineReducers} from "redux";

interface IRootReducer {
    staking: typeof stakingReducer
}

const rootReducer = combineReducers({
    staking: stakingReducer
})

export default rootReducer;