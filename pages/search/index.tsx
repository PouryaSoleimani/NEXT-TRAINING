//^ SEARCH PAGE =============================================================================================================================================================================
import React, { useEffect, useState } from 'react'
import db from '@/data/db.json'
import { useRouter } from 'next/router'


const index: React.FC = () => {
  // STATES 
  const [PRODUCTS, setPRODUCTS] = useState([...db.products])
  const [searchInfo, setSearchInfo] = useState('')
  const [isShowError, setIsShowError] = useState(false)
  const router = useRouter()


  // FUNCTIONS 
  useEffect(() => {
    const searchedProducts = db.products.filter((product) => product.title.toLowerCase().includes(searchInfo.toLowerCase()))
    setPRODUCTS(searchedProducts)
    !searchedProducts.length ? setIsShowError(true) : setIsShowError(false)
  }, [searchInfo])

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => { event.preventDefault(); setSearchInfo(event.target.value) }

  function goToSearchInput() { router.push('/search/searchinput') }



  // RETURN  ================================================================================================================================================================================
  return (
    <div>

      <div className='flex items-center justify-evenly flex-col space-y-6 w-[30rem] rounded-b-md h-[14rem] px-6 pt-2 pb-2 bg-zinc-600 mx-auto mt-10'>
        <input className='w-full p-2 font-bold outline-none rounded-md text-black' type="search" id='searchInput' value={searchInfo} onChange={searchHandler} />
        <button className='bg-lime-600 px-2 py-1 rounded-md font-bold text-xl'>SEARCH</button>
      </div>

      <button onClick={goToSearchInput} className='bg-blue-700 p-2 text-xl font-bold ml-10 rounded-lg hover:bg-blue-400'>GO TO SEARCH INPUT</button>


      <div className='w-full my-10 bg-zinc-300 h-fit flex flex-wrap items-center justify-center gap-2 py-10 px-10 overflow-hidden'>
        {isShowError ? (<h1 className='text-4xl bg-red-900 text-red-200 font-bold text-center px-4 py-6 rounded-md border-2 border-red-800 h-fit w-screen'>NO PRODUCTS FOUND</h1>)
          : (
            PRODUCTS.map(product => (
              <div key={product.id} className='bg-black w-[12rem] py-8 px-4 font-bold text-2xl text-center rounded-md '>
                <h2>{product.title}</h2>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default index