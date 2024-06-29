import axios from 'axios'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

interface Props { data: { id: number, title: string, price: number } }
type SingleItemType = { id: number, title: string, price: number }

//^ COMPONENT
const DynamicSSgPage: NextPage<Props> = ({ data }) => {
  const router = useRouter()
  function backHandler() { router.back() }
  return (
    <div className='flex flex-col space-y-10 items-center justify-center w-screen h-screen text-7xl font-semibold text-pretty flex-shrink flex-wrap'>
      <h1 className='bg-zinc-800 p-10 rounded-md border text-clip'>{data.id} - {data.title} : <span className='bg-green-600 px-2 rounded-md border-2 border-green-800 flex-shrink'>${data.price}</span></h1>
      <button onClick={backHandler} className='text-2xl bg-sky-800 py-4 px-10 hover:bg-slate-700 rounded-md'>BACK</button>
    </div>
  )
}

//* GETSTATICPATHS
export const getStaticPaths: GetStaticPaths = async () => {

  const req = axios.get('https://fakestoreapi.com/products')
  const data = (await req).data
  const paths = data.map((item: SingleItemType) => { return { params: { id: String(item.id) } } })

  return { paths, fallback: false, }
}

//* GETSTATICPROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
  const productID = ctx.params?.id
  const req = axios.get(`https://fakestoreapi.com/products/${productID}`)
  const data = (await req).data

  return {
    props: { data },
  }
}

export default DynamicSSgPage