import axios from 'axios'
import { NextPage } from 'next'
import useSWR from 'swr'

interface Props { }
type SingleItemType = { id: number, title: string, price: string }

const Swrtest: NextPage<Props> = ({ }) => {
  const fetcher = () => axios.get('http://localhost:4000/products').then(res => res.data)
  const { data, isLoading, error } = useSWR("products", fetcher)

  return (
    <div className='grid grid-cols-4 gap-2 place-items-center w-screen h-screen'>
      {error ? (<h1>ERROR</h1>) : isLoading ? (<h1>LOADING</h1>) : (
        data.map((item: SingleItemType) => <h1 className='px-2 py-1 text-2xl flex items-center hover:border-8 border-green-600 box-border  font-semibold w-[15rem] h-[4.5rem] bg-white text-black' key={item.id}>{item.title}</h1>)
      )}

    </div>
  )
}

export default Swrtest