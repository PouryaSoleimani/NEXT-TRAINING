import { useRouter } from 'next/router'
import React from 'react'

const SingleCoursePage = () => {

    const router = useRouter()
    const { courseName } = router.query
    return (
        <div className='w-screen h-screen flex flex-col gap-y-10 mt-10 items-center juftify-center bg-black text-white'>
            <h1 className='mt-16'> WELCOME TO <span className='bg-green-900 text-white font-black text-5xl px-10 text-center rounded-3xl border-8 border-white box-border'>  {courseName?.toLocaleString().toUpperCase().trim()}  √</span> COURSE</h1>
        </div>
    )
}

export default SingleCoursePage