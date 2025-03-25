import { NextPage, GetStaticPaths, GetStaticProps } from 'next'


interface Props { }

const SingleUserComponent: NextPage<Props> = ({ }) => {
   return <div></div>
}


export const getStaticProps: GetStaticProps = async (ctx) => {
   return {
      props: {},
   }
}

export const getStaticPaths: GetStaticPaths = async () => {
   
   return {
      paths: [],
      fallback: false,
   }
}

export default SingleUserComponent