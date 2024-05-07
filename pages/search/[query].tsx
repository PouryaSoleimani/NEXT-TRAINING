import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

interface Props { searchQuery: string | number }

const Query: NextPage<Props> = ({ searchQuery }) => {


  return (
    <>
      <h1>{searchQuery} RESULTS</h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const searchQuery = ctx.params?.query

  return {
    props: { searchQuery, },
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export default Query