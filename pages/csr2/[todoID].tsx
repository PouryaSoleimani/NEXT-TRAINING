import BackButton from '@/COMPONENTS/FOOTER/BackButton'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
type SingleTodoType = { id: number, title: string, completed: boolean }



// COMPONENT  ================================================================================================================================================
const SingleTodo = () => {
    const [singleTodo, setSingleTodo] = useState<SingleTodoType>({ id: 0, title: '', completed: false })
    const router = useRouter()
    const { todoID } = router.query

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoID}`)
            .then(response => response.json())
            .then(json => setSingleTodo(json))
    }, [])




    // RETURN ================================================================================================================================================
    return (
        <div className='w-screen h-screen flex flex-col gap-y-5 items-center justify-center'>

            <div className='bg-gray-800 p-8 rounded-xl shadow-[8px_8px_15px_rgba(0,0,0,0.5),-8px_-8px_15px_rgba(255,255,255,0.1)] flex flex-col items-center w-80'>
                <h2 className='text-5xl font-bold text-white mb-4 '>{singleTodo.id}</h2>
                <h1 className='text-3xl font-semibold text-blue-400 mb-4'>{singleTodo.title}</h1>
                <h3 className={`text-2xl font-medium bg-black p-3 ${singleTodo.completed ? 'text-green-500' : 'text-red-500'}`}>
                    {singleTodo.completed ? 'Completed' : 'Not Completed'}
                </h3>
            </div>

            <BackButton />
        </div>
    )
}

export default SingleTodo