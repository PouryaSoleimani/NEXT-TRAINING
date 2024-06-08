//^ DATA-FETCHING PAGE =========================================================================================================================================================
import React from 'react'
import { products } from '@/data/db.json'

type DataItemType = { id: string, title: string, price: number }
type DatasType = DataItemType[]


// COMPONENT
const DataFetching = () => {

  const DATAS: DatasType = products




  // RETURN
  return (
    <div>
      <h1 className='text-yellow-400 text-6xl font-bold text-center py-4'>DATA FETCHING PAGE</h1>
      <div className='bg-zinc-700 flex flex-col px-10 py-5 space-y-5 text-2xl font-semibold'>
        {DATAS.map((item: DataItemType) => <p key={item.id}>{item.title} - ${item.price}</p>)}
      </div>
    </div>
  )
}

export default DataFetching

