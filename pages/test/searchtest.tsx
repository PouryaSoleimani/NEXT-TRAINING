//^ SEARCH TEST MAIN PAGE 
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'

interface Props { data: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }

const Searchtest: NextPage<Props> = ({ data }) => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [isShowError, setIsShowError] = useState(false)

  useEffect(() => {
    const filteredProducts = data.filter((item: SingleItemType) => item.title.toLowerCase().includes(search.trim().toLowerCase()))
    setProducts(filteredProducts as [])
    if (!filteredProducts.length) { setIsShowError(true) } else { setIsShowError(false) }
  }, [search])

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => { event.preventDefault(); setSearch(event.target.value) }

  return (
    <>
      <div className='flex items-center justify-center h-[10rem] bg-zinc-600'>
        <input type="text" placeholder='Search Here' value={search} onChange={searchHandler} className='p-2 rounded-md w-[20rem] text-black font-bold' />
      </div>
      {isShowError ? (<h1 className='bg-red-900 text-2xl font-bold rounded-lg mx-auto text-center py-10'> NO PRODUCTS FOUND </h1>) : (
        <div className='flex flex-wrap gap-4 items-center py-10 px-16 justify-start mt-10 mx-auto bg-zinc-800 p-2 w-fit'>
          {products.map((item: SingleItemType) => (
            <div key={item.id} className='bg-zinc-900 w-[12rem] p-3'>
              <h1>{item.id} - {item.title} : ${item.price}</h1>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get('http://localhost:4000/products')
  const data = (await req).data

  return {
    props: { data },
  }
}

export default Searchtest