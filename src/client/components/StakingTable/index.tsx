// @ts-nocheck
import {Table} from "@/client/components/Table";
import {ICoin} from "@/types/api/coin";

interface IStakingTableProps {
    tableCoinsData: Record<string, ICoin[]>
}

export const StakingTable = (props: IStakingTableProps) => {
    const {tableCoinsData} = props;

    const headData = [
        {content: 'Ticker'},
        {content: 'Quantity'},
    ]

    const bodyData = {
        rows: []
    }

    for (const asset in tableCoinsData) {
        const coins = tableCoinsData[asset];
        const quantity = coins.reduce((acc, coin) => acc + Number(coin.amount), 0);
        bodyData.rows.push([
            {content: asset},
            {content: String(quantity)},
        ])
    }


    return(
        <Table label={'Staking table'} head={headData} body={bodyData} />
    )
}