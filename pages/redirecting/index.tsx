// ^ REDIRECTING PAGE ========================================================================================================================================
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

//  COMPONENT
const RedirectingPage = () => {
    const router = useRouter()

    const notify = () => toast.loading('Redirecting to Dynamic Links Page', { duration: 2000, style: { fontSize: "18px" }, icon: '🔗' })

    function redirectHandler(): void {
        // router.push('/dynamic-links')
        router.push({
            pathname: "/dynamic-links",
            query: { id: "123" }
        })
    }

    useEffect(() => {
        notify();
        setTimeout(() => { redirectHandler() }, 2500);
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