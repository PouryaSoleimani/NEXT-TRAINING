import BackButton from '@/COMPONENTS/FOOTER/BackButton'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const UserID = () => {
    const router = useRouter()
    const { userID } = router.query
    const [SingleUser, setSingleUser] = useState([{ id: 0, name: '', age: 0 }])

    useEffect(() => {
        fetch(`http://localhost:4000/users?id=${userID}`)
            .then(response => response.json())
            .then(json => { console.info(json); setSingleUser(json) })
    }, [])

    return (
        <div className='w-screen h-screen flex flex-col gap-y-10 items-center justify-center p-10'>
            <div className='card w-64 h-32'>
                {SingleUser && (
                    <>
                        <h1 className="text-5xl font-bold border-b-4 border-spacing-12 mt-2">{SingleUser[0].id}</h1>
                        <h2 className="text-3xl font-semibold border-b-4 border-spacing-12 mt-2 track">{SingleUser[0].name}</h2>
                        <h3 className="text-2xl font-black text-zinc-500">{SingleUser[0].age} Years Old</h3>
                    </>
                )}
            </div>
            <BackButton />
        </div>
    )
}

export default UserID