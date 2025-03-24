import { Button, Tooltip } from 'antd'
import { SkipBack } from 'lucide-react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SingleProductType } from '.'

interface Props { ID: number, product: { id: number, title: string, price: string } }

const SingleProductPage: NextPage<Props> = ({ ID, product }) => {
   const router = useRouter()
   function goBackHandler() { router.back() }

   return (
      <section className='w-screen h-screen flex items-center justify-center flex-col gap-y-5'>

         <div className='flex items-center justify-center text-zinc-200 font-bold text-5xl'>
            <h2 className='font-bold bg-zinc-900 px-5 py-4 rounded-md'> SINGLE PRODUCT # {ID}</h2>
         </div>

         <div className='flex items-center justify-center text-zinc-200 font-bold text-5xl'>
            <h2 className='font-bold bg-zinc-900 px-5 py-10 rounded-md'> {product?.title.slice(0, 10)} : ${product?.price}</h2>
         </div>

         <Tooltip title="Back" >
            <Button onClick={goBackHandler} type="primary" icon={<SkipBack className='w-5 h-5' />} className='tracking-tighter'>BACK</Button>
         </Tooltip>

      </section >
   )
}

// Get Static Props
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

// Get Static Paths
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
   const request = await fetch(`https://fakestoreapi.com/products`)
   const products = await request.json()
   const pathsDynamic = products.map((product: SingleProductType) => {
      return {
         paths: { id: product.id }
      }
   })
   return {
      paths: pathsDynamic,
      fallback: false,
   }
}

export default SingleProductPage

