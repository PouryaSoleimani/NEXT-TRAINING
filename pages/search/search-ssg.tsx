import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'

interface Props { products: [{ id: number, title: string }] }

const SearchSSGpage: NextPage<Props> = ({ products }) => {
  return (
    <>
      <div>
        <input type="search" />
      </div>
      <div>
        {products.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get('https://fakestoreapi.com/products')
  const products = (await req).data

  return {
    props: { products },
  }
}

export default SearchSSGpage