import { useRouter } from 'next/router'
import React from 'react'


//^ COMPONENT
const SingleProductPage = () => {
    const router = useRouter()
    return (
        <div className='w-screen h-screen flex items-center justify-center flex-col space-y-10'>
            <h1 className='text-5xl font-extrabold bg-blue-800 px-10 py-5 rounded-xl'>SingleProductPage</h1>
            <h2 className='text-4xl font-extrabold bg-red-900 px-10 py-5 rounded-xl'>Course Name : {router.query.shortName?.toString().toUpperCase()} </h2>
        </div>
    )
}

export default SingleProductPage