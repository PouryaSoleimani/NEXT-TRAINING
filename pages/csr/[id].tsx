//^ CSR SINGLE DYNAMIC PAGE =======================================================================================================================================
import axios from 'axios'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Props { }
type SingleProductType = { id: number, title: string, price: number }

const SingePageCSR: NextPage<Props> = ({ }) => {

  function getData() { axios.get('https://fakestoreapi.com/products').then(data => setdata(data.data)) }
  const [data, setdata] = useState([])
  useEffect(() => { getData() }, [])


  const router = useRouter()

  return (
    <>
      <div>
        <h1 className='bg-zinc-800 text-cyan-500 text-3xl text-center font-bold p-4'>CRS RENDERING - SINGLEPAGE.TSX</h1>
        <h2 className='flex items-center justify-center mt-10 text-6xl font-bold bg-zinc-800 py-4 px-8 w-fit mx-auto rounded-xl leading-loose'>{router.query.id}</h2>
      </div>
      <div className='grid grid-cols-3 mt-6 px-10 gap-4'>
        {data.map((product: SingleProductType) => (
          <div key={product.id} className='bg-zinc-900 flex w-[30rem] my-2 hover:bg-zinc-800 cursor-pointer items-center justify-between pl-2 pr-4 py-4 text-2xl font-semibold rounded-md'>
            <h1 className='w-3/4'>{product.id} - {product.title.slice(0, 20)}</h1>
            <p className='w-fit'>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}


export default SingePageCSR