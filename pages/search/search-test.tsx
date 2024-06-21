import axios from 'axios'
import { Heading1 } from 'lucide-react'
import { NextPage, GetStaticProps } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'

interface Props { products: [{ id: number, title: string }] }

const SearchTestPage: NextPage<Props> = ({ products }) => {

  const [PRODUCTS, setPRODUCTS] = useState(products)
  const [search, setSearch] = useState('')
  const [isShowError, setIsShowError] = useState(false)

  useEffect(() => {
    const resultArray: any = PRODUCTS.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    if (resultArray.length) { setIsShowError(false) } else { setIsShowError(true) }
    if (!search.length) { setPRODUCTS(products) } else { setPRODUCTS(resultArray) }
  }, [search])

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => { setSearch(event.target.value) }

  return (
    <>
      <div className='bg-zinc-700 px-3 py-10 flex items-center justify-center'>
        <input type="search" placeholder='search' className='p-2 font-semibold w-72 text-black outline-none' value={search} onChange={searchHandler} />
      </div>
      <div className='flex flex-wrap gap-4 p-10 items-center justify-center'>
        {isShowError ? (<h1 className='bg-red-200 text-red-900 font-bold text-2xl text-center rounded-md border-4 p-2 border-red-700'>NO PRODUCTS FOUND !</h1>) : (
          PRODUCTS.map((item) => (
            <div key={item.id} className='bg-zinc-800 w-fit p-2 rounded-md font-bold'>
              <h1>{item.title.slice(0, 10)}</h1>
            </div>
          ))
        )}

      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get('https://fakestoreapi.com/products')
  const products = (await req).data
  return {
    props: { products },
  }
}

export default SearchTestPage