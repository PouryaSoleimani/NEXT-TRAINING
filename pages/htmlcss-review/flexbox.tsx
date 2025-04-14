import { LogIn, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FlexBox() {
    return (
        <>
            <div id='FLEX____CONTAINER' className='w-[95%] py-16 bg-zinc-800 mx-auto mt-16 flex'>

                {/* ORDER */}
                <div className="FLEX____ITEM sm:order-4">1</div>
                <div className="FLEX____ITEM sm:order-3">2</div>
                <div className="FLEX____ITEM sm:order-2">3</div>
                <div className="FLEX____ITEM sm:order-1">4</div>
            </div>


            {/* ALIGN CONTENT */}
            <div id="FLEX____CONTAINER2" className='w-[95%] bg-zinc-950 mx-auto mt-16'>
                <div className="FLEX____ITEM2">ABOUT</div>
                <div className="FLEX____ITEM2">GALLERY</div>
                <div className="FLEX____ITEM2">CART</div>
                <div className="FLEX____ITEM2">LOGOUT</div>
            </div>


            {/* GROW AND SIZE */}
            <div id="FLEX____CONTAINER3" className='w-[95%] py-16 bg-zinc-700 mx-auto mt-16 flex'>
                <div className="FLEX____ITEM3 size-44 grow">1</div>
                <div className="FLEX____ITEM3 size-44 grow">2</div>
                <div className="FLEX____ITEM3 size-44 grow">3</div>
                <div className="FLEX____ITEM3 size-44 grow">5</div>
                <div className="FLEX____ITEM3 size-44 grow">6</div>
                <div className="FLEX____ITEM3 size-44 grow">7</div>
                <div className="FLEX____ITEM3 size-44 grow">8</div>
                <div className="FLEX____ITEM3 size-44 grow">9</div>
                <div className="FLEX____ITEM3 size-44 grow">10</div>
            </div>

            {/* FLEX BASIS */}
            <div id="FLEX____CONTAINER4" className='w-[95%] py-4 bg-zinc-600/30 backdrop-blur-2xl mx-auto mt-16 flex px-6 gap-4 rounded'>
                <div id='NAVBAR___MOBILE' className='flex md:hidden items-center justify-between w-full'>
                    <div className="FLEX____ITEM4 basis-1/4"><Image src="/vercel.svg" width={100} height={200} alt='logo' /></div>
                    <div className="FLEX____ITEM4 p-0 justify-end basis-1/4"><LogIn className='bg-black p-2 rounded w-12 h-12' /><Settings className='bg-black p-2 rounded w-12 h-12' /></div>
                </div>
                <div id='NAVBAR___DESKTOP' className='hidden md:flex items-center justify-between w-full'>
                    <div className="FLEX____ITEM4 basis-1/4"><Image src="/vercel.svg" width={120} height={200} alt='logo' /></div>
                    <div className="FLEX____ITEM4 basis-2/4"><p>Getting Started</p> <p>Products</p> <p>Docs</p></div>
                    <div className="FLEX____ITEM4 basis-1/4"><LogIn className='bg-black p-2 rounded w-12 h-12' /><Settings className='bg-black p-2 rounded w-12 h-12' /></div>
                </div>
            </div>
        </>
    )
}

export default FlexBox