import {connect} from "react-redux";
import {ICoin} from "@/types/api/coin";
import {StakingTable} from "@/client/components/StakingTable";

const mapStateToProps = (state: any) => {
    return {
        staking: state.staking
    }
}

export const Staking = connect(mapStateToProps)((props: any) => {
    const {dispatch} = props;
    const coins = props.staking.coins as ICoin[];
    const coinsString = JSON.stringify(coins);
    const preparedCoins: Record<string, ICoin[]> = {}
    for (const coin of coins) {
        if (preparedCoins[coin.asset]) {
            preparedCoins[coin.asset].push(coin);
        } else {
            preparedCoins[coin.asset] = [coin];
        }
    }


    return (
        <div className={'staking'}>
            <StakingTable tableCoinsData={preparedCoins}/>
        </div>
    )
})

