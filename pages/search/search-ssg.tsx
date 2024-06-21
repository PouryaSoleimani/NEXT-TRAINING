import { NextPage, GetStaticProps } from 'next'

interface Props { }

const SearchSSGpage: NextPage<Props> = ({ }) => {
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default SearchSSGpage