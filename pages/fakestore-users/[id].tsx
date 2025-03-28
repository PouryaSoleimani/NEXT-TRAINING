//& FAKESTORE USERS DYNAMIC PAGE
import axios from 'axios'
import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

interface Props { user: { id: number, email: string, username: string, name: { firstname: string, lastname: string } } }
type SingleUserType = { id: number, email: string, username: string, name: { firstname: string, lastname: string } }

//COMPONENT
const FakeStoreDynamicPage: NextPage<Props> = ({ user }) => {
  const router = useRouter()
  function backHandler() { router.back() }

  return (
    <div className='flex items-center justify-center w-screen h-screen flex-col space-y-4'>
      <h1 className='text-3xl font-extrabold bg-zinc-800 px-5 py-3 rounded-xl border-4 border-orange-500'>{user.id}  - {user.name.firstname.toUpperCase()} {user.name.lastname.toUpperCase()}</h1>
      <button className='bg-green-600 px-3 text-3xl font-extrabold rounded-md py-2' onClick={backHandler}>BACK</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id
  const req = axios.get(`https://fakestoreapi.com/users/${id}`)
  const user = (await req).data

  return {
    props: { user }
  }
  
}

export default FakeStoreDynamicPage