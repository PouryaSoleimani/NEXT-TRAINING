import axios from 'axios'
import React, { useState } from 'react'

const FormPage = () => {

  //STATES
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  //FUNCTIONS
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    axios.post('http://localhost:3000/api/users', { username, password }).then(response => { console.log(response.data) })
    setUsername('')
    setPassword('')
  }

  //RETURN
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold bg-lime-600 px-11 rounded-t-xl py-2 '>REGISTER FORM</h1>
      <form onSubmit={event => submitHandler(event)} className='bg-zinc-900 w-[20rem] h-[20rem] rounded-b-xl flex flex-col items-center justify-center space-y-10'>
        <input type="text" required placeholder='username' value={username} onChange={event => setUsername(event.target.value)} className='px-2 py-1 outline-none rounded-sm font-bold text-black' />
        <input type="password" required placeholder='password' value={password} onChange={event => setPassword(event.target.value)} className='px-2 py-1 outline-none rounded-sm font-bold text-black' />
        <button type='submit' className='bg-lime-600 px-3 py-1 rounded-sm font-bold text-xl shadow-sm shadow-zinc-800'>SEND</button>
      </form>
    </div>
  )
}

export default FormPage 