//^ PRODUCTS PAGE
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const products = () => {
  const router = useRouter()
  //^ FUNCTIONS 
  // BACK
  function goBackHandler() { router.back() }
  // PUSH
  function pushHandler() { router.push('/courses') }
  // REPLACE
  function replaceHandler() { router.replace('/courses') }
  // RETURN 
  return (
    <>
      <h1 className='bg-zinc-700 p-4 font-black text-6xl text-center text-white py-32'>{router.query.products?.toString().toUpperCase()} PAGE </h1>
      <div className='mt-10 mx-auto flex justify-center items-center'>
        <Link href="/" className='bg-sky-700 p-2  mx-10 font-extrabold text-white w-64 h-16 rounded-xl no-underline flex items-center justify-center text-2xl hover:scale-105 duration-300'>HOME PAGE</Link>
        <button onClick={goBackHandler} className='bg-emerald-700 px-2 py-2 mx-10 text-white font-extrabold w-64 h-16 rounded-xl flex items-center justify-center text-2xl hover:scale-105 duration-300'>BACK</button>
        <button onClick={pushHandler} className='bg-red-700 px-2 py-2 mx-10 text-white font-extrabold w-64 h-16 rounded-xl flex items-center justify-center text-2xl hover:scale-105 duration-300'>PUSH</button>
        <button onClick={replaceHandler} className='bg-yellow-600 px-2 py-2 mx-10 text-white font-extrabold w-64 h-16 rounded-xl flex items-center justify-center text-2xl hover:scale-105 duration-300'>REPLACE</button>
      </div>
    </>
  )
}

export default products



