import CommentListComponent from '@/COMPONENTS/COMMENT__LIST/CommentListComponent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const InfiniteScroll = () => {
    const [commentsData, setCommentsData] = useState([])
    const [_page, _setPage] = useState(12)


    const fetchCommentsData = () => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${_page}&sparkline=false`).then(data => {
            console.info("COINS DATA ===>", data.data)
            setCommentsData(data.data)
        })
    }
    useEffect(() => { fetchCommentsData() }, [_page])

    return (
        <div className='w-screen h-screen flex items-center justify-center gap-10 p-20  overflow-x-hidden'>
            <CommentListComponent commentsData={commentsData} />
        </div>
    )
}

export default InfiniteScroll