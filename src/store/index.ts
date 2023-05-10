import {createStore} from 'redux';
import rootReducer from "@/store/reducer";



// @ts-ignore
export default createStore(rootReducer, typeof window !== 'undefined' ? window.__INITIAL_STATE__ : {staking: {coins: [] as ICoin[]}});