//^ USERS DYNAMIC PAGE
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

interface Props { }

const Userinfo: NextPage<Props> = ({ }) => {
  return <div></div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default Userinfo
