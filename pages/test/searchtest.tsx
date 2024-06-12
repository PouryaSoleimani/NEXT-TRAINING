//^ SEARCH TEST MAIN PAGE 
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'

interface Props { data: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }

const Searchtest: NextPage<Props> = ({ data }) => {
  //STATES
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [isShowError, setIsShowError] = useState(false)

  //^ FILTER PRODUCTS
  useEffect(() => {
    const filteredProducts = data.filter((item: SingleItemType) => item.title.toLowerCase().includes(search.trim().toLowerCase()))
    setProducts(filteredProducts as [])
    if (!filteredProducts.length) { setIsShowError(true) } else { setIsShowError(false) }
  }, [search])

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => { event.preventDefault(); setSearch(event.target.value) }

  //^ RETURN
  return (
    <>
      <div className='flex items-center justify-center h-[10rem] bg-zinc-600'>
        <input type="text" placeholder='Search Here' value={search} onChange={searchHandler} className='p-2 rounded-md w-[32rem] text-black font-bold outline-none border-8 border-zinc-700' />
      </div>
      {isShowError ? (<h1 className='bg-red-900 text-2xl font-bold rounded-lg mx-auto text-center py-10'> NO PRODUCTS FOUND </h1>) : (
        <div className='flex flex-wrap gap-4 items-center py-10 px-16 justify-center mt-10 mx-auto bg-zinc-800 p-2 w-fit'>
          {products.map((item: SingleItemType) => (
            <Link href={`/test/${item.id}`} key={item.id} className='bg-zinc-900 w-[15rem] p-3 hover:bg-zinc-200 hover:text-black hover:font-extrabold'>
              <h1>{item.id} - {item.title} : ${item.price}</h1>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}


//^ STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get('http://localhost:4000/products')
  const data = (await req).data

  return {
    props: { data },
  }
}

export default Searchtest