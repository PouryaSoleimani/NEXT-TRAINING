import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

interface Props { ID: number, product: { id: number, title: string, price: string } }

const SingleProductPage: NextPage<Props> = ({ ID, product }) => {
   return (
      <section className='w-screen h-screen flex items-center justify-center flex-col gap-y-5'>
         <div className='flex items-center justify-center text-zinc-200 font-bold text-5xl'>
            <h2 className='font-bold bg-zinc-900 px-5 py-4 rounded-md'> SINGLE PRODUCT # {ID}</h2>
         </div>
         <div className='flex items-center justify-center text-zinc-200 font-bold text-5xl'>
            <h2 className='font-bold bg-zinc-900 px-5 py-10 rounded-md'> {product?.title.slice(0, 10)} : ${product?.price}</h2>
         </div>
         <Link href={"/products2"} className='btn btn-secondary'>BACK</Link>
      </section>
   )
}


export const getStaticProps: GetStaticProps = async (context) => {
   //  GETTING THE DYNAMIC ROUTE PARAMS FROM CONTEXT
   const ID = context.params?.id;
   console.log(ID)

   const request = await fetch(`https://fakestoreapi.com/products/${ID}`)
   const product = await request.json()

   return {
      props: {
         ID: ID,
         product: product
      },
   }
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: false,
   }
}

export default SingleProductPage

