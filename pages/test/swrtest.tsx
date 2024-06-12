import axios from 'axios'
import { NextPage } from 'next'
import useSWR from 'swr'

interface Props { }
type SingleItemType = { id: number, title: string, price: string }

const Swrtest: NextPage<Props> = ({ }) => {
  const fetcher = () => axios.get('http://localhost:4000/products').then(res => res.data)
  const { data, isLoading, error } = useSWR("products", fetcher)

  return (
    <div>
      {error ? (<h1>ERROR</h1>) : isLoading ? (<h1>LOADING</h1>) : (
        data.map((item: SingleItemType) => <h1 key={item.id}>{item.title}</h1>)
      )}

    </div>
  )
}

export default Swrtest