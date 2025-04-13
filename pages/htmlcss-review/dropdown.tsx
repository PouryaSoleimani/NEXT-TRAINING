import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function DropDownPage() {
    return (
        <div className='w-screen h-screen flex  items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-black'>

            <div className='w-fit h-fit relative'>
                <button className='w-64 justify-center py-1.5 bg-blue-800 hover:bg-blue-900 duration-200 rounded text-2xl font-semibold tracking-tight text-white flex items-center'>
                    Toggle
                    <ChevronDown className='translate-y-0.5' />
                </button>
                <div className='flex flex-col bg-zinc-200 px-[43px] py-1.5 rounded text-xl gap-y-1 items-center absolute top-[40px]'>
                    <Link href="#" className='hover:bg-zinc-400 p-1 w-full'>About</Link>
                    <Link href="#" className='hover:bg-zinc-400 p-1 w-full'>Gallery</Link>
                    <Link href="#" className='hover:bg-zinc-400 p-1 w-full'>Products</Link>
                    <Link href="#" className='hover:bg-zinc-400 p-1 w-full'>Account</Link>
                </div>
            </div>

        </div>
    )
}

export default DropDownPage
