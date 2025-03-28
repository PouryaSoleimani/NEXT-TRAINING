//^ SORT PAGE
import React, { useEffect, useState } from 'react'
import db from '@/data/db.json'
import __ from 'lodash'


// COMPONENT  _____________________________________________________________________________________________________________________________________________________________________________________________________________________
const Sort: React.FC = () => {
  // STATES
  const [Users, setUsers] = useState([...db.users])
  const [Sort, setSort] = useState('')

  // FUNCTIONS
  const sortAscending = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const sortedUsers = __.sortBy(Users, "age") // USING SORT METHOD FROM LODASH
    setSort(`Ascending`)
    setUsers(sortedUsers)
  }

  const sortDescending = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const sortedUsers = __.sortBy(Users, "age").reverse() // USING SORT METHOD FROM LODASH
    setSort(`Descending`)
    setPRODUCTS(sortedProducts)
  }

  // RETURN __________________________________________________________________________________________________________________________________________________________________________________________________________________________
  return (
    <>
      <div className='w-full my-10 bg-zinc-300 h-fit grid place-items-center p-4 grid-cols-3 gap-y-10'>
        {Users.map(user => (
          <div key={user.id} className='bg-zinc-950 w-[17rem] py-8 px-4 font-bold text-2xl text-center rounded-md '>
            <h2>{user.name}  : <span className='bg-emerald-300/50 px-2 py-1 mr-2 rounded-xl'>${user.age}</span> </h2>
          </div>
        ))}
      </div>
      <div id='BUTTONS' className='bg-slate-700 p-10 text-3xl font-bold flex items-center justify-evenly'>
        <button className='bg-green-500 p-4 rounded-md border-8 text-black border-black cursor-pointer' onClick={sortAscending}>Ascending</button>
        <button className='bg-rose-500 p-4 rounded-md border-8 text-black border-black cursor-pointer' onClick={sortDescending}>Descending</button>
      </div>
    </>

  )
}
export default Sort


// SSR => Server Side Rendering