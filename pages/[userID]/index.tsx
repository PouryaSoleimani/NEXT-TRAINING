import React from 'react'
import { useRouter } from 'next/router'

const NestedDynamicRoute = () => {
    const router = useRouter()
    const { userID } = router.query
    return (
        <div className='w-screen h-screen flex flex-col gap-y-10 mt-10 items-center juftify-center bg-black text-white'>
            <h1 className='font-black text-center w-screen text-5xl bg-zinc-800 py-6'>Dynamic Nested Routes</h1>
            <h1 className='font-black text-center w-screen text-5xl bg-zinc-800 py-10'>DYNAMIC PAGE NAME IS  : <span className='text-red-900 bg-zinc-400 px-4 py-2 rounded-xl box-border border-black border-8'>  {userID} </span>  </h1>
        </div>
    )
}

export default NestedDynamicRoute