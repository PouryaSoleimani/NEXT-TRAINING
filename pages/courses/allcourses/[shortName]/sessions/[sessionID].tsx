import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const SessionID = () => {
    const router = useRouter()



    return (
        <>
            <Link href='/'>HOME PAGE</Link>
        </>
    )
}

export default SessionID  