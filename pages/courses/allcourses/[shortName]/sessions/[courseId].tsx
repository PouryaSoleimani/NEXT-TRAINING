import { Home } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'



//^ COMPONENT
const SingleCoursePage = () => {

    const router = useRouter()
    console.log("ROUTER QUERY ===>", router.query)

    function goBackHandler() {
        router.back()
    }


    return (
        <div className='w-screen h-screen flex items-center justify-center flex-col'>
            <h1 className='text-6xl font-extrabold'>SingleCoursePage</h1>
            <p className='text-3xl font-extrabold mt-10 bg-zinc-900 px-10 py-5 rounded-xl'>COURSE NAME : {router.query.shortName?.toString().toUpperCase()}</p>
            <p className='text-3xl font-extrabold my-4 bg-zinc-900 px-10 py-5 rounded-xl'>SESSION NUMBER : {router.query.courseId?.toString().toUpperCase()}</p>
            <Link href="/" className='bg-white text-black px-10 py-2 rounded-md hover:bg-emerald-900 hover:text-white duration-300'><Home className='w-10 h-10' /></Link>
            <button onClick={goBackHandler} className='mt-10 bg-red-900 px-10 py-2 text-4xl font-extrabold rounded-xl'>BACK</button>
        </div>
    )
}

export default SingleCoursePage