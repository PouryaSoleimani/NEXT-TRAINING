import axios from 'axios'
import React from 'react'
import useSWR from 'swr'
import __ from 'lodash'

type SingleUserType = { id: number, name: { firstname: string, lastname: string }, email: string }

//COMPONENT
const Swr = () => {

  const fetcher = () => axios.get('https://fakestoreapi.com/users').then(data => data.data)
  const { data, error, isLoading } = useSWR('https://fakestoreapi.com/users', fetcher)

  //RETURN
  if (error) return <div className='text-2xl text-red-700'>failed to load</div>
  if (isLoading) return <div className='text-6xl text-zinc-500 flex items-center justify-center h-screen'>Loading...</div>

  if (data) return (
    <div className='p-4 text-2xl font-bold flex flex-col space-y-4 bg-zinc-950'>
      {data?.map((user: SingleUserType) =>
        <p key={user.id} className='hover:bg-zinc-800 p-4 cursor-pointer duration-200 w-fit text-white'>{user.id} - {__.capitalize(user.name.firstname)} {__.capitalize(user.name.lastname)} : <span className='text-blue-400'>{user.email}</span></p>)}
    </div>
  )

}
export default Swr