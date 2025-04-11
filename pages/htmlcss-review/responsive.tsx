import DropDownMenuComponent from "@/COMPONENTS/HEADER/DropDownMenuComponent"
import NavigationMenuComponent from "@/COMPONENTS/HEADER/NavigationMenuComponent"
import { Button } from "@/COMPONENTS/ui/button"

import Image from 'next/image'
import React from 'react'





function responsive() {
    return (
        <div className='w-screen flex items-center justify-center overflow-x-hidden z-0'>
            <nav className='w-full   bg-zinc-700 p-2 flex items-baseline justify-between z-50'>
                <Image src="/next.svg" width={60} height={50} alt="logo" />
                <h1 id="HEADER___TITLE" className='text-lg text-white font-bold tracking-tighter leading-10 m-0 hidden sm:block'>RESPONSIVE DESIGN</h1>
                <DropDownMenuComponent />
                <NavigationMenuComponent />
            </nav>
        </div>
    )
}

export default responsive
