import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const UserID = () => {
    const router = useRouter()
    const { userID } = router.query
    const [SingleUser, setSingleUser] = useState({ id: 0, name: '', age: 0 })

    useEffect(() => {
        fetch(`http://localhost:4000/users?id=${userID}`)
            .then(response => response.json())
            .then(json => setSingleUser(json))
    }, [])

    return (
        <div className='w-screen h-screen flex items-center justify-center p-10'>
            <div  className='card'>
                    <h1 className="text-5xl font-bold">{SingleUser.id}</h1>
                    <h2 className="text-3xl font-semibold">{SingleUser.name}</h2>
                    <h3 className="text-2xl font-medium">{SingleUser.age}</h3>
            </div>
        </div>
    )
}

export default UserID