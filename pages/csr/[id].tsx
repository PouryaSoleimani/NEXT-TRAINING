// CSR SINGLE PAGE
import { NextPage, GetStaticProps } from 'next'

interface Props { }

const SingePageCSR: NextPage<Props> = ({ }) => {



  return (
    <div>
      <h1 className='bg-zinc-800 text-cyan-500 text-3xl text-center font-bold p-4'>CRS RENDERING - SINGLEPAGE.TSX</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default SingePageCSR