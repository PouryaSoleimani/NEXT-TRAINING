import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

type SingleUserType = { id: number, username: string, email: string }


const swr = () => {

  const fetcher = () => axios.get('https://fakestoreapi.com/users').then(data => data.data)
  const { data, error, isLoading } = useSWR('https://fakestoreapi.com/users', fetcher)



  //^ RETURN
  if (error) return <div className='text-2xl text-red-700'>failed to load</div>
  if (isLoading) return <div className='text-6xl text-zinc-500 flex items-center justify-center h-screen'>Loading...</div>

  if (data) return (
    <div className='p-4 text-2xl font-bold flex flex-col space-y-4 bg-zinc-950'>
      {data?.map((user: SingleUserType) => <p key={user.id} className='hover:bg-zinc-800 p-4 cursor-pointer duration-200 w-fit'>{user.id} - {user.username} : <span className='text-blue-700'>{user.email}</span></p>)}
    </div>
  )

}
export default swr