import { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'

interface Props { }
type SingleItemType = { id: number, title: string, price: number }

const Swrssg: NextPage<Props> = ({ }) => {

  const fetcher = () => fetch('http://localhost:4000/products').then(res => res.json())

  const { data, isLoading, error } = useSWR('PRODUCTS', fetcher)

  return (

    <section className='flex text-xl font-bold space-x-6 flex-wrap'>
      {error ? (<h1>ERROR</h1>) : isLoading ? (<h1>IS LOADING </h1>) : (
        data.map((item: SingleItemType) => (
          <div className='bg-zinc-300 hover:bg-white text-black w-fit px-2 py-1 my-2 rounded-xl'>
            <h1>{item.title}</h1>
          </div>
        ))
      )}
    </section>

  )


}

export default Swrssg