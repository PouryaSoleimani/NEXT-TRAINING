import { useRouter } from 'next/router'
import React from 'react'



//^ COMPONENT
const SingleCoursePage = () => {
    const router = useRouter()
    console.log(router.query)
    return (
        <div className='w-screen h-screen flex items-center justify-center flex-col'>
            <h1 className='text-6xl font-extrabold'>SingleCoursePage</h1>
            <p className='text-3xl font-extrabold my-10 bg-zinc-900 px-10 py-5 rounded-xl'>SESSION NUMBER : {router.query.courseId?.toString().toUpperCase()}</p>
        </div>
    )
}

export default SingleCoursePage