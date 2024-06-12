//^ SWR WITH SSR PAGE ========================================================================================================================================
import { NextPage, GetServerSideProps } from 'next'

interface Props { }

const Swrssr: NextPage<Props> = ({ }) => {
  return <div></div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}

export default Swrssr