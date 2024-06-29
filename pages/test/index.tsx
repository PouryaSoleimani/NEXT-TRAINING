//! TEST PAGE ================================================================================================================
import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
interface Props { data: [{ id: number, title: string, img: string, price: string }] }
type SingleItemType = { id: number, title: string, img: string, price: string }

const Test: NextPage<Props> = ({ data }) => {
  return (
    <>
      <h1 className='text-4xl font-extrabold text-center py-2 bg-red-800'>TEST PAGE</h1>

      <section>
        {data.map((item: SingleItemType) => (
          <div key={item.id}>
            <h2>{item.id}</h2>
            <img src={item.img} alt="" />
            <span>{item.price}</span>
          </div>
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