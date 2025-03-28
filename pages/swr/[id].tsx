import BackButton from '@/COMPONENTS/FOOTER/BackButton'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'

type Props = {}

// COMPONENT __________________________________________________________________________________________________________________________________________________________________________________________________
const SwrSinglePage: NextPage<Props> = ({ }) => {

  const router = useRouter()
  const userID = router.query.id

  const fetcher = async () => await fetch(`http://localhost:4000/users/${userID}`).then(result => result.json())

  const { data, error, isLoading } = useSWR(`http://localhost:4000/users/${userID}`, fetcher)



  // RETURN _______________________________________________________________________________________________________________________________________________________________________________________________________
  return (
    <section className='flex flex-col items-center justify-center text-white gap-y-10 mx-auto mt-32'>
      <div className='flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-stone-700 text-white p-10 rounded-2xl shadow-lg w-[90%] max-w-3xl mx-auto mt-32'>
        {isLoading ? (
          <h2 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse'>
            Loading...
          </h2>
        ) : error ? (
          <h1 className='text-4xl font-bold text-red-500'>
            Error: Unable to fetch data
          </h1>
        ) : (
          <h1 className='text-4xl font-bold text-center'>
            <span className='text-red-600'>{data.id}</span> .{' '}
            <span className='text-white'>{data.name}</span> :{' '}
            <span className='text-green-400'>{data.age} Years Old</span>
          </h1>
        )}
      </div>
      <BackButton />
    </section>
  )
}



export default SwrSinglePage