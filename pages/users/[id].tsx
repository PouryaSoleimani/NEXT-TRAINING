//^ USERS DYNAMIC PAGE
import axios from 'axios'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
interface Props { user: { id: number, name: string, email: string, city: string, phone: string } }
type SingleUserType = { id: number, name: string, email: string, city: string, phone: string }

//^ COMPONENT 
const UserInfoPage: NextPage<Props> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { setTimeout(() => { setIsLoading(false) }, 500); }, [])

  return (
    <div className='flex items-center justify-center w-full overflow-hidden h-screen text-3xl font-bold underline decoration-emerald-600 decoration-8 scale-150 '>
      {isLoading ? (<h1 className='bg-zinc-900 p-8 rounded-xl text-center overflow-hidden border-8 border-red-950'>LOADING ...</h1>) : (
        <h1 className='bg-zinc-900 p-8 rounded-xl text-center overflow-hidden border-8 border-green-950'>{user.id} - {user.name}</h1>
      )}
    </div>
  )
}

//* STATIC PATHS 
export const getStaticPaths: GetStaticPaths = async () => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users')
  const response = (await request).data
  const paths = response.map((user: SingleUserType) => { return { params: { id: String(user.id) } } })

  return {
    paths: paths,
    fallback: false,
  }
}

//^ STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
  const ID = ctx.params?.id
  const request = axios.get(`https://jsonplaceholder.typicode.com/users/${ID}`)
  const user = (await request).data
  return {
    props: { user },
    revalidate: 2000
  }
}

export default UserInfoPage
