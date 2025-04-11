import DropDownMenuComponent from "@/COMPONENTS/FOOTER/DropDownMenuComponent"
import { Button } from "@/COMPONENTS/ui/button"

import Image from 'next/image'
import React from 'react'





function responsive() {
    return (
        <div className='w-screen flex items-center justify-center overflow-x-hidden'>
            <nav className='w-full  sticky top-0 left-0 right-0 bg-zinc-700 p-2 flex items-baseline justify-between'>
                <Image src="/next.svg" width={60} height={50} alt="logo" />
                <h1 id="HEADER___TITLE" className='text-lg text-white font-bold tracking-tighter leading-10 m-0 hidden sm:block'>RESPONSIVE DESIGN</h1>
                <DropDownMenuComponent />
            </nav>
        </div>
    )
}

export default responsive
