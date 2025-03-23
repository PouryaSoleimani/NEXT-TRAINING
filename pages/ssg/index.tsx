//^ SSG RENDERING --> STATIC SITE GENERATION
import { NextPage, GetStaticProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import { Home } from 'lucide-react';
import { ShieldX } from 'lucide-react';
//PROPS TYPE
interface PropsType { products: [{ id: number, title: string, price: number, description: string, category: string, image: string, rating: { rate: number, count: number } }], }

//^ COMPONENT
const Index: NextPage<PropsType> = ({ products }) => {
  //==> 2 - RECIEVING DATA AND SHOW IT IN THE JSX

  return (
    <>
      <div className='flex flex-col border-2 border-white bg-zinc-900 items-start space-y-2 text-xl p-10 text-slate-200 justify-center font-bold h-full my-10'>
        {products.map(item =>
          <div key={item.id}>
            <h1 className='py-2' >
              <Link href={`/ssg/${item.id}`} className='hover:bg-black hover:text-black p-2 rounded-md decoration-none no-underline text-white tracking-tighter font-semibold'>
                {item.id} - {item.title.slice(0, 20)} - {item.price}$-
                {Array(Math.ceil(item.rating.rate)).fill(0).map(item => ('🤍'))}
                {Array((5 - Math.ceil(item.rating.rate))).fill(0).map(item => ('🖤'))}
              </Link>
            </h1>
          </div>
        )}
      </div>

      <div className='flex items-center justify-center'>
        <Link href='/' className='bg-green-400 flex items-center gap-2 rounded-md p-4 border-8 border-zinc-600 text-black text-2xl font-bold mx-auto'><Home size={32} strokeWidth={2.5} />HOME PAGE</Link>
        <Link href='/ssg/product-notfound' className='bg-red-400 flex items-center gap-2 rounded-md p-4 border-8 border-zinc-600 text-black text-2xl font-bold mx-auto'><ShieldX size={32} strokeWidth={2.5} />NOT FOUND PAGE</Link>
      </div>
    </>
  )
}


//^ STATIC SITE GENERATION ( SSG ) (ONLY RUNS ON SERVER SIDE) ====================================================================================================================
export const getStaticProps: GetStaticProps = async (ctx) => {
  //-> 1 - FETCHING DATA AND SENDING IT TO THE COMPONENT ABOVE ...
  const request = axios.get('https://fakestoreapi.com/products?limit=7');
  const response = (await request).data

  // RETURN PROPS
  return {
    props: { products: response, },
  }
}

export default Index


