//^404 ERROR PAGE
import { useRouter } from 'next/router'
import React from 'react'

const NotFound = () => {


  const router = useRouter()
  function backHandler() { router.back() }

  return (
    <div className='flex flex-col space-y-2 items-center justify-center h-screen font-extrabold tracking-tighter text-3xl'>
      <h1 className='bg-zinc-900/50 backdrop-blur-3xl p-4 rounded-md border-2 border-white tracking-widest'>404 ERROR | Not Found</h1>
      <button onClick={backHandler} className='bg-zinc-900/80 text-2xl p-2 hover:bg-zinc-900 hover:border font-bold rounded-md'>⬅ BACK</button>
    </div>
  )
}

export default NotFound


