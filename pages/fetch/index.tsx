
//^ FETCH PAGE =========================================================================================================================================================================================
import axios from 'axios'
import React, { useState } from 'react'

type SingleUserType = { id: string, name: string, age: number, isToggle?: boolean }


//^ COMPONENT ==========================================================================================================================================================================================
const FetchPage = () => {

  const [usersList, setUsersList] = useState([])

  //^ FETCH HANDLER
  function fetchUsersHandler() { axios.get('http://localhost:4000/users').then(response => { setUsersList(response.data) }) }


  return (
    <div className='flex items-center py-10 flex-col space-y-2 justify-center h-screen '>
      <button onClick={fetchUsersHandler} className='bg-orange-500 rounded-md px-16 py-2 font-bold text-2xl hover:text-white'>FETCH USERS</button>
      <div>
        {usersList?.map((user: SingleUserType) =>
          <h1 className='text-2xl bg-zinc-800 px-14 py-1 rounded-md font-bold my-3'>User : {user.id} {user.name.toUpperCase()} / {user.age} Years old</h1>
        )}
      </div>
    </div>
  )
}

export default FetchPage
