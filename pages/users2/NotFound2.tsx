import { Button } from 'antd'
import { FileWarning } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'

const NotFound2 = () => {
    const router = useRouter()
    function goBackUsersHanlder() { router.push("/users2") }



    return (
        <section>
            <div className='w-screen h-screen flex items-center justify-between'>
                <FileWarning />
                User Not Found ...
            </div>
            <Button type='primary' onClick={goBackUsersHanlder}>Go to All Users</Button>
        </section>
    )
}

export default NotFound2