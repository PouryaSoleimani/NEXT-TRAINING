//^ DYNAMIC SSG SINGLE PAGE =======================================================================================================================================================================
import axios from 'axios';
import { NextPage, type GetStaticPaths, type GetStaticPropsContext, type PreviewData } from 'next'
import { notFound, redirect } from 'next/navigation';
import { useRouter } from 'next/router'
import type { ParsedUrlQuery } from 'querystring'

interface Props { product: { id: number, title: string, price: number, description: string, category: string, image: string, rating: object } }
//COMPONENT ========================================================================================================================================================================================
const StaticPage: NextPage<Props> = ({ product }) => {
  //-> 3 - RECIEVING DATA FROM {getStaticProps} FUNCTION AND SHOW IT IN THE JSX ...

  const router = useRouter()
  if (router.isFallback) { return (<h1 className='text-center bg-blue-900 py-4 text-3xl text-blue-200 font-extrabold'>PLEASE WAIT</h1>) }
  function backHandler() { router.back() }

  //RETURN  
  return (
    <div className='flex items-center justify-center h-screen flex-col space-y-6'>
      <h1 className='bg-zinc-700 text-4xl font-bold p-8 text-zinc-200'>{product.id} - {product.title.slice(0, 30)}  || {product.price}$</h1>
      <button onClick={backHandler} className='bg-yellow-400 text-2xl p-2 text-black font-bold rounded-md'>⬅ BACK</button>
    </div>
  )
}

// GET STATIC PATHS : (SSG-DYNAMIC)  =================================================================================================================================================
//THIS FUNCTIONS IS JUST LIKE {GET STATIC PROPS} -- BUT IT GET USED IN DYNAMIC ROUTES ==> [id].tsx 
export const getStaticPaths: GetStaticPaths = async () => {  // This method is Required , When we want to use "DYNAMIC ROUTES"
  //-> 2 - DEFINING THE ACCEPTABLE PATHS FOR DYNAMIC PAGES ...
  const request = axios.get('https://fakestoreapi.com/products?limit=7');
  const response = (await request).data
  const paths = response.map((item: { id: number }) => { return { params: { id: String(item.id) } } })

  return {
    paths: paths,
    fallback: true,
  }
}

// GET STATIC PROPS (SSG - STATIC) ============================================================================================================================================================
export const getStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
  //-> 1 - FETCHING DATA BY CONTEXT PARAMS ID AND SENDING IT TO THE COMPONENT ...
  const productID = context.params?.id
  const request = axios.get(`https://fakestoreapi.com/products/${productID}`)
  const data = (await request).data

  if (!data) {
    return {
      // notFound: true
      redirect: { destination: '/ssg/product-notfound' } // => REDIRECTING THE CLIENT TO A CUSTOM ROUTE IF THE PRODUCT IS NOT FOUND ...
    }
  }
  return {
    props: { product: data },
    revalidate: 10,
  }
}
export default StaticPage

//?TUTORIAL -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// SSG => STATIC SITE GENERATION (PERFORMANCE)
// SSR => SERVER SIDE RENDERING