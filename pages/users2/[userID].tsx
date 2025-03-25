//^  SINGLE USER COMPONENT =====================================================================================================================================
import BackButton from '@/COMPONENTS/FOOTER/BackButton'
import { Card, Spin } from 'antd'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'


interface Props { user: { id: number, name: string, email: string } }
type SingleUserType = { id: number, name: string, email: string }



const SingleUserComponent: NextPage<Props> = ({ user }) => {

   const router = useRouter()

   if (router.isFallback) {
      return (
         <div className='w-screen h-screen flex items-center justify-center bg-black z-10'>
            <Spin size="large" className='z-50' />
         </div>
      )
   }

   return (
      <div className='w-screen h-screen flex items-center justify-center flex-col gap-y-10 bg-gradient-to-br from-zinc-900 via-black to-zinc-800'>
         <Card size="small" style={{ width: 350, backgroundColor: "#1a1a1a36", border: "1px solid #333", color: "white", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", padding: "20px", }} className='backdrop-blur-xl hover:scale-105 duration-300'>
            <p className="text-3xl font-bold text-blue-400 border-b border-gray-700 pb-2">
               ID: {user.id}
            </p>
            <p className="text-2xl font-semibold text-gray-300 border-b border-gray-700 pb-2">
               Name: {user.name}
            </p>
            <p className="text-2xl font-medium text-gray-400">
               Email: {user.email}
            </p>
         </Card>
         <BackButton />
      </div>
   )
}

// GET STATIC PROPS ===================================================================================================================================
export const getStaticProps: GetStaticProps = async (ctx) => {
   const userID = ctx.params?.userID?.toString() ?? null
   const request = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
   const user = await request.json()

   if (!user || Object.keys(user).length === 0) {
      return {
         // notFound: true,
         redirect: { destination: "/users2/not-found2", permanent: false }
      }
   }

   return {
      props: { user },
   }
}


// GET STATIC PATHS ===================================================================================================================================
export const getStaticPaths: GetStaticPaths = async () => {
   const request = await fetch("https://jsonplaceholder.typicode.com/users")
   const users = await request.json()

   const dynamicPaths = users.map((item: SingleUserType) => {
      return { params: { userID: String(item.id) } }
   })

   return {
      paths: dynamicPaths,
      fallback: true,
   }
}

export default SingleUserComponent