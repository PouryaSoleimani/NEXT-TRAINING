"use client"
import CommentListComponent from '@/COMPONENTS/COMMENT__LIST/CommentListComponent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const InfiniteScroll = () => {
    const [commentsData, setCommentsData] = useState([])
    const [page, _setPage] = useState(1)

    const fetchCommentsData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=50`).then(data => {
            console.info("COINS DATA ===>", data.data)
            setCommentsData(data.data)
        })
    }

    useEffect(() => { fetchCommentsData() }, [page])

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            console.log("HEIGHT ------>", document.documentElement.scrollHeight)
            console.log(_setPage)
            console.log("Current page ------>", page);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window?.addEventListener("scroll", handleScroll)
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [page])

    return (
        <div className='w-screen h-screen flex items-center justify-center gap-10 p-20  overflow-x-hidden'>
            <CommentListComponent commentsData={commentsData} />
        </div>
    )
}

export default InfiniteScroll