// ^ REDIRECTING PAGE ========================================================================================================================================
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

//  COMPONENT
const RedirectingPage = () => {
    const router = useRouter()
    const notify = () => toast.loading('Redirecting to Dynamic Links Page', { duration: 2000, style: { fontSize: "18px" }, icon: '🔗' })

    function redirectHandler(): void { router.push('/dynamic-links') }

    useEffect(() => {
        notify();
        setTimeout(() => { redirectHandler() }, 3000);
    }, [])


    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center bg-black text-white overflow-x-hidden'>
                <h1 className='text-6xl font-bold text-white'>Redirecting Page</h1>
            </div>
        </>
    )
}

export default RedirectingPage