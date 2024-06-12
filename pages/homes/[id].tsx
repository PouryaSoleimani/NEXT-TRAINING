import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import * as db from './../../data/db.json'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4000'
type productProps = { id: number, title: string, price: number }


const SingleHomePage: React.FC = () => {
  const route = useRouter()
  const id = route.query.id
  const product = db.products.find((product) => { return String(product.id) === id })
  //STATES 
  const [datas, setDatas] = useState([])
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [token, setToken] = useState('')
  //FUNCTIONS 
  const getData = () => axios.get('/products').then(response => setDatas(response.data))
  useEffect(() => { getData(); }, [])

  const emailValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => { setEmailValue(event.target.value) }
  const passwordValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => { setPasswordValue(event.target.value) }
  const notify = () => toast.success('User Registered ')
  const registerUser = () => { axios.post('http://localhost:5000/register', userInfos).then(response => setToken(response.data.accessToken)).catch(err => { console.log(err.msg) }) }



  const userInfos = { email: emailValue, password: passwordValue }
  const registerUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    registerUser()
    console.log(token)
    localStorage.setItem('user', token)
    setTimeout(() => { setEmailValue(''); setPasswordValue('') }, 1500);
    notify()
  }

  //RETURN -------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <div>
        <h1 className="py-10 px-10 bg-zinc-800 text-white rounded-lg text-5xl font-sans font-bold">ALL HOMES PAGE - HOME # {id} </h1>
      </div>

      <div>
        <h3 className='px-4 py-1 text-red-600 text-4xl font-bold text-center'>GETTING DATAS FROM SERVER :</h3>
        <ul className='flex flex-col justify-center items-start space-y-4'>

          {datas.map((product: productProps) => (
            <li className='text-3xl px-7 py-2 hover:bg-white hover:text-black cursor-pointer duration-500' key={product.id}> {product.title} -- {product.price}</li>
          ))}

        </ul>
      </div>


      <div>
        <h1 className='text-lime-600 text-4xl font-bold text-center p-4'>SHOWING DYNAMIC PRODUCT</h1>
        <div>
          <h1 className='bg-white text-black p-6 font-bold text-3xl'> {product?.id} - {product?.title} - {product?.price}</h1>
        </div>
      </div>


      <h2 className='py-10 px-4 text-4xl font-bold text-blue-600 text-center'>REGISTERING USERS</h2>
      <div id="registerUserDiv">
        <h2 className='text-black bg-lime-600 w-[20rem] mx-auto rounded-md text-center py-2 font-bold rounded-b-none text-3xl'>REGISTER FORM</h2>
        <form className='flex flex-col items-center mb-4 justify-center rounded-b-md px-10 py-10 bg-zinc-700 w-[20rem] mx-auto h[20rem] space-y-6' onSubmit={registerUserHandler}>
          <input type="text" value={emailValue} onChange={emailValueHandler} className='px-1 py-1 w-[15rem] font-bold text-xl  rounded-md text-black outline-none' />
          <input type="password" value={passwordValue} onChange={passwordValueHandler} className='px-1 py-1 w-[15rem] font-bold text-xl rounded-md text-black outline-none' />
          <button type="submit" className='bg-lime-700 px-2 py-2 rounded-md'>REGISTER</button>
        </form>
      </div>

    </>
  )
}

export default SingleHomePage