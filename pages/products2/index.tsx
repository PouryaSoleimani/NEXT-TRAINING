import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, Tooltip } from 'antd';
import { ShoppingBasket } from 'lucide-react';

interface Props { products: [{ id: number, title: string, price: number, category: string, image: string }] }
export type SingleProductType = { id: number, title: string, price: number, category: string, image: string }

//  COMPONENT
const Products2Page: NextPage<Props> = ({ products }) => {

   console.info("%c HELLO", "color : yellow ; font-size : 20px")
   const { Meta } = Card;

   return (
      <>
         <h1 className='bg-zinc-800 text-center py-3 text-white font-bold border-b-4 border-white'>PRODUCTS</h1>

         <div className='flex justify-center  items-center flex-wrap gap-3 my-10 p-16'>
            {products.map((product: SingleProductType) => (

               <Link href={`/products2/${product.id}`} className='hover:scale-105 duration-500 cursor-pointer no-underline border-none' >
                  <Card key={product.id} hoverable style={{ width: 200, height: 230, backgroundColor: "#101010", padding: 0, margin: 0, transition: "all 500ms ease-out", border: "none" }} className='hover:scale-[101%]' cover={<Image src={product.image} width={90} height={110} alt='Image' className='w-32 h-52 rounded-md' />}    >
                     <h5 className='whitespace-nowrap text-white font-bold'>{product.title.slice(0, 20)}</h5>
                     <Tooltip title="Add to Cart" ><Button type="primary" icon={<ShoppingBasket className='w-8 h-8' />} className='tracking-tighter'>${product.price}</Button></Tooltip>
                  </Card>
               </Link>

            ))}
         </div>
      </>
   )
}


// 1 :
export const getStaticProps: GetStaticProps = async () => {

   const request = await fetch("https://fakestoreapi.com/products?limit=10")
   const data = await request.json()

   console.log("DIR NAME ==>", __dirname)

   return {
      props: { products: data },
   }
}

export default Products2Page


// GET STATIC PROPS FUNCTION :
//  1. Only runs on Server Side
//  2. Security
//  3. Can Run Node.js Files
//  4.Only Can Be in page/ Folder
//  5.Return Object (props Property)
//  6. ?