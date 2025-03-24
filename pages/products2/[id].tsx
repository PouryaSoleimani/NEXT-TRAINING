import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

interface Props { ID: number }

const SingleProductPage: NextPage<Props> = ({ ID }) => {
   return (
      <div className='w-screen h-screen flex items-center justify-center text-zinc-200 font-bold text-5xl'>
         <h2 className='font-bold bg-zinc-900 px-5 py-2 rounded-md'> SINGLE PRODUCT # {ID}</h2>
      </div>
   )
}


export const getStaticProps: GetStaticProps = async (context) => {
   const ID = context.params?.id
   console.log(ID)
   return {
      props: { ID },
   }
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: false,
   }
}

export default SingleProductPage

