import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import db from '@/data/db.json'
import { useState } from 'react'

interface Props { productID: number }

//COMPONENT
const SingleItemMenu: NextPage<Props> = ({ productID }) => {

  const [PRODUCTS, setPRODUCTS] = useState([...db.products])
  const mainProduct = PRODUCTS.find(item => Number(item.id) === productID)

  return (
    <div>

      <h1 className='bg-red-600 p-4 text-xl font-bold'>SINGLE PRODUCT PAGE</h1>

      <div>
        <h2>   {mainProduct?.id} - {mainProduct?.title} - {mainProduct?.price}$</h2>
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

export default SingleItemMenu