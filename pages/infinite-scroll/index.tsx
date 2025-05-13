import CommentListComponent from '@/COMPONENTS/COMMENT__LIST/CommentListComponent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



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
            <CommentListComponent  commentsData={commentsData}/> 
        </div>
    )
}

export default InfiniteScroll