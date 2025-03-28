import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const DynamicNestedRoute = () => {

    const router = useRouter();
    const { course, sessionID } = router.query;

    return (
        <div className='w-screen h-screen flex flex-col gap-y-10 mt-10 items-center juftify-center bg-black text-white'>
            <h1 className='bg-zinc-800 w-screen py-6 text-center font-black text-5xl'>DYNAMIC NESTED ROUTE</h1>
            <h1 className='bg-zinc-300 w-screen py-12 text-center font-black text-5xl text-black'>
                COURSE : <span className='bg-slate-900 text-slate-300 px-7 py-2 rounded-xl box-border border-8 border-red-900'>{course?.toLocaleString().toUpperCase()}</span>-
                SESSION :  <span className='bg-slate-900 text-slate-300 px-7 py-2 rounded-xl box-border border-8 border-red-900'>{sessionID?.toLocaleString()}</span>
            </h1>
            <Link href="/" className='text-5xl text-center bg-green-900 py-3 px-6 rounded-xl no-underline text-white font-black flex items-center justify-center'>🏠 HOME PAGE</Link>
        </div>
    )
}

export default DynamicNestedRoute