import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'

interface Props { products: [{ id: number, title: string, price: number, category: string, image: string }] }
type SingleProductType = { id: number, title: string, price: number, category: string, image: string }

//  COMPONENT
const Index: NextPage<Props> = ({ products }) => {
   return (
      <>
         <h1>PRODUCTS</h1>
         {products.map((product: SingleProductType) => (
            <div key={product.id}>
               <Image src={product.image} width={100} height={100} alt='Image' />
               <h2>{product.title}</h2>
               <p>{product.price}</p>
            </div>
         ))}
      </>
   )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
   const request = await fetch("https://fakestoreapi.com/products?limit=10")
   const data = await request.json()

   return {
      props: { products: data },
   }
}

export default Index