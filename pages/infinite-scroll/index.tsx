 
"use client"
import CommentListComponent from '@/COMPONENTS/COMMENT__LIST/CommentListComponent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const InfiniteScroll = () => {
    const [commentsData, setCommentsData] = useState([])
    const [page, setPage] = useState(1)

    const fetchCommentsData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=8`).then(data => {
            console.info("COINS DATA ===>", data.data)
            setCommentsData(data.data)
        })
    }

    useEffect(() => { fetchCommentsData() }, [page])


    useEffect(() => {
        const handleScroll = () => {
            const HEIGHT = document.documentElement.scrollHeight
            const TOP = document.documentElement.scrollTop
            const WINDOW = window.innerHeight

            console.log("HEIGHT →", HEIGHT);
            console.log("TOP →", TOP);
            console.log("WINDOW →", WINDOW);
            if (WINDOW + TOP + 1 >= HEIGHT) { setPage(prev => prev + 1) }

        };

        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='w-screen flex items-center justify-center gap-10 p-20  overflow-x-hidden'>
            <CommentListComponent commentsData={commentsData} />
        </div>
    )
}

export default InfiniteScroll