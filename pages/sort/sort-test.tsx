import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import React, { useState } from 'react'
import __ from 'lodash'

interface props { products: [{ id: number, title: string, price: number, image: string, category: string }] }
type SingleItemType = { id: number, title: string, price: number, image: string, category: string }
type SortedArrayType = [{ id: number, title: string, price: number, image: string, category: string }]

//COMPONENT ______________________________________________________________________________________________________________________________________________________________________________
const SortTest: NextPage<props> = ({ products }) => {
  const [PRODUCTS, setPRODUCTS] = useState(products)

  //^ SORT FUNCTIONS  ______________________________________________________________________________________________________________________________________________________________________________
  function sortAscending() {
    const copy = [...PRODUCTS]
    const sortedArray: any = __.sortBy(copy, "price")
    setPRODUCTS(sortedArray)
  }

  function sortDescending() {
    const copy = [...PRODUCTS]
    const sortedArray: any = __.sortBy(copy, "price").reverse()
    setPRODUCTS(sortedArray)
  }

  // RETURN __________________________________________________________________________________________________________________________________________________________________________________
  return (
    <div >
      <h1 className='text-3xl text-center py-2 bg-lime-500 font-extrabold'>SORT TEST</h1>

      <div id="SortingButtons" className='bg-zinc-800 px-10 py-3 flex items-center justify-center space-x-5'>
        <button onClick={sortAscending} className='bg-black font-bold p-2 rounded-md hover:bg-zinc-800 duration-300 text-white'>Cheapest</button>
        <button onClick={sortDescending} className='bg-white text-black font-bold p-2 rounded-md hover:bg-zinc-300 duration-300'>Most Expensive</button>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-2 py-3 px-1'>
        {PRODUCTS.slice(0, 18).map((item: SingleItemType) => (
          <div key={item.id} className='p-3 bg-zinc-950 cursor-pointer flex flex-col items-center justify-center space-y-2 hover:border-zinc-300 duration-700 w-[15rem] h-fit border-2 border-zinc-700 rounded-xl'>
            <img src={item.image} alt="Product Image" className='w-16 h-16 rounded-xl' />
            <h1 className='capitalize text-xl font-bold text-center'>{item.title.slice(0, 10)}</h1>
            <p className='capitalize text-zinc-500/90'>{item.category}</p>
            <p className='bg-lime-500/50 w-2/3 text-center px-2 py-1 rounded-md text-xl font-bold text-white'>${item.price}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const request = axios.get('https://fakestoreapi.com/products')
  const products = (await request).data

  return {
    props: { products },
  }
}


export default SortTest