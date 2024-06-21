//! SEARCH WITH SSG PAGE ==============================================================================================================================================================
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

interface Props { products: [{ id: number, title: string, image: string }] }

const SearchSSGpage: NextPage<Props> = ({ products }) => {

  const [search, setSearch] = useState('')
  const [PRODUCTS, setPRODUCTS] = useState(products)
  const [isShowError, setIsShowError] = useState(false)

  useEffect(() => {
    const copy = [...products]
    const filteredArray: any = copy.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    if (!search.length) { setPRODUCTS(products) }
    if (!filteredArray.length) { setIsShowError(true) } else { setIsShowError(false) }
    setPRODUCTS(filteredArray)
  }, [search])


  return (
    <>
      <div className='p-4 flex items-center justify-center bg-emerald-950'>
        <input type="search" placeholder='search' className='px-2 py-1 rounded-md font-bold text-black outline-none' value={search} onChange={event => setSearch(event.target.value)} />
      </div>
      <div className='flex flex-wrap px-10 py-10 gap-2 items-center justify-center'>
        {isShowError ? (<h1 className='text-center font-bold text-4xl text-red-900'>NO PRODUCTS FOUND</h1>) : (
          PRODUCTS.slice(0,18).map(item => (
            <div key={item.id} className='bg-zinc-800 w-fit p-4 rounded-md flex flex-col items-center justify-center'>
              <img src={item.image} className='w-24 h-24 rounded-md' />
              <h1 className='font-extrabold'>{item.title.slice(0, 10)}</h1>
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

export default SearchSSGpage