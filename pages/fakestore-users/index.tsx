//& FAKESTORE USERS PAGE ==================================================================================================================================
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

interface Props { users: [ { id: number, email: string, username: string, name: { firstname: string, lastname: string } } ] }
type SingleUserType = { id: number, email: string, username: string, name: { firstname: string, lastname: string } }
// COMPONENT
const FakeStoreUserPage: NextPage<Props> = ({ users }) => {
  return (
    <section className='grid grid-cols-3 items-center gap-y-2 mt-10  place-items-center w-screen h-fit'>
      {users.slice(0, 9).map((user: SingleUserType) => (
        <Link href={`/fakestore-users/${user.id}`} key={user.id}>
          <div className='bg-zinc-800 px-6 py-2 w-[15rem] rounded-md h-fit border-4 border-orange-400 hover:border-orange-600 duration-300 cursor-pointer'>
            <h1 className='font-extrabold'>{user.id} - {user.name.firstname.toUpperCase()} {user.name.lastname.toUpperCase()}</h1>
          </div>
        </Link>
      ))}
    </section>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get('https://fakestoreapi.com/users')
  const users = (await req).data
  return {
    props: { users: users },
  }
}

export default FakeStoreUserPage