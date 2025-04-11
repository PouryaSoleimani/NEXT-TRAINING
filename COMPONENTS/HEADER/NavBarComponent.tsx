import Image from 'next/image'
import React from 'react'
import DropDownMenuComponent from './DropDownMenuComponent'
import { NavigationMenuComponent } from './NavigationMenuComponent'


// COMPONENT ================================================================================================================
function NavBarComponent() {
    return (
        <nav className='w-full sticky top-0 left-0   bg-zinc-700 p-2 flex items-baseline justify-between z-50'>
            <Image src="/next.svg" width={60} height={50} alt="logo" />
            <h1 id="HEADER___TITLE" className='text-lg text-white font-bold tracking-tighter leading-10 m-0 hidden sm:block'>RESPONSIVE DESIGN</h1>
            <DropDownMenuComponent />
            <NavigationMenuComponent />
        </nav>
    )
}

export default NavBarComponent
