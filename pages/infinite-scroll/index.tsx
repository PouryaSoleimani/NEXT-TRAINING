import CommentListComponent from '@/COMPONENTS/COMMENT__LIST/CommentListComponent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const InfiniteScroll = () => {
    const [commentsData, setCommentsData] = useState([])
    const [page, setPage] = useState(1)


    const fetchCommentsData = () => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`).then(data => {
            console.info("COINS DATA ===>", data.data)
            setCommentsData(data.data)
        })
    }
    useEffect(() => { fetchCommentsData() }, [])

    return (
        <div className='w-screen h-screen flex flex-wrap gap-10 p-20 items-center justify-around overflow-x-hidden'>
            <CommentListComponent commentsData={commentsData} />
        </div>
    )
}

export default InfiniteScroll