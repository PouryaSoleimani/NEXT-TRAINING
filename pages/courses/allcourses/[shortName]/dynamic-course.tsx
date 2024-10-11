import { useRouter } from 'next/router'
import React from 'react'




//^ COMPONENT
const DynamicCourseRoute = () => {
    const router = useRouter()
    console.log(router.query)
    return (
        <div className='flex items-center justify-center w-screen h-screen flex-col space-y-10'>
            <h1 className='text-6xl font-extrabold'>DynamicCourseRoute</h1>
            <p className='text-6xl font-extrabold bg-white text-black px-8 py-4 rounded-2xl'>COURSE ID :{router.query.shortName?.toString().toLocaleUpperCase()}</p>
        </div>
    )
}

export default DynamicCourseRoute