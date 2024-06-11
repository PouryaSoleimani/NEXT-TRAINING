//^ SSG RENDERING --> STATIC SITE GENERATION
import { NextPage, GetStaticProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import { Home } from 'lucide-react';

//PROPS TYPE
interface PropsType {
    products: [{ id: number, title: string, price: number, description: string, category: string, image: string, rating: { rate: number, count: number } }],
    age: number,
    name: string,
    myName: string
}


//^ COMPONENT
const Index: NextPage<PropsType> = ({ products, age, myName }) => {

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
                <Link href='/' className='bg-green-400 flex items-center gap-2 rounded-md p-4 border-8 border-zinc-600 text-black text-2xl font-bold mx-auto'><Home size={32} strokeWidth={2.5} />HOME PAGE</Link>
                <h1 className='text-7xl text-center mt-4 bg-zinc-600 w-fit mx-auto p-3 rounded-full flex items-center justify-center leading-[5.5rem] font-bold text-white'>{age}</h1>
                <h1 className='text-7xl text-center mt-4 bg-zinc-600 w-fit mx-auto px-16 py-5 rounded-full flex items-center justify-center leading-[5.5rem] font-bold text-white'>{myName}</h1>
            </div>
        </>
    )
}


//^ STATIC SITE GENERATION ( SSG ) 
export const getStaticProps: GetStaticProps = async (ctx) => {

    const request = axios.get('https://fakestoreapi.com/products?limit=7');
    const response = (await request).data
    const age = 30
    const myName = 'POURYA SOLEIMANI'   

    // RETURN PROPS =>
    return {
        props: {
            products: response,
            age,
            myName
        },
    }
}

export default Index


