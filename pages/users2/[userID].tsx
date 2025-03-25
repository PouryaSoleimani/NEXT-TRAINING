//^  SINGLE USER COMPONENT =====================================================================================================================================
import BackButton from '@/COMPONENTS/FOOTER/BackButton'
import { Card, Flex, Spin } from 'antd'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'


interface Props { user: { id: number, name: string, email: string } }
type SingleUserType = { id: number, name: string, email: string }



const SingleUserComponent: NextPage<Props> = ({ user }) => {

   const router = useRouter()

   if (router.isFallback) {

      return (
         <div className='w-screen h-screen flex items-center justify-center bg-black'>
            <Spin size="large" />
         </div>
      )

   }
   return (
      <div className='w-screen h-screen flex items-center justify-center flex-col gap-y-10'>
         <Card size="small" color='white' style={{ width: 300, backgroundColor: "#101010", border: "none", color: "white" }} >
            <p className='text-2xl font-semibold border-b border-red-900'>{user.id}</p>
            <p className='text-2xl font-semibold border-b border-red-900'>{user.name}</p>
            <p className='text-2xl font-semibold border-b border-red-900'>{user.email}</p>
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
      return { notFound: true }
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
      fallback: false,
   }
}

export default SingleUserComponent