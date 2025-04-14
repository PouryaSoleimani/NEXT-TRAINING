import { IoLogoGithub } from "react-icons/io";
import { LogIn, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FlexBox() {
    return (
        <>
            <div id='FLEX____CONTAINER1' className='w-[95%] py-16 bg-zinc-800 mx-auto mt-16 flex'>
                {/* ORDER */}
                <div className="FLEX____ITEM1 sm:order-4">1</div>
                <div className="FLEX____ITEM1 sm:order-3">2</div>
                <div className="FLEX____ITEM1 sm:order-2">3</div>
                <div className="FLEX____ITEM1 sm:order-1">4</div>
            </div>


            {/* ALIGN CONTENT */}
            <div id="FLEX____CONTAINER2" className='w-[95%] bg-zinc-950 mx-auto mt-16 py-3 content-between '>
                <div className="FLEX____ITEM2">ABOUT</div>
                <div className="FLEX____ITEM2">GALLERY</div>
                <div className="FLEX____ITEM2">CART</div>
                <div className="FLEX____ITEM2">LOGOUT</div>
            </div>


            {/* SIZE AND FLEX-GROW */}
            <div id="FLEX____CONTAINER3" className='w-[95%] py-16 bg-zinc-700 mx-auto mt-16 border-t-4 rounded-t-xl flex'>
                <div className="FLEX____ITEM3 size-52 grow">1</div>
                <div className="FLEX____ITEM3 size-52 grow">2</div>
                <div className="FLEX____ITEM3 size-52 grow">3</div>
                <div className="FLEX____ITEM3 size-52 grow">5</div>
                <div className="FLEX____ITEM3 size-52 grow">6</div>
                <div className="FLEX____ITEM3 size-52 grow">7</div>
                <div className="FLEX____ITEM3 size-52 grow">8</div>
                <div className="FLEX____ITEM3 size-52 grow">9</div>
                <div className="FLEX____ITEM3 size-52 grow">10</div>
            </div>

            {/* FLEX BASIS */}
            <div id="FLEX____CONTAINER4" className='w-[95%] py-4 bg-zinc-600/30 backdrop-blur-2xl mx-auto mt-16 flex px-6 gap-4 rounded-xl justify-between'>

                <div id='NAVBAR___MOBILE' className='flex md:hidden items-center justify-between w-full'>
                    <div className="FLEX____ITEM4 basis-1/3">
                        <IoLogoGithub className="size-16" />
                    </div>
                    <div className="FLEX____ITEM4 p-0  basis-2/3 justify-end gap-2 px-0 ">
                        <LogIn className='bg-black p-2 rounded w-12 h-12' />
                        <Settings className='bg-black p-2 rounded w-12 h-12' />
                    </div>
                </div>

                <div id='NAVBAR___DESKTOP' className='hidden md:flex items-center justify-between w-full'>
                    <div className="FLEX____ITEM4 basis-1/4">
                        <IoLogoGithub className="size-16" />
                    </div>
                    <div className="FLEX____ITEM4 flexitem basis-2/4 text-3xl font-bold flex gap-4 items-end justify-center">
                        <p className='hover:underline duration-200 cursor-pointer decoration-blue-900 decoration-4'>Getting Started</p>
                        <p className='hover:underline duration-200 cursor-pointer decoration-blue-900 decoration-4'>Products</p>
                        <p className='hover:underline duration-200 cursor-pointer decoration-blue-900 decoration-4'>Docs</p>
                    </div>
                    <div className="FLEX____ITEM4 basis-1/4 order-1"><LogIn className='bg-black p-2 rounded w-12 h-12' />
                        <Settings className='bg-black p-2 rounded w-12 h-12' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default FlexBox