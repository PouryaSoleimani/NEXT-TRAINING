//^ SWR PAGE ================================================================================================================================================
import useSWR from 'swr'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props { users: [{ id: number, name: string, age: number | string, isToggle: boolean }] }
type SingleUserType = { id: number, name: string, age: number | string, isToggle: boolean }

//COMPONENT ===============================================================================================================================================
const SWR: NextPage<Props> = ({ }) => {

  const fetcher = () => {
    return fetch('http://localhost:4000/users').then(result => result.json())
  }

  const { data, error, isLoading } = useSWR('/users', fetcher)

  if (error) { console.error(error); return <h1>ERROR</h1> }
  if (isLoading) return <h1>IS LOADING</h1>


  //RETURN ===============================================================================================================================================
  return (
    <div>
      <h1 className='text-amber-500 p-2 font-bold text-5xl text-center border-b-8 py-10'>SWR PAGE</h1>
      <div className='bg-zinc-900 p-8 font-bold grid grid-cols-4 gap-5 text-2xl'>
        {data ?
          data.map((user: SingleUserType) => (
            <Link key={user.id} href={`/swr/${user.id}`} className='text-center border-2 border-black rounded-md hover:-translate-y-2 duration-300'>
              <p className='bg-zinc-800 p-4 rounded-md text-white'>{user.name}</p>
              <p className='bg-zinc-900 p-4 rounded-md text-white'>{user.age}</p>
            </Link>
          )) : <h1>NO DATA</h1>
        }
      </div>
    </div >
  )
}

export default SWR

