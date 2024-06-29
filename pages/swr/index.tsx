//^ SWR PAGE ================================================================================================================================================
import { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'

interface Props { }

const SWR: NextPage<Props> = ({ }) => {

  const fetcher = () => fetch('http://localhost:4000/products').then(result => result.json())

  const { data, error, isLoading } = useSWR('products', fetcher)


  //RETURN ===============================================================================================================================================
  return (
    <div>
      <h1 className='text-amber-700 p-2 font-bold text-4xl text-center border-b-8'>SWR PAGE</h1>
      <div className='bg-zinc-900 p-8 font-bold flex flex-col items-start justify-center space-y-42 text-2xl'>
        {isLoading ? <h1 className='text-sky-900'>IS LOADING</h1> : error ? (<h1 className='text-red-700 font-extrabold bg-red-400 p-6'>ERROR</h1>) : (
          data.map((product: { id: number, title: string, price: number }) => (
            <Link key={product.id} href={`/swr/${product.id}`} className='hover:bg-black p-2' >
              <h2> {product.id} - {product.title} || {product.price} $</h2>
            </Link>
          )))}
      </div>
    </div >
  )
}

export default SWR

