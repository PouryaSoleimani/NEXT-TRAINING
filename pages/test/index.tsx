//* TEST PAGE ---------------------------------------------------------------------------------------------------------------------------------------------------------
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

interface Props { data: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }

//^ COMPONENT ---------------------------------------------------------------------------------------------------------------------------------------------------------
const Index: NextPage<Props> = ({ data }) => {
  return (
    <section className='flex flex-col items-start justify-start'>
      <div className='w-full'><h1 className='bg-zinc-800 p-4 text-4xl font-bold text-center text-red-600'>TEST PAGE</h1></div>
      <div className='bg-zinc-800 mt-4 w-fit rounded-xl mx-auto px-5 py-4 flex flex-wrap items-center justify-center gap-10'>
        {data.map((item: SingleItemType) => (
          <Link href={`/test/${item.id}`} key={item.id}>
            <h1 className='text-xl w-[20rem] bg-zinc-900 cursor-pointer font-semibold hover:bg-black shadow-sm hover:shadow shadow-black p-2 flex justify-between'>{item.id} - {item.title}  <span className='bg-green-600 text-green-950 font-extrabold text-xl px-3'>${item.price}</span></h1>
          </Link>
        ))}
      </div>
    </section>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get('http://localhost:4000/products')
  const data = (await req).data

  return {
    props: { data },
  }
}

export default Index