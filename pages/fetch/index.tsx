//^ FETCH PAGE =========================================================================================================================================================================================
import axios from 'axios'
import React, { useState } from 'react'

type SingleUserType = { username: string, password: string }


//^ COMPONENT ==========================================================================================================================================================================================
const FetchPage = () => {

  const [usersList, setUsersList] = useState([])

  //* FETCH HANDLER
  function fetchUsersHandler() {
    axios.get('/api/users')
      .then(response => {
        setUsersList(response.data.usersArray)
      })
  }

  return (
    <div className='flex items-center py-10 flex-col space-y-2 justify-center h-screen'>
      <button onClick={fetchUsersHandler} className='bg-orange-500 rounded-md px-16 py-2 font-bold text-2xl'>FETCH USERS</button>
      <div>
        {usersList?.map((user: SingleUserType) =>
          <h1 className='text-2xl bg-zinc-800 px-14 py-1 rounded-md my-2 font-bold'>USER = {user.username.toUpperCase()}</h1>
        )}
      </div>
    </div>
  )
}

export default FetchPage
