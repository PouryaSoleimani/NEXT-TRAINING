import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'

type Props = {}

const SwrSinglePage: NextPage<Props> = ({ }) => {

  const router = useRouter()
  const productID = router.query.id


  const fetcher = async () => await fetch(`http://localhost:4000/products/${productID}`).then(result => result.json())
  const { data, error, isLoading } = useSWR(`http://localhost:4000/products/${productID}`, fetcher)


  return (
    <div className='bg-stone-700 text-3xl font-bold p-8'>
      {isLoading ? <h2>IS LOADING</h2> : error ? <h1>ERROR</h1> : <h1>{data.id} - {data.title} - {data.price}$</h1>}
    </div>
  )
}



export default SwrSinglePage   