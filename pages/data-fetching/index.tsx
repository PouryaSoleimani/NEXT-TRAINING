//^ DATA-FETCHING PAGE =========================================================================================================================================================
import React, { useState } from 'react'
import { users } from '@/data/db.json' //Importing DataBase From an External File
import Link from 'next/link'
type SingleUserType = { id: string, name: string, age: number, isToggle?: boolean }

// COMPONENT
const DataFetching = () => {
  const [data, setdata] = useState(users)

  // RETURN
  return (
    <div>
      <h1 className='text-yellow-400 text-6xl font-bold text-center py-4'>DATA FETCHING PAGE</h1>
      <div className='bg-zinc-950 text-white grid grid-cols-4 gap-6 p-5'>
        {data.map((item: SingleUserType) =>
          <Link href={`/json-server/${item.id}`} key={item.id} className='text-white hover:-translate-y-2 duration-300'>
            <p className='py-1 bg-black p-3 rounded-md border text-xl font-bold'>{item.name} - ${item.age}</p>
          </Link>
        )}
      </div>
    </div>
  )
}
export default DataFetching

