//^ CSR SINGLE DYNAMIC PAGE =======================================================================================================================================
import axios from 'axios'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface Props { }

const SingePageCSR: NextPage<Props> = ({ }) => {
  function getData() { axios.get('https://fakestoreapi.com/products') }
  useEffect(() => { getData() }, [])


  const router = useRouter()

  return (
    <div>
      <h1 className='bg-zinc-800 text-cyan-500 text-3xl text-center font-bold p-4'>CRS RENDERING - SINGLEPAGE.TSX</h1>
      <h2 className='flex items-center justify-center mt-10 text-6xl font-bold bg-zinc-800 py-4 px-8 w-fit mx-auto rounded-xl leading-loose'>{router.query.id}</h2>
    </div>
  )
}


export default SingePageCSR