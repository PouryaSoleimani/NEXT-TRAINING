// ^ STYLED COMPONENTS PAGE =========================================================================================================
import React from 'react';
import styled from 'styled-components'
import { StyledFilledButton } from '@/StyledComponents/styled-components'

// ^ COMPONENT ======================================================================================================================
const StyleComponentsPage = () => {

    const ButtonFilled = styled.button`
    background-color : darkred ;
    border : 5px solid darkred ;
    border-radius : 15px;
    font-size : 25px;
    padding : 1rem;
    color : white;
    font-weight : 900;
    width : 150px;
    transition : all 300ms linear ;
    `
    const ButtonOutline = styled.button`
    background-color : transparent ;
    border : 5px solid darkred;
    border-radius : 15px;
    font-size : 25px;
    padding : 1rem;
    color : white;
    font-weight : 900;
    width : 150px;
    transition : all 300ms linear ;
    `

    return (
        <>
            <div>
                <h1 className='bg-zinc-800 text-pink-500 font-extrabold text-6xl text-center py-5'>STYLED COMPONENTS PAGE</h1>
            </div>
            <div className='flex p-10 items-center justify-center space-x-10'>
                <ButtonFilled className='hover:bg-red-700 hover:border-red-700'>Yes</ButtonFilled>
                <ButtonOutline className='hover:border-red-700'>No</ButtonOutline>
            </div>
            <div className='flex item-center justify-center space-x-10 border-t-8 border-[#FABB14] p-10'>
                <StyledFilledButton>HELLO</StyledFilledButton>
            </div>
        </>
    )
}

export default StyleComponentsPage