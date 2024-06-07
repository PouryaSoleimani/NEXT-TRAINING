// ^ SEARCH DYNAMIC [QUERY] PAGE
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import db from '@/data/db.json'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface Props { searchQuery: string | number }

//COMPONENT
const Query: NextPage<Props> = ({ searchQuery }) => {

  const router = useRouter()
  const [PRODUCTS, setPRODUCTS] = useState([...db.products])
  const results = PRODUCTS.filter(item => item.title.toLowerCase().includes(searchQuery?.toLocaleString().toLowerCase()))

  function backHandler() { router.back() }

  return (
    <>

      <h1 className='pb-4 px-2 text-2xl border-b-4 border-white'> RESULTS FOR <span className='text-yellow-400 font-bold text-3xl px-2  underline urderline-2 decoration-white'>{searchQuery.toString().toUpperCase()} </span> :  </h1>

      {!results.length && (
        <div className='flex flex-col space-y-4 items-center justify-center'>
          <h2 className='bg-red-700/40 p-8 font-semibold text-4xl mt-32 w-fit mx-auto'>NO RESULTS FOR YOUR SEARCH</h2>
          <button onClick={backHandler} className='bg-blue-700/40 p-4 text-lg font-bold'>GO BACK</button>
        </div>
      )}

      <h2 className='px-2 font-bold text-emerald-400 text-4xl mt-10 flex flex-col items-start justify-center space-y-10'>
        {results.map(item => <p key={item.id} >- {item.title}</p>)}
        {results.length !== 0 && (<button onClick={backHandler} className='bg-blue-700/40 text-white p-4 text-lg font-bold'>GO BACK</button>)}
      </h2>

    </>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  const searchQuery = ctx.params?.query

  return {
    props: { searchQuery, },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export default Query