//^ TEST SSR PAGE ====================================================================================================================================================
import axios from 'axios'
import { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'

interface Props { data: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }

//COMPONENT
const Ssr: NextPage<Props> = ({ data }) => {
  return (
    <div className='p-10 font-bold text-4xl'>
      {data.map((item: SingleItemType) => (
        <Link href={`/test/${item.id}`} key={item.id} className='hover:bg-zinc-700'>
          <h1>{item.id} - {item.title} : {item.price}</h1>
        </Link>
      ))}
    </div>
  )
}

//GET SERVERSIDE PROPS
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const req = axios.get('http://localhost:4000/products')
  const data = (await req).data

  return {
    props: { data }
  }
}

export default Ssr