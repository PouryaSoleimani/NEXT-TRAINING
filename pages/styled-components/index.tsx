// ^ STYLED COMPONENTS PAGE =========================================================================================================
import React from 'react';
import styled from 'styled-components'
// ! MY STYLED COMPONENTS

const StyleComponentsPage = () => {

    const ButtonFilled = styled.button`
    background-color : darkgreen ;
    border : 5px solid darkgreen ;
    border-radius : 15px;
    font-size : 25px;
    padding : 1rem 3rem;
    color : white;
    font-weight : 900;
    `
    const ButtonOutline = styled.button`
    background-color : transparent ;
    border : 5px solid darkred;
    border-radius : 15px;
    font-size : 25px;
    padding : 1rem 3rem;
    color : white;
    font-weight : 900;
    `
    return (
        <>
            <div>
                <h1 className='bg-zinc-800 text-pink-500 font-extrabold text-6xl text-center py-5'>STYLED COMPONENTS PAGE</h1>
            </div>
            <div className='flex p-10 items-center justify-center space-x-10'>
                <ButtonFilled className='hover:bg-emerald-600 hover:border-emerald-600'>ACCEPT</ButtonFilled>
                <ButtonOutline className='hover:bg-red-800 hover:border-red-800'>REJECT</ButtonOutline>
            </div>
        </>
    )
}

export default StyleComponentsPage