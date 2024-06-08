//^ SSG RENDERING --> STATIC SITE GENERATION
import { NextPage, GetStaticProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import { Home } from 'lucide-react';

//PROPS TYPE
interface PropsType {
    products: [{
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: { rate: number, count: number }
    }],
    age: number,
    name: string
    ,
    sampleText: string
}


//COMPONENT
const Index: NextPage<PropsType> = ({ products, sampleText }) => {


    //RETURN
    return (
        <>
            <div className='flex flex-col border-2 border-white bg-zinc-900 items-start space-y-2 text-xl p-10 text-slate-200 justify-center font-bold h-full my-10'>
                {products.map(item =>
                    <div key={item.id}>
                        <h1 className='py-2' >
                            <Link href={`/ssg/${item.id}`}>
                                {item.id} - {item.title.slice(0, 30)} - {item.price}$ -
                                {Array(Math.ceil(item.rating.rate)).fill(0).map(item => ('🤍'))}
                                {Array((5 - Math.ceil(item.rating.rate))).fill(0).map(item => ('🖤'))}
                            </Link>
                        </h1>
                    </div>
                )}

            </div>
            <div className='flex itmes-center flex-col justify-center'>
                <Link href='/' className='bg-green-400 flex gap-2 rounded-md p-4 border-8 border-zinc-600 text-black text-2xl font-bold mx-auto'><Home size={32} strokeWidth={2.5} />HOME PAGE</Link>
                <h1 className='text-center mt-2 text-6xl font-extrabold'>{sampleText}</h1>
            </div>
        </>
    )
}


//^ STATIC SITE GENERATION ( SSG ) 
export const getStaticProps: GetStaticProps = async (ctx) => {

    const request = axios.get('https://fakestoreapi.com/products?limit=7');
    const response = (await request).data
    const sampleText = 'HELLO WORLD'
    // RETURN PROPS 
    return {
        props: { products: response, sampleText },
    }
}

export default Index


