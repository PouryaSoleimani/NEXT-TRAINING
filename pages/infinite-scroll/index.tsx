
"use client"
import CommentListComponent from '@/COMPONENTS/COMMENT__LIST/CommentListComponent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'

interface Comment { postId: number; id: number; name: string; email: string; body: string; }
//COMPONENT
const InfiniteScroll = () => {
    const [commentsData, setCommentsData] = useState<Comment[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(async () => {

            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=12?page=${page}&limit=3`);

            setCommentsData((prev) => { return [...prev, ...response.data]; });

            setLoading(false);

        }, 1500);
    }, [page]);


    useEffect(() => {

        const HEIGHT = document.documentElement.scrollHeight
        const TOP = document.documentElement.scrollTop
        const INNERHEIGHT = window.innerHeight

        console.log("HEIGHT →", HEIGHT);
        console.log("TOP →", TOP);
        console.log("INNERHEIGHT →", INNERHEIGHT);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };



    return (
        <div className='w-screen flex flex-col items-center justify-center gap-10 p-20  overflow-x-hidden pb-32'>
            <CommentListComponent commentsData={commentsData} />
            {loading && <Audio height="80" width="80" color="blue" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass='' />}
        </div>
    )
}

export default InfiniteScroll