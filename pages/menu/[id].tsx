import axios from 'axios'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import db from '@/data/db.json'
import { useState } from 'react'

interface Props { productID: number }

//COMPONENT
const SingleItemMenu: NextPage<Props> = ({ productID }) => {

  const [PRODUCTS, setPRODUCTS] = useState([...db.products])
  const mainProduct = PRODUCTS.find(item => item.id === String(productID))

  return (
    <div>

      <h1 className='bg-red-600 p-4 text-xl font-bold'>SINGLE PRODUCT PAGE</h1>

      <div>
        <h1 className='bg-yellow-400 text-black text-5xl p-4 rounded-xl font-bold w-fit mt-4 ml-2'>{mainProduct?.id} </h1>
        <h2 className='text-4xl py-10 px-4 '>{mainProduct?.title} - {mainProduct?.price}$</h2>
      </div>

    </div>
  )



}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const productID = ctx.params?.id
  return {
    props: { productID },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export default SingleItemMenu