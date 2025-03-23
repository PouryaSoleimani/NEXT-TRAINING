//^404 ERROR PAGE
import { useRouter } from 'next/router'
import React from 'react'

const NotFound = () => {


  const router = useRouter()
  function backHandler() { router.back() }

  return (
    <div className='flex flex-col space-y-2 items-center justify-center h-screen font-extrabold tracking-tighter text-3xl'>
      <h1 className='bg-zinc-900/50 border-4 border-red-900 backdrop-blur-3xl p-4 text-white font-semibold tracking-tighter rounded-xl'>404 ERROR | Not Found</h1>
      <button onClick={backHandler} className='bg-zinc-900/80 text-3xl p-3 hover:bg-zinc-700 font-bold rounded-xl text-white'>⬅ BACK</button>
    </div>
  )
}

export default NotFound


