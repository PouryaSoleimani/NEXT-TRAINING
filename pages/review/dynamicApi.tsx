//^ DYNAMIC PAGE
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

interface Props { allUsers: [{ id: number, username: string, password: string }] }
type SingleUserType = { id: number, username: string, password: string }


const DynamicApi: NextPage<Props> = ({ allUsers }) => {
    const [ID, setID] = useState("")



    function deleteUserHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        axios.delete(`http://localhost:3000/api/review/deleteuser/${ID}`)
            .then(res => console.log(res))
            .catch(error => console.error("USER NOT FOUND"))
        setID("")
    }


    return (
        <section id='FULL_PAGE_SECTION' className='w-screen h-screen pt-16 bg-zinc-300 flex flex-col space-y-10 items-center justify-center'>   
            <div className='w-fit mx-auto p-4 rounded-xl flex flex-wrap items-center justify-center gap-2 bg-transparent'>
                {allUsers.map((user: SingleUserType) => (
                    <Link href={`/review/${user.id}`}>
                        <div key={user.id} className="card w-[17.2rem] mx-auto mt-10  hover:scale-110 duration-300 cursor-pointer">
                            <div className="card-overlay"></div>
                            <div className="card-inner text-zinc-900">{user.username.toUpperCase()}<br /></div>
                        </div>
                    </Link>
                ))}
            </div>
            <form onSubmit={deleteUserHandler} className='border-8 border-zinc-800 w-1/2 h-1/6 p-10 flex flex-col items-center justify-start space-y-6'>
                <input className='px-4 py-2 text-black text-2xl border border-black outline-none font-bold rounded-xl w-full' type="text" placeholder="User ID you want to delete" value={ID} onChange={event => setID(event.target.value)} />
                <button className='bg-red-800 px-10 py-4 rounded-xl text-2xl font-bold'>DELETE</button>
            </form>
            <form onSubmit={deleteUserHandler} className='border-8 border-zinc-800 w-1/2 h-1/6 p-10 flex flex-col items-center justify-start space-y-6'>
                <input className='px-4 py-2 text-black text-2xl border border-black outline-none font-bold rounded-xl w-full' type="text" placeholder="User ID you want to delete" value={ID} onChange={event => setID(event.target.value)} />
                <button className='bg-red-800 px-10 py-4 rounded-xl text-2xl font-bold'>DELETE</button>
            </form>
        </section>
    )
}

//^ GET STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
    const request = axios.get('http://localhost:3000/api/users')
    const allUsers = (await request).data.usersArray

    return {
        props: { allUsers },
    }
}

export default DynamicApi