//SLUG PAGE
import { useRouter } from 'next/router'
import React from 'react'

const Params = () => {
    const router = useRouter()
    const { params } = router.query;
    console.log(params)

    return (
        <div className='text-5xl bg-zinc-900 text-yellow-400 flex flex-col items-center justify-around font-bold p-10'>
            {params?.length && (`${params[0].toUpperCase()}-${params[1].toUpperCase()}-${params[2]}-${params[3].toUpperCase()}`)}
        </div>
    )
}
export default Params