import Card from 'antd/es/card/Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type SingleCoinType = { id: string, symbol: string, name: string }

const InfiniteScroll = () => {
    const [coinsData, setCoinsData] = useState([])

    const fetchCryptoData = () => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(data => {
            console.info("COINS DATA ===>", data.data)
            setCoinsData(data.data)
        })
    }
    useEffect(() => { fetchCryptoData() }, [])

    return (
        <div className='w-screen h-screen flex flex-wrap gap-10 p-20 items-center justify-around'>
            {coinsData.map((item: SingleCoinType) => (
                <Card key={item.id} className='size-32 flex items-center justify-center text-2xl font-bold'>{item.name}</Card>
            ))}
        </div>
    )
}

export default InfiniteScroll