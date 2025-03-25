import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { Avatar, Card, Flex } from 'antd';
import Link from 'next/link';



interface Props { users: [{ id: number, name: string, email: string, }] }
type SingleUserType = { id: number, name: string, email: string }



// COMPONENT
const Users2Page: NextPage<Props> = ({ users }) => {
   return (
      <div className='flex items-center justify-center h-screen gap-4 flex-wrap'>
         {users.map((user: SingleUserType) => (
            <Link href={`/users2/${user.id.toString()}`} key={user.id} className='bg-zinc-900 px-5 py-3 text-white rounded-xl w-[30rem]'>
               <h2>{user.id} . {user.name}</h2>
               <p>{user.email}</p>
            </Link>
         ))}
      </div>
   )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
   const request = await fetch("https://jsonplaceholder.typicode.com/users")
   const users = await request.json()
   return {
      props: { users: users },
   }
}


export default Users2Page