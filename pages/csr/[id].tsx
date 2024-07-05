//^ CSR SINGLE DYNAMIC PAGE =======================================================================================================================================
import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Props { }
type SingleProductType = { id: number, title: string, price: number }
// COMPONENT
const SingePageCSR: NextPage<Props> = ({ }) => {

  const [ data, setdata ] = useState([])

  function getData() { axios.get('http://localhost:4000/products').then(data => setdata(data.data)) }
  useEffect(() => { getData() }, [])

  const router = useRouter()

  return (
    <>
      <div>
        <h1 className='bg-zinc-800 text-cyan-500 text-3xl text-center font-bold p-4'>CRS RENDERING - SINGLEPAGE.TSX</h1>
        <h2 className='flex items-center justify-center mt-10 text-6xl font-bold bg-zinc-800 py-4 px-8 w-fit mx-auto rounded-xl leading-loose'>{router.query.id}</h2>
      </div>
      <div className='flex flex-wrap items-center justify-center mt-6 px-10 gap-4'>
        {data.map((product: SingleProductType) => (
          <div key={product.id} className='bg-zinc-800 flex w-[30rem] my-2 hover:bg-zinc-800 cursor-pointer items-center justify-between pl-2 pr-4 py-4 text-2xl font-semibold rounded-md hover:border box-border'>
            <h1 className='w-3/4'>{product.id} - {product.title.slice(0, 20)}</h1>
            <p className='w-fit bg-emerald-400 text-emerald-800 px-1 rounded-md'>$ {product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}


export default SingePageCSR