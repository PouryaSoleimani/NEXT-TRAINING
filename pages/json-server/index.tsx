import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
type AllUsersType = [{ id: number, name: string, age: number }]



// COMPONENT ================================================================================================================================================
const JsonServerPage = () => {
    const [users, setusers] = useState<AllUsersType>([{ id: 0, name: '', age: 0 }])

    useEffect(() => {
        fetch("http://localhost:4000/users")
            .then(response => response.json())
            .then(json => setusers(json))
    }, [])

    function postApi() {
        axios.post("http://localhost:4000/users", { id: 11, name: "pouria", age: 32 }, { headers: { "Content-Type": "application/json" } })
    }

    // RETURN ================================================================================================================================================
    return (
        <div>
            <div>
                <h1 className='bg-zinc-800 text-cyan-500 text-3xl text-center font-bold p-4 w-full'>JSON SERVER</h1>
                <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
                    {users.length ?
                        users.map((user) => (
                            <Link href={`/json-server/${user.id}`} className=' w-[20rem] h-[12rem]  mx-auto p-4 bg-zinc-900 border text-cyan-500 rounded-md hover:-translate-y-2 duration-300' key={user.id}>
                                <h1 className='w-full text-center bg-black text-white font-bold'>{user.id}</h1>
                                <h2 className='tracking-tighter text-center font-black mt-2 '>{user.name}</h2>
                                <p className='text-center w-full mt-2 text-3xl font-black'>{user.age}</p>
                            </Link>
                        ))
                        :
                        'Loading...'
                    }
                </div>
                <div className='flex justify-center'>
                    <button onClick={postApi} className='bg-zinc-900 text-cyan-500 p-2 px-4 rounded-md hover:bg-zinc-800'>Add User</button>
                </div>
            </div>
        </div>
    )
}

export default JsonServerPage