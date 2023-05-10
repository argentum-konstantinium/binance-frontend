import api from "@/api";
import store from "@/store";
import {SET_COINS} from "@/constants/store/staking/actions";
export default [
  {
    "path": "/",
    "page": "Home"
  },
  {
    "path": "/staking",
    "page": "Staking",
    loader: async () =>{
      const response = await api.staking.getStakingList();
      store.dispatch({type: `staking/${SET_COINS}`, coins: response.data})
      return null
    }
  }
]