import { Button } from "@/COMPONENTS/ui/button"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuPortal,
//     DropdownMenuSeparator,
//     DropdownMenuShortcut,
//     DropdownMenuSub,
//     DropdownMenuSubContent,
//     DropdownMenuSubTrigger,
//     DropdownMenuTrigger,
// } from "@/COMPONENTS/ui/dropdown-menu"
import Image from 'next/image'
import React from 'react'





function responsive() {
    return (
        <div className='w-screen overflow-x-hidden'>
            <nav className='w-full sticky top-0 left-0 right-0 bg-zinc-700 p-2 flex items-center justify-between'>
                <Image src="/next.svg" width={50} height={50} alt="logo" />
                <h1 id="HEADER___TITLE" className='text-xs text-white font-bold tracking-tighter'>RESPONSIVE DESIGN</h1>
                <Button>Click me</Button>
            </nav>
        </div>
    )
}

export default responsive
