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



    // RETURN ================================================================================================================================================
    return (
        <div>
            <div>
                <h1 className='bg-zinc-800 text-cyan-500 text-3xl text-center font-bold p-4 w-full'>JSON SERVER</h1>
                <div className='flex flex-wrap items-center justify-center gap-2 p-5'>
                    {users.length ?
                        users.map((user) => (
                            <Link href={`/json-server/${user.id}`} className=' w-[20rem] h-[12rem]  mx-auto p-4 bg-zinc-900 border text-cyan-500 rounded-md' key={user.id}>
                                <h1 className='w-full text-center bg-black text-white font-bold'>{user.id}</h1>
                                <h2 className='tracking-tighter text-center font-black mt-2 '>{user.name}</h2>
                                <p className='text-center w-full mt-2 text-3xl font-black'>{user.age}</p>
                            </Link>
                        ))
                        :
                        'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default JsonServerPage