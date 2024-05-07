import { NextPage, GetStaticProps } from 'next'

interface Props { }

const SearchInput: NextPage<Props> = ({ }) => {
  return (
    <div>
      <h1>SEARCH INPUT PAGE</h1>
    </div>)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default SearchInput