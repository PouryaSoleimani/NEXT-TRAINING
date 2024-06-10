//^ DYNAMIC SSG SINGLE PAGE
import axios from 'axios';
import { NextPage, GetStaticProps, type GetStaticPaths, type GetStaticPropsContext, type PreviewData } from 'next'
import { useRouter } from 'next/router'
import type { ParsedUrlQuery } from 'querystring'

interface Props { product: { id: number, title: string, price: number, description: string, category: string, image: string, rating: object } }

//^COMPONENT
const StaticPage: NextPage<Props> = ({ product }) => {

    const router = useRouter()
    if (router.isFallback) { return (<h1>PLEASE WAIT</h1>) }

    function backHandler() { router.back() }
    const myAge: number = 20

    //RETURN  
    return (
        <>
            <div className='flex items-center justify-center h-screen flex-col space-y-6'>
                <h1 className='bg-zinc-700 text-4xl font-bold p-8 text-zinc-200'>{product.id} - {product.title.slice(0, 30)}  || {product.price}$</h1>
                <button onClick={backHandler} className='bg-yellow-400 text-2xl p-2 text-black font-bold rounded-md'>⬅ BACK</button>
                <h1>{myAge}</h1>
            </div>
        </>

    )
}

//GET STATIC PATH : THIS FUNCTIONS IS JUST LIKE {GET STATIC PROPS} -- BUT IT GET USED IN DYNAMIC ROUTES ==> [id].tsx 
export const getStaticPaths: GetStaticPaths = async () => {

    const request = axios.get('https://fakestoreapi.com/products?limit=7');
    const response = (await request).data
    const paths = response.map((item: { id: number }) => { return { params: { id: String(item.id) } } })


    //RETURN
    return {
        paths: paths,
        fallback: false,
    }

}

//GET STATIC PROPS 
export const getStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {

    const productID = context.params?.id
    const request = axios.get(`https://fakestoreapi.com/products/${productID}`)
    const data = (await request).data

    return {
        props: { product: data },
        revalidate: 5,
    }
}

export default StaticPage