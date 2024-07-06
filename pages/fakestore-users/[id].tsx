import { NextPage, GetServerSideProps } from 'next'

interface Props { }

const FakeStoreDynamicPage: NextPage<Props> = ({ }) => {
  return <div></div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id
  
  return {
    props: {}
  }
}

export default FakeStoreDynamicPage