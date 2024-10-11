//^SLUG PAGE
import { useRouter } from 'next/router'
import React from 'react'

const Params = () => {
    const router = useRouter()
    const { params } = router.query;
    console.log("ALL PARAMS ===>", router.query.params)

    return (
        <div className='text-5xl bg-zinc-900 text-yellow-400 flex flex-col items-center justify-around font-bold p-10'>
            <h1>
                {params?.length && (`${params[0]?.toUpperCase()} ${params[1]?.toUpperCase()} ${params[2]} ${params[3]?.toUpperCase() || ""}`)}
            </h1>
            <h2 className='text-white mt-10 underline'>
                {params?.length && (`YOU ARE READING AN ARTICLE FROM ${params[0]?.toLocaleUpperCase()} FROM ${params[1]?.toUpperCase()} WRITTEN IN ${params[2]?.toUpperCase()}`)}
            </h2>
        </div>
    )
}
export default Params