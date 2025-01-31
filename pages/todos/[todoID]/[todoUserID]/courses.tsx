import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'

const TodoNestedCourses = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center gap-y-4'>
            <h1 className='text-7xl font-black text-white'>Todo Nested Courses</h1>
            <h2 className='font-black text-blue-500 text-4xl'>QUERY PARAMS :</h2>
            <ChevronDown className='w-16 h-16 font-black text-3xl text-yellow-400 bg-zinc-900 rounded-full' />
            <h2 className='text-7xl font-black text-zinc-100 bg-zinc-800 p-6 rounded-xl'>{router.query.todoID}</h2>
            <h2 className='text-7xl font-black text-zinc-100 bg-zinc-800 p-6 rounded-xl'>{router.query.todoUserID}</h2>
        </div>
    )
}

export default TodoNestedCourses