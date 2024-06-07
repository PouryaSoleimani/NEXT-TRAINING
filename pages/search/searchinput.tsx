//^ SEARCH INPUT PAGE -------------------------------------------------------------------------------------------------------------------------------------------------------------
import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

interface Props { }

const SearchInput: NextPage<Props> = ({ }) => {

  const [searchInfo, setSearchInfo] = useState('')
  const router = useRouter()

  function searchHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (searchInfo.trim()) {
      router.push(`/search/${searchInfo}`)
      setSearchInfo('')
    }
  }


  //RETURN ----------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <h1 className='bg-blue-800/50 text-3xl p-4 font-bold text-center'>SEARCH INPUT PAGE</h1>
      {/* FORM */}
      <form onSubmit={searchHandler} className='bg-zinc-900 w-1/3 h-[25rem] mx-auto mt-10 rounded-md flex flex-col p-10 space-y-10'>
        <input type="search" placeholder='Search Here ...' className='px-2 py-2 outline-none text-black font-semibold rounded-md' value={searchInfo} onChange={event => setSearchInfo(event?.target.value)} />
        <button type='submit' className='bg-emerald-700 p-1 rounded-md font-bold border-8 border-emerald-900'>Search</button>
      </form>

    </div>
  )
}




export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default SearchInput