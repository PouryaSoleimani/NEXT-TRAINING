//^ SEARCH TEST MAIN PAGE 
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import { useState } from 'react'

interface Props { data: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }

const Searchtest: NextPage<Props> = ({ data }) => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  return (
    <>
      <div className='flex items-center justify-center h-[10rem] bg-zinc-600'>
        <input type="text" placeholder='Search Here' value={search} onChange={event => setSearch(event.target.value)} className='p-2 rounded-md w-[20rem] text-black font-bold' />
      </div>

      <div className='flex flex-wrap gap-4 items-center justify-start mt-10 mx-auto bg-zinc-800 p-2 w-fit'>
        {data.map((item: SingleItemType) => (
          <div key={item.id} className='bg-zinc-900 w-[12rem] p-3'>
            <h1>{item.id} - {item.title} : ${item.price}</h1>
          </div>
        ))}
      </div>
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