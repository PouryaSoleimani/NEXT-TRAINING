import Card from 'antd/es/card/Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type SingleCoinType = { id: string, symbol: string, name: string }

const InfiniteScroll = () => {
    const [commentsData, setCommentsData] = useState([])

    const fetchCommentsData = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(data => {
            console.info("COINS DATA ===>", data.data)
            setCommentsData(data.data)
        })
    }
    useEffect(() => { fetchCommentsData() }, [])

    return (
        <div className='w-screen h-screen flex flex-wrap gap-10 p-20 items-center justify-around'>
            {commentsData.map((item: SingleCoinType) => (
                <Card key={item.id} className='size-32 flex items-center justify-center text-2xl font-bold'>{item.name}</Card>
            ))}
        </div>
    )
}

export default InfiniteScroll