import { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'

interface Props { }
type SingleItemType = { id: number, title: string, price: number }

const Swrssg: NextPage<Props> = ({ }) => {

  const fetcher = () => fetch('http://localhost:4000/products').then(res => res.json())

  const { data, isLoading, error } = useSWR('PRODUCTS', fetcher)

  return (

    <section>
      {error ? (<h1>ERROR</h1>) : isLoading ? (<h1>IS LOADING </h1>) : (
        data.map((item: SingleItemType) => <h1>{item.title}</h1>)
      )}
    </section>

  )


}

export default Swrssg