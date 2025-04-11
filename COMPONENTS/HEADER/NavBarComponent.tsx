import Image from 'next/image'
import React from 'react'
import DropDownMenuComponent from './DropDownMenuComponent'
import { NavigationMenuComponent } from './NavigationMenuComponent'


// COMPONENT ================================================================================================================
function NavBarComponent() {
    return (
        <nav className='w-full sticky top-0 left-0 bg-zinc-700 px-2 py-2 sm:py-0 flex items-center justify-between z-50'>
            <Image src="/next.svg" width={150} height={80} alt="logo" className='h-full object-cover' />
            <h1 id="HEADER___TITLE" className='text-3xl text-white font-bold tracking-tighter leading-10 m-0 hidden lg:block lg:w-full text-center'>RESPONSIVE DESIGN PAGE</h1>
            <DropDownMenuComponent />
            <NavigationMenuComponent />
        </nav>
    )
}

export default NavBarComponent
