import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const RedirectingPage = () => {
    
    const router = useRouter()
    function redirectHandler(): void { router.push('/dynamic-links') }
    const notify = () => toast.loading('Redirecting to Dynamic Links Page')

    useEffect(() => {
        notify()
        setTimeout(() => { redirectHandler() }, 3000)
    }, [])

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
            <Toaster position="top-center" reverseOrder={false} />
            <h1 className='text-6xl font-bold text-white'>Redirecting Page</h1>
        </div>
    )
}

export default RedirectingPage