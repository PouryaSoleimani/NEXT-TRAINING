//^ DYNAMIC SSR TESTING PAGE ---------------------------------------------------------------------------------------------------------------------------------------
import axios from 'axios'
import { NextPage, GetServerSideProps } from 'next'

interface Props { data: [{ id: number, title: string, price: number, description: string }] }
type SingleProductType = { id: number, title: string, price: number, description: string }

const DynamicTestPage: NextPage<Props> = ({ data, }) => {

  return (
    <>
      <h1>TEST</h1>
      {data?.map((product: SingleProductType) => (
        <div className='flex flex-col items-center justify-start p-6'>
          <h2 key={product.id}>{product.id} - {product.title} : {product.price}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  )

}


//* SERVER SIDE PROPS
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params
  const req = axios.get('https://fakestoreapi.com/products')
  const data = (await req).data


  return {
    props: { data, params }
  }
}

export default DynamicTestPage