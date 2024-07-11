//^ USERS MAIN PAGE
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

interface Props { users: [{ id: number, name: string, email: string, address: { city: string }, phone: string }] }
type SingleUserType = { id: number, name: string, email: string, address: { city: string }, phone: string }

//^ COMPONENT 
const UsersPage: NextPage<Props> = ({ users }) => {
  return (
    <>
      <h1 className='text-4xl font-bold text-center py-4 bg-emerald-900'>USERS PAGE</h1>
      <div className='flex flex-wrap items-center justify-center p-10 gap-6'>
        {users.slice(0, 9).map((user: SingleUserType) => (

          <Link href={`/users/${user.id}`} key={user.id}>
            <div className='text-xl font-sans border-8 border-emerald-600 bg-zinc-200 text-zinc-800 w-fit h-fit p-4 rounded-xl font-bold hover:scale-90 cursor-pointer duration-300'>
              <h1> {user.id} . {user.name}</h1>
              <h2>FROM :{user.address.city}</h2>
              <p>EMAIL : {user.email.slice(10)}...</p>
              <p>PHONE NUMBER :{user.phone.slice(0, 10)}...</p>
            </div>
          </Link>

        ))}
      </div>
    </>
  )
}

//^ GET STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users')
  const users = (await request).data

  return {
    props: { users },
  }
}



export default UsersPage