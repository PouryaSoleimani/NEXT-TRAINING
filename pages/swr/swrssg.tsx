//^ SWR AND SSG PAGE ------------------------------------------------------------------------------------------------------------------------------ 
import { NextPage, GetStaticProps } from 'next'

interface Props { }

const Swrssg: NextPage<Props> = ({ }) => {
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default Swrssg