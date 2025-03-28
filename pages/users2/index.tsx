// ^ ALL USERS PAGE ======================================================================================================
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link';

interface Props { users: [{ id: number, name: string, email: string, }] }
type SingleUserType = { id: number, name: string, email: string }



// COMPONENT ==========================================================================================================
const Users2Page: NextPage<Props> = ({ users }) => {

   return (
      <div className='grid grid-cols-4 place-items-center gap-3 px-16 mt-32'>
         {users.slice(0, 9).map((user: SingleUserType) => (
            <Link className='bg-zinc-900 px-5 py-3 text-white border rounded-xl w-[30rem] h-[15rem] flex flex-col justify-center items-center hover:-translate-y-2 duration-300 font-bold' href={`/users2/${user.id.toString()}`} key={user.id}   >
               <h2>{user.id} . {user.name}</h2>
               <p>{user.email}</p>
            </Link>
         ))}
      </div>
   )
}

// GET STATIC PROPS ==========================================================================================================
export const getStaticProps: GetStaticProps = async (ctx) => {
   const request = await fetch("https://jsonplaceholder.typicode.com/users")
   const users = await request.json()
   return {
      props: { users: users },
      revalidate: 3600, //ISR 
   }
}


export default Users2Page