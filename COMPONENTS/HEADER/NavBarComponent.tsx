import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DropDownMenuComponent from './DropDownMenuComponent'
import { NavigationMenuComponent } from './NavigationMenuComponent'


// COMPONENT ================================================================================================================
function NavBarComponent() {

    useEffect(() => {
        const handleScroll = () => { const currentScroll = window.scrollY; };

        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };

    }, []);


    return (
        <nav className='sticky top-0 left-0 bg-zinc-700 px-2 py-2 sm:py-0 flex items-center justify-between z-50'>
            <Image src="/next.svg" width={150} height={80} alt="logo" className='h-full' />
            <h1 id="HEADER___TITLE" className='text-3xl text-white font-bold tracking-tighter m-0 hidden lg:block lg:w-full text-center'>RESPONSIVE DESIGN PAGE</h1>
            <DropDownMenuComponent />
            <NavigationMenuComponent />
        </nav>
    )
}

export default NavBarComponent
