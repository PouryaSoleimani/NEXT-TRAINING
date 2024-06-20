//^ USERS DYNAMIC PAGE
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

interface Props { }


//^ COMPONENT 
const UserInfoPage: NextPage<Props> = ({ }) => {
  return (
    <>

    </>
  )
}


//* STATIC PATHS 
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

//^ STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
  const ID = ctx.params?.userID
  return {
    props: {},
  }
}

export default UserInfoPage
