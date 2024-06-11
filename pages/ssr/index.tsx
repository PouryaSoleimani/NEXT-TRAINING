//^ SSR PAGE _____________________________________________________________________________________________________________________________________________________________________
import axios from 'axios'
import { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'

interface Props { Response: [{ id: number, name: string, username: string, email: string, address: object, phone: string, website: string, company: object }] }

// COMPONENT
const SSR: NextPage<Props> = ({ Response }) => {

  // RETURN
  return (
    <div className='p-4 flex flex-col items-start justify-center space-y-4 font-extrabold '>
      <h1 className='p-2 rounded-md text-center bg-pink-400 flex items-center justify-center text-pink-700 font-bold text-3xl'>SSR RENDERING PAGE</h1>

      {Response.map(item => (
        <Link key={item.id} href={`/ssr/${item.id}`}>
          <h2 className='text-xl hover:bg-zinc-800'>{item.id}--{item.name}</h2>
        </Link>
      ))}

    </div>
  )
}

// GET STATIC PROPS =>
export const getServerSideProps: GetServerSideProps = async () => {

  const Request = axios.get('https://jsonplaceholder.typicode.com/users')
  const Response = (await Request).data

  return { props: { Response } }

}

export default SSR
