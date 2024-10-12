//^SLUG PAGE
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components';

const Params = () => {
    const router = useRouter()
    const { params } = router.query;
    console.log("%c ALL PARAMS ===>", "color :yellow ", router.query.params)

    //^STYLED BUTTON
    const BUTTON = styled.button`
        background-color : purple;
        border-radius : 15px;
        font-size : 40px;
        margin : 10px auto ;
        border : 3px solid purple;
        padding : 6px;
        color : white ;
    `


    //^ RETURN
    return (
        <>
            <div className='text-5xl bg-zinc-900 text-yellow-400 flex flex-col items-center justify-around font-bold p-10'>
                <h1>
                    {params?.length && (`${params[0]?.toUpperCase()} ${params[1]?.toUpperCase()} ${params[2]} ${params[3]?.toUpperCase() || ""}`)}
                </h1>
                <h2 className='text-white mt-10 tracking-tighter text-5xl font-medium '>
                    {params?.length && (`YOU ARE READING AN ARTICLE FROM ${params[0]?.toLocaleUpperCase()} FROM ${params[1]?.toUpperCase()} WRITTEN IN ${params[2]?.toUpperCase()}`)}
                </h2>
            </div>
            <div className='w-screen flex items-center justify-center h-64'>
                <BUTTON>HELLO</BUTTON>
            </div>
        </>
    )
}
export default Params