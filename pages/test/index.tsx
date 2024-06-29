//* TEST PAGE ============================================================================================================================================
import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
interface Props { data: [{ id: number, title: string, image: string, price: string }] }
type SingleItemType = { id: number, title: string, image: string, price: string }

const Test: NextPage<Props> = ({ data }) => {
  return (
    <>
      <h1 className='text-4xl font-extrabold text-center py-2 bg-red-800'>TEST PAGE</h1>

      <section className='grid grid-cols-5 gap-4 py-4 place-items-center'>
        {data.map((item: SingleItemType) => (
          <Link href={`/test/${item.id}`}>
            <div key={item.id} className='flex flex-col items-center justify-center border-2 w-[16rem] rounded-lg hover:scale-110 duration-700 '>
              <h2 className='text-2xl font-extrabold'>{item.id}</h2>
              <img src={item.image} className='w-full h-[9rem]' />
              <span className='w-full text-center bg-green-600 rounded-b-lg'>{item.price}</span>
            </div>
          </Link>
        ))}
      </section>

    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get("https://fakestoreapi.com/products")
  const data = (await req).data
  return {
    props: { data },
    revalidate: 180
  }
}

export default Test