import { Card, Flex } from 'antd'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'


interface Props { user: { id: number, name: string, email: string } }
type SingleUserType = { id: number, name: string, email: string }



const SingleUserComponent: NextPage<Props> = ({ user }) => {
   return (
      <div className='w-screen h-screen flex items-center justify-center'>
         <Card size="small" title="User" style={{ width: 300, backgroundColor: "black", border: "none" }} >
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
         </Card>
      </div>
   )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
   const userID = ctx.params?.userID?.toString() ?? null
   const request = await fetch(`https://jsonplaceholder.typicode.com/users/${userID?.toString()}`)
   const user = await request.json()
   return {
      props: { user },
   }
}


export const getStaticPaths: GetStaticPaths = async () => {
   const request = await fetch("https://jsonplaceholder.typicode.com/users")
   const users = await request.json()
   const dynamicPaths = users.map((item: SingleUserType) => {
      return { params: { id: item.id.toString() } }
   })
   return {
      paths: dynamicPaths,
      fallback: false,
   }
}

export default SingleUserComponent