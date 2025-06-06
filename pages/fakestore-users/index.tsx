//^ FAKESTORE USERS PAGE ==================================================================================================================================
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

interface Props { users: [{ id: number, email: string, username: string, name: { firstname: string, lastname: string } }] }
type SingleUserType = { id: number, email: string, username: string, name: { firstname: string, lastname: string } }

//* COMPONENT
const FakeStoreUserPage: NextPage<Props> = ({ users }) => {
  // STATES
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // FUNCTIONS
  const notify = () => toast.success('User Submitted.', { icon: '✔', style: { borderRadius: '6px', background: '#333', color: '#fff', } });
  const notify2 = () => toast.error('User Details Invalid.', { icon: '❌', style: { borderRadius: '6px', background: '#333', color: '#fff', } });

  //^ SUBMIT HANDLER
  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (username.length && password.length) {
      notify()
    } else {
      notify2()
    }
    
    const userInfo = { username, password }
    console.log(userInfo)
    setUsername('')
    setPassword('')
  }

  // RETURN
  return (
    <section className='overflow-hidden'>


      {/* USERS */}
      <div className='grid grid-cols-3 items-center gap-y-2 mt-10  place-items-center w-screen h-fit text-md'>
        {users.slice(0, 9).map((user: SingleUserType) => (
          <Link href={`/fakestore-users/${user.id}`} key={user.id}>
            <div className='bg-zinc-800 px-6 py-2 w-[20rem] rounded-md h-fit hover:translate-x-2 duration-300 cursor-pointer'>
              <h4 className='font-extrabold text-white whitespace-nowrap'>{user.id} - {user.name.firstname.toUpperCase()} {user.name.lastname.toUpperCase()}</h4>
            </div>
          </Link>
        ))}
      </div>


      {/* FORM */}
      <form onSubmit={submitHandler} className="form w-fit mx-auto mt-16 border-2">
        <p id="heading">Login</p>

        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
          </svg>
          <input value={username} onChange={event => setUsername(event.target.value)} placeholder="Username" className="input-field" type="text" />
        </div>

        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" className="input-field" type="password" />
        </div>

        <div className="btn">
          <button type='submit' className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          <button type='submit' className="button2">Sign Up</button>
        </div>
        <button className="button3 w-64 mx-auto">Forgot Password</button>
      </form>


    </section>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get('https://fakestoreapi.com/users')
  const users = (await req).data
  return {
    props: { users: users },
  }
}

export default FakeStoreUserPage




