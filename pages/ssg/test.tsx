import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'

interface Props { data: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }



//^ COMPONENT
const SsgTest: NextPage<Props> = ({ data }) => {
  return (
    <>
      <h1 className='text-5xl font-extrabold bg-slate-900 text-center py-4'>SSG TEST PAGE</h1>
      <div className='text-2xl font-semibold space-y-1.5'>
        {data.map((item: SingleItemType) => <h2 key={item.id} className='hover:bg-slate-100 hover:text-black duration-300 cursor-pointer'>{item.id} - {item.title} : <span className='text-emerald-600'>${item.price}</span></h2>)}
      </div>
    </>
  )
}





// ^ STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
  const request = axios.get('https://fakestoreapi.com/products')
  const data = (await request).data

  return { props: { data }, }

}

export default SsgTest