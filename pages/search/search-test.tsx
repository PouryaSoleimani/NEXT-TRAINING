//! SEARCH TEST PAGE
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type SingleItemType = { id: number, title: string }

const SearchTestPage = () => {
  const [products, setProducts] = useState([])
  useEffect(() => { axios.get('https://fakestoreapi.com/products').then(response => { setProducts(response.data) }) }, [])

  const [search, setSearch] = useState('')
  const [isShowError, setIsShowError] = useState(false)


  useEffect(() => {
    const filteredArray = products.filter((item: SingleItemType) => { return item.title.toLowerCase().includes(search.toLowerCase()) })
    setProducts(filteredArray)
    !filteredArray.length ? setIsShowError(true) : setIsShowError(false)
    console.log(products)
  }, [search])



  return (
    <>
      <div>
        <h1 className='bg-lime-400 text-black text-center py-1 font-bold'>SearchTestPage</h1>
      </div>
      <div className='flex items-center justify-center py-4 border-b-4 border-lime-400'>
        <input type="search" placeholder='search' value={search} onChange={event => setSearch(event.target.value)} className='p-1 font-bold text-black w-[20rem] outline-none' />
      </div>
      <div className='flex flex-wrap items-center justify-center p-10 gap-2'>

        {products.map((item: SingleItemType) => (
          <div key={item.id} className='font-bold text-xl bg-zinc-700 p-2 rounded-md'>
            <h1>{item.title.slice(0, 10)}</h1>
          </div>
        ))}

      </div>
    </>

  )
}

export default SearchTestPage