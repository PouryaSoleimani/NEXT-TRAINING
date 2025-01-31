import { useRouter } from 'next/router'
import React from 'react'

const TodoDynamicPage = () => {
    const router = useRouter()
    const { todoID } = router.query
    return (
        <div className='w-sceen h-screen flex flex-col gap-y-10 items-center justify-center'>
            <h1 className='text-6xl font-bold text-white'>Todos Dynamic Page</h1>
            <h2 className='text-6xl text-red-700 font-black bg-zinc-700 py-5 px-32 rounded-xl tracking-widest'>{todoID}</h2>
        </div>
    )
}

export default TodoDynamicPage