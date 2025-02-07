import { useRouter } from 'next/router'
import React, { useEffect, useLayoutEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const RedirectingPage = () => {

    const router = useRouter()
    const number = 1
    const notify = () => toast.loading('Redirecting to Dynamic Links Page', { duration: 2000, style: { fontSize: "18px" } })

    function redirectHandler(): void {
        setTimeout(() => { router.push('/dynamic-links') }, 3000);
    }

    useEffect(() => {
        notify()
        redirectHandler()
    }, [number])

    return (
        <>
            <Toaster position='top-right' reverseOrder={false} />
            <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
                <h1 className='text-6xl font-bold text-white'>Redirecting Page</h1>
            </div>
        </>
    )
}

export default RedirectingPage