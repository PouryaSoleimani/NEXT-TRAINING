import { SkipBack, StepBack } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'

const SingleCoursePage = () => {

    const router = useRouter()
    const { courseName } = router.query
    function backHandler(): void { router.back() }


    return (
        <div className='w-screen h-screen flex flex-col gap-y-10 mt-10 items-center juftify-start bg-black text-white'>
            <h1 className='mt-16'> WELCOME TO <span className='bg-yellow-400 text-black font-black text-5xl px-10 text-center rounded-3xl border-8 border-zinc-700 box-border'>  {courseName?.toLocaleString().toUpperCase().trim()}  √</span> COURSE</h1>
            <button onClick={backHandler} className='bg-yellow-400 text-black font-black text-4xl px-4 py-2 rounded-xl hover:text-white duration-300 flex items-center gap-x-10'><StepBack width={30} height={30} />BACK</button>
        </div>
    )
}

export default SingleCoursePage