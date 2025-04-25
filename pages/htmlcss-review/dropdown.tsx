import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function DropDownPage() {
    return (
        <div className='w-screen h-screen flex  items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-black'>

            <div id='WRAPPER' className='w-fit h-fit relative z-50 group '>
                <button id='DROPDOWN____BTN' className='w-64 justify-center py-4 bg-blue-800 hover:bg-blue-900  rounded text-2xl font-semibold tracking-tight duration-200 text-white flex items-center gap-4'>
                    Toggle
                    <ChevronDown id='DROPDOWN____CHEVRON' className='translate-y-0.5 duration-200  ease-in-out peer-hover:rotate-180 group-hover:rotate-180' />
                </button>
                <div id='DROPDOWN___CONTENT' className='bg-white flex flex-col items-center justify-center gap-y-3 text-center py-2 absolute text-lg w-full top-24 rounded duration-200 ease-in-out  '>
                    <Link href="#" className='hover:bg-zinc-400 p-2 font-semibold tracking-tight w-full'>About</Link>
                    <Link href="#" className='hover:bg-zinc-400 p-2 font-semibold tracking-tight w-full'>Gallery</Link>
                    <Link href="#" className='hover:bg-zinc-400 p-2 font-semibold tracking-tight w-full'>Products</Link>
                    <Link href="#" className='hover:bg-zinc-400 p-2 font-semibold tracking-tight w-full'>Account</Link>
                </div>
            </div>

        </div>
    )backHandler
}

export default DropDownPage
