import CommentListComponent from '@/COMPONENTS/COMMENT__LIST/CommentListComponent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const InfiniteScroll = () => {
    const [commentsData, setCommentsData] = useState([])
    const [_page, _setPage] = useState(1)


    const fetchCommentsData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${_page}&_limit=12`).then(data => {
            console.info("COINS DATA ===>", data.data)
            setCommentsData(data.data)
        })
    }
    useEffect(() => { fetchCommentsData() }, [_page])

    const handleScroll = () => {
        console.info("HEIGHT +++++>", document.documentElement.scrollHeight)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className='w-screen h-screen flex items-center justify-center gap-10 p-20  overflow-x-hidden'>
            <CommentListComponent commentsData={commentsData} />
        </div>
    )
}

export default InfiniteScroll