//^ USERS DYNAMIC PAGE
import axios from 'axios'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

interface Props { }
type SingleUserType = { id: number, name: string, email: string, city: string, phone: string }

//^ COMPONENT 
const UserInfoPage: NextPage<Props> = ({ }) => {
  return (
    <>

    </>
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
  const ID = ctx.params?.userID
  const request = axios.get(`https://jsonplaceholder.typicode.com/users/${ID}`)
  const user = (await request).data
  return {
    props: { user },
    revalidate: 2000
  }
}

export default UserInfoPage
