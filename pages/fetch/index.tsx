import axios from 'axios'
import { indexOf } from 'lodash'
import React, { useState } from 'react'

type SingleUserType = { username: string, password: string }

const FetchPage = () => {
  const [usersList, setUsersList] = useState([])
  function fetchUsersHandler() {
    axios.get('http://localhost:3000/api/users').then(response => { setUsersList(response.data.data) })
  }
  return (
    <div className='flex items-center py-10 flex-col space-y-6 justify-center h-screen'>
      <button onClick={fetchUsersHandler} className='bg-orange-500 px-6 py-2 font-bold text-2xl'>FETCH USERS</button>
      <div>
        {usersList?.map((user: SingleUserType) => <h1 className='text-2xl font-bold'>{user.username.toUpperCase()}</h1>)}
      </div>
    </div>
  )
}

export default FetchPage