import BackButton from '@/COMPONENTS/FOOTER/BackButton';
import GlassMorphismCard from '@/COMPONENTS/FOOTER/GlassMorphismCard';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { SingleProductType } from '.';
import { useRouter } from 'next/router';
import { Alert, Spin } from 'antd';
interface Props { ID: number, product: { id: number, title: string, price: string, image: string } }



// COMPONENT =======================================================================================================================================
const SingleProductPage: NextPage<Props> = ({ ID, product }) => {
   const router = useRouter()

   if (router.isFallback) {
      return (
         <div className='w-screen h-screen flex items-center justify-center'>
            <Spin tip="Loading..." className='w-96 mx-auto'></Spin>
         </div>
      )
   }
   return (
      <section className='w-screen h-screen flex items-center justify-center flex-col gap-y-8'>
         <h2 className='relative bg-white bg-opacity-10 backdrop-blur-xl w-full text-center  shadow-lg p-3 flex flex-col justify-center font-black text-white'>SINGLE PRODUCT PAGE</h2>
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

   console.log("PRODUCT", product)
   if (product.Headers === null) { return { notFound: true } }


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

   const pathsDynamic = products.slice(0, 5).map((product: SingleProductType) => {
      return { params: { id: product.id.toString() } }
   })

   return {
      paths: pathsDynamic,
      fallback: true,
   }
}

export default SingleProductPage

