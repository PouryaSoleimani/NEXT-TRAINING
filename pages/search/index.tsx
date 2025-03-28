//^ SEARCH PAGE =====================================================================================================================================
import React, { useEffect, useState } from 'react'
import db from '@/data/db.json'
import { useRouter } from 'next/router'

const index: React.FC = () => {
  // STATES   
  const [Users, setUsers] = useState([...db.users])
  const [searchInfo, setSearchInfo] = useState('')
  const [isShowError, setIsShowError] = useState(false)
  const router = useRouter()


  // FUNCTIONS 
  useEffect(() => {
    const searchedUsers = db.users.filter((user) => user.name.toLowerCase().includes(searchInfo.toLowerCase()))
    setUsers(searchedUsers)
    !searchedUsers.length ? setIsShowError(true) : setIsShowError(false)
  }, [searchInfo])

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => { event.preventDefault(); setSearchInfo(event.target.value) }

  function goToSearchInput() { router.push('/search/searchinput') }

  // RETURN  ======================================================================================================================================
  return (
    <div className='flex flex-col items-center justify-center gap-y-10'>

      <div className='flex items-center justify-center flex-col space-y-6 w-[30rem] rounded-b-md h-[14rem] px-6 pt-2 pb-2 bg-zinc-600 mx-auto mt-10'>
        <input className='w-full p-2 font-bold outline-none rounded-md text-black' type="search" id='searchInput' value={searchInfo} onChange={searchHandler} />
        <button className='bg-lime-600 px-2 py-1 rounded-md font-bold text-xl'>SEARCH</button>
      </div>

      <button onClick={goToSearchInput} className='bg-blue-900 text-white p-2 text-3xl font-bold ml-10 rounded-lg hover:bg-blue-400 mx-auto'>GO TO SEARCH INPUT</button>


      <div className=' w-full my-10 bg-zinc-800 h-fit grid grid-cols-4 justify-items-center items-center gap-2 py-10 px-10 overflow-hidden gridDIV'>
        {isShowError ? (
          <h1 className='text-4xl bg-red-900 text-red-200 font-bold text-center px-4 py-6 rounded-md border-2 border-red-800 h-fit '>NO PRODUCTS FOUND</h1>)
          : (
            Users.map(user => (
              <div key={user.id} className='bg-black w-[24rem] py-8 px-4 font-bold text-2xl text-center rounded-md hover:border box-content '>
                <h2 className='whitespace-nowrap'>{user.name}</h2>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default index