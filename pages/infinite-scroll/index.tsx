
"use client"
import CommentListComponent from '@/COMPONENTS/COMMENT__LIST/CommentListComponent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ClipLoader } from "react-spinners";

interface Comment { postId: number; id: number; name: string; email: string; body: string; }
//COMPONENT
const InfiniteScroll = () => {
    const [commentsData, setCommentsData] = useState<Comment[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const fetchCommentsData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=6`).then(data => {
            console.info("COINS DATA ===>", data.data)
            setCommentsData((prev) => [...prev, ...data.data])
            setTimeout(() => {
                setLoading(false)
            }, 1500);
        })
    }

    useEffect(() => { fetchCommentsData() }, [page])


    useEffect(() => {
        const handleScroll = () => {
            const HEIGHT = document.documentElement.scrollHeight
            const TOP = document.documentElement.scrollTop
            const INNERHEIGHT = window.innerHeight

            console.log("HEIGHT →", HEIGHT);
            console.log("TOP →", TOP);
            console.log("INNERHEIGHT →", INNERHEIGHT);

            if (INNERHEIGHT + TOP + 1 >= HEIGHT) {
                setLoading(true)
                setPage(prev => prev + 1)
            }

        };

        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleScroll);
            return () => { window.removeEventListener("scroll", handleScroll) }
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='w-screen flex flex-col items-center justify-center gap-10 p-20  overflow-x-hidden'>
            <CommentListComponent commentsData={commentsData} />
            {loading && <ClipLoader color="#FFF" loading={loading} size={350} aria-label="Loading Spinner" data-testid="loader" />}
        </div>
    )
}

export default InfiniteScroll