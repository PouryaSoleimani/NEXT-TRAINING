import BackButton from '@/COMPONENTS/FOOTER/BackButton'
import { Card, Flex } from 'antd'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'


interface Props { user: { id: number, name: string, email: string } }
type SingleUserType = { id: number, name: string, email: string }



const SingleUserComponent: NextPage<Props> = ({ user }) => {
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


export const getStaticProps: GetStaticProps = async (ctx) => {
   const userID = ctx.params?.userID?.toString() ?? null
   const request = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
   const user = await request.json()
   

   return {
      props: { user },
   }
}


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