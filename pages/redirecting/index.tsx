import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const RedirectingPage = () => {

    const router = useRouter()
    function redirectHandler(): void { router.push('/dynamic-links') }
    const notify = () => toast.loading('Redirecting to Dynamic Links Page', { duration: 2000, position: "top-right" })

    useEffect(() => {
        notify()
        setTimeout(() => { redirectHandler() }, 3000)
    }, [notify])

    return (
        <>
            <Toaster reverseOrder={false} />
            <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
                <h1 className='text-6xl font-bold text-white'>Redirecting Page</h1>
            </div>
        </>
    )
}

export default RedirectingPage