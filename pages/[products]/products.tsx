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
      <h1 className='bg-zinc-700 p-4 font-bold text-xl'>{router.query.products?.toString().toUpperCase()} PAGE</h1>
      <div className='mt-10'>
        <Link href="/" className='bg-sky-700 p-2  mx-10'>HOME PAGE</Link>
        <button onClick={goBackHandler} className='bg-emerald-700 px-2 py-2 mx-10'>BACK</button>
        <button onClick={pushHandler} className='bg-red-700 px-2 py-2 mx-10'>PUSH</button>
        <button onClick={replaceHandler} className='bg-yellow-400 px-2 py-2 mx-10'>REPLACE</button>
      </div>
    </>
  )
}

export default products



