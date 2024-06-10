import { NextPage, GetStaticProps } from 'next'

interface Props { }

const Swr: NextPage<Props> = ({ }) => {
  return (
    <div>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default Swr