import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'

interface Props { products: [{ id: number, title: string, price: number, category: string, image: string }] }
type SingleProductType = { id: number, title: string, price: number, category: string, image: string }

//  COMPONENT
const Index: NextPage<Props> = ({ products }) => {
   return (
      <>
         <h1 className='bg-zinc-800 text-center py-3 text-black font-bold border-b-4 border-white'>PRODUCTS</h1>
         <div className='flex justify-around items-center flex-wrap gap-5 my-10'>

            {products.map((product: SingleProductType) => (
               <div key={product.id} className='border-4 rounded-xl w-64 h-80 flex flex-col items-center justify-around p-5 text-lg gap-2'>
                  <Image src={product.image} width={90} height={90} alt='Image' className='w-32 h-32 rounded-md' />
                  <h5 className='whitespace-nowrap text-white font-bold mt-3'>{product.title.slice(0, 20)}</h5>
                  <p className='bg-blue-300 text-blue-900 px-5 py-2 font-bold text-xl rounded-md'>${product.price}</p>
               </div>
            ))}

         </div>
      </>
   )
}

export const getStaticProps: GetStaticProps = async () => {

   const request = await fetch("https://fakestoreapi.com/products?limit=10")
   const data = await request.json()

   return {
      props: { products: data },
   }
}

export default Index