import { Button, Tooltip } from 'antd'
import { ShoppingBasket, SkipBack } from 'lucide-react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { SingleProductType } from '.'
import Image from 'next/image'
import GlassMorphismCard from "@/COMPONENTS/FOOTER/GlassMorphismCard"
import BackButton from '@/COMPONENTS/FOOTER/BackButton'
interface Props { ID: number, product: { id: number, title: string, price: string, image: string } }

const SingleProductPage: NextPage<Props> = ({ ID, product }) => {




   return (
      <section className='w-screen h-screen flex items-center justify-center flex-col gap-y-3'>
         <GlassMorphismCard product={product} />
         <BackButton />
      </section >
   )
}

// Get Static Props ==================================================================================================================================
export const getStaticProps: GetStaticProps = async (context) => {
   //  GETTING THE DYNAMIC ROUTE PARAMS FROM CONTEXT
   const ID = context.params?.id;
   console.log(ID)

   const request = await fetch(`https://fakestoreapi.com/products/${ID}`)
   const product = await request.json()

   return {
      props: { ID: ID, product: product },
   }
}

// Get Static Paths =================================================================================================================================
export const getStaticPaths: GetStaticPaths = async () => {
   // STATIC WAY
   const pathsStatic = [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
   ]

   // DYNAMIC WAY
   const request = await fetch("https://fakestoreapi.com/products?limit=10")
   const products = await request.json()

   const pathsDynamic = products.map((product: SingleProductType) => {
      return { params: { id: product.id.toString() } }
   })

   return {
      paths: pathsDynamic,
      fallback: false,
   }
}

export default SingleProductPage

