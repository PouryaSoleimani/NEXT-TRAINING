//^ MENU DYNAMIC SINGLE ITEM PAGE
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useState } from 'react'
import db from '@/data/db.json'
import { useRouter } from 'next/router'

interface Props { productID: number }

//COMPONENT
const SingleItemMenu: NextPage<Props> = ({ productID }) => {

  const [PRODUCTS, setPRODUCTS] = useState([...db.products])
  const mainProduct = PRODUCTS.find(item => String(item.id) === String(productID))
  const router = useRouter()

  function backHandler() { router.back() }


  return (
    <div>

      <h1 className='bg-red-600 p-4 text-xl font-bold'>MENU SINGLE ITEM PAGE</h1>

      <div>
        <h1 className='bg-yellow-400 border-8 border-orange-600 text-black text-5xl p-4 rounded-lg font-bold w-fit mt-4 ml-2'>{mainProduct?.id} </h1>
        <h2 className='text-4xl border-8  py-10 px-4 bg-sky-800/40 w-fit my-2 ml-2 font-bold rounded-lg'>{mainProduct?.title} - {mainProduct?.price}$</h2>
      </div>

      <div>
        <button onClick={backHandler} className='bg-zinc-700 border-8 border-zinc-900 p-2 text-xl ml-2 font-bold rounded-lg'>BACK</button>
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