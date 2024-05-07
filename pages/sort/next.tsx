import { GetServerSideProps } from 'next';

const next = () => {
 return (
  <div>
   NEXT JS PAGE
  </div>
 );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
 return {
  props: {

  }
 }
}

export default next