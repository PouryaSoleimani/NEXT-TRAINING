//^ SWR PAGE ================================================================================================================================================
import useSWR from 'swr'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props { users: [{ id: number, name: string, age: number | string, isToggle: boolean }] }
type SingleUserType = { id: number, name: string, age: number | string, isToggle: boolean }


const SWR: NextPage<Props> = ({ }) => {

  const fetcher = () => {
    return fetch('http://localhost:4000/users')
      .then(result => result.json())
  }

  const { data, error, isLoading } = useSWR('/users', fetcher)

  if (error) { console.error(error); return <h1>ERROR</h1> }
  if (isLoading) return <h1>IS LOADING</h1>

  //RETURN ===============================================================================================================================================
  return (
    <div>
      <h1 className='text-amber-700 p-2 font-bold text-4xl text-center border-b-8'>SWR PAGE</h1>
      <div className='bg-zinc-900 p-8 font-bold grid grid-cols-4 gap-5 text-2xl'>
        {data ?
          data.map((user: SingleUserType) => (
            <Link key={user.id} href={`/swr/${user.id}`} className='text-center'>
              <p className='bg-zinc-800 p-4 rounded-md hover:bg-zinc-700 text-white'>{user.name}</p>
            </Link>
          )) : null}
      </div>
    </div >
  )
}

export default SWR

