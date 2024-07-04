//^ PRODUCT NOT FOUND PAGE =========================================================================================================================================
import React from 'react'
import { useRouter } from 'next/router'


const ProductNotFound = () => {

  const router = useRouter()
  function backHandler() { router.back(); }
  function reloadHandler() { router.reload() }


  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
      <h1 className='w-fit p-4 text-6xl bg-red-800 text-white border-red-950 rounded-md font-bold'>PRODUCT NOT FOUND</h1>
      <div className='flex items-center justify-center space-x-10 mt-10'>
        <button onClick={backHandler} className='bg-blue-600 p-3 rounded-md w-28 hover:bg-blue-900 duration-300'>← BACK </button>
        <button onClick={reloadHandler} className='bg-emerald-600 p-3 rounded-md w-28 hover:bg-emerald-900 duration-300'>↺ RELOAD</button>
      </div>
    </div>
  )
}

export default ProductNotFound