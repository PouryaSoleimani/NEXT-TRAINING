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
    setUsers(sortedUsers)
  }

  // RETURN __________________________________________________________________________________________________________________________________________________________________________________________________________________________
  return (
    <>
      <div className='w-full my-10 bg-gradient-to-br from-gray-200 to-gray-300 h-fit grid grid-cols-4 place-items-center gap-10 p-10 rounded-xl shadow-lg'>
        {Users.map(user => (
          <div key={user.id} className='bg-gradient-to-br flex items-center justify-center from-zinc-900 to-gray-800 w-[35rem] py-6 px-4 font-bold text-2xl text-center rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.1)] hover:scale-105 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.5),-8px_-8px_20px_rgba(255,255,255,0.2)] transition-all duration-300'   >
            <h2 className='text-white'>
              {user.name} :{' '}
              <span className='bg-emerald-400/50 px-3 py-1 rounded-md mx-10 text-black'> ${user.age} </span>
            </h2>
          </div>
        ))}
      </div>

      <div id='BUTTONS' className='bg-gradient-to-br from-slate-700 to-slate-800 p-10 text-3xl font-bold flex items-center justify-evenly rounded-xl shadow-lg'  >
        <button className='bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-xl border-4 border-green-600 text-black font-bold shadow-md hover:from-green-500 hover:to-green-600 hover:scale-105 transition-all duration-300' onClick={sortAscending}  >  Ascending  </button>
        <button className='bg-gradient-to-r from-rose-400 to-rose-500 p-4 rounded-xl border-4 border-rose-600 text-black font-bold shadow-md hover:from-rose-500 hover:to-rose-600 hover:scale-105 transition-all duration-300' onClick={sortDescending} >    Descending  </button>
      </div>
    </>
  )
}
export default Sort


// SSR => Server Side Rendering