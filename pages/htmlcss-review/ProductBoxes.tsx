import React, { useState } from 'react'
import { Rate } from 'antd'
import Image from 'next/image'
import { FaCartArrowDown, FaInbox, FaUser } from "react-icons/fa";
import { IoMdLogOut, IoMdSettings } from "react-icons/io";

const ProductBoxes = () => {

    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [value, setValue] = useState(3);


    return (
        <div className='w-screen h-screen  flex flex-col justify-between items-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-black' dir='rtl'>
            {/* NAVBAR =====================================================================================================================================*/}
            <div dir='ltr' id="NAVBAR" className='w-full bg-white/10 h-auto  flex items-center justify-between pr-6 sticky top-0 left-0'>
                <Image src='/next.svg' width={150} height={50} alt='logo' className='bg-white/30 p-3 rounded' />
                <ul className='flex items-center gap-x-2 justify-center h-full m-0'>
                    <li className="hover:bg-black duration-300 cursor-pointer text-white text-2xl font-black p-2 rounded"><FaInbox className='w-8 h-8' /></li>
                    <li className="hover:bg-black duration-300 cursor-pointer text-white text-2xl font-black p-2 rounded"><FaCartArrowDown className='w-8 h-8' /></li>
                    <li className="hover:bg-black duration-300 cursor-pointer text-white text-2xl font-black p-2 rounded"><FaUser className='w-8 h-8' /></li>
                    <li className="hover:bg-black duration-300 cursor-pointer text-white text-2xl font-black p-2 rounded"><IoMdSettings className='w-8 h-8' /></li>
                    <li className="hover:bg-black duration-300 cursor-pointer text-white text-2xl font-black p-2 rounded"><IoMdLogOut className='w-8 h-8' /></li>
                </ul>
            </div>

            {/* PRODUCT BOXES===================================================================================================================================== */}
            <div className='w-screen h-screen flex items-center justify-center'>
                <div className="container bg-zinc-600/30 my-10 rounded-2xl h-fit flex flex-wrap items-center justify-center gap-3 p-5">

                    {/* PRODUCT BOXES */}
                    <div className="flex flex-col p-3 items-end justify-between  h-[35rem] pt-3 rounded-lg bg-zinc-950 hover:scale-105 duration-300 cursor-pointer">
                        <Image src="/NEW___PICS/PRODUCTS/product___1.webp" width={190} height={250} alt='product__image' className='rounded-md w-full' />
                        <h2 className='bg-black/30 text-[16px] rounded bg-zinc-800 px-6 py-4 mt-2 w-full text-center  font-black tracking-wider'>PRODUCT TITLE</h2>

                        <div className='flex bg-zinc-900/80 p-2 rounded items-center justify-between w-full'>
                            <div className='flex flex-col items-start justify-start'>
                                <del className='text-red-900/80 text-lg'>320/000 تومان</del>
                                <p className='font-black text-white text-2xl'>210/000 <span className='text-zinc-300 text-sm'>تومان</span></p>
                            </div>
                            <div>
                                <Rate tooltips={desc} onChange={setValue} value={value} style={{ scale: "0.8" }} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col p-3 items-end justify-between  h-[35rem] pt-3 rounded-lg bg-zinc-950 hover:scale-105 duration-300 cursor-pointer">
                        <Image src="/NEW___PICS/PRODUCTS/product___2.webp" width={190} height={250} alt='product__image' className='rounded-md w-full' />
                        <h2 className='bg-black/30 text-[16px] rounded bg-zinc-800 px-6 py-4 mt-2 w-full text-center  font-black tracking-wider'>PRODUCT TITLE</h2>

                        <div className='flex bg-zinc-900/80 p-2 rounded items-center justify-between w-full'>
                            <div className='flex flex-col items-start justify-start'>
                                <del className='text-red-900/80 text-lg'>320/000 تومان</del>
                                <p className='font-black text-white text-2xl'>210/000 <span className='text-zinc-300 text-sm'>تومان</span></p>
                            </div>
                            <div>
                                <Rate tooltips={desc} onChange={setValue} value={value} style={{ scale: "0.8" }} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col p-3 items-end justify-between  h-[35rem] pt-3 rounded-lg bg-zinc-950 hover:scale-105 duration-300 cursor-pointer">
                        <Image src="/NEW___PICS/PRODUCTS/product___3.webp" width={190} height={250} alt='product__image' className='rounded-md w-full' />
                        <h2 className='bg-black/30 text-[16px] rounded bg-zinc-800 px-6 py-4 mt-2 w-full text-center  font-black tracking-wider'>PRODUCT TITLE</h2>

                        <div className='flex bg-zinc-900/80 p-2 rounded items-center justify-between w-full'>
                            <div className='flex flex-col items-start justify-start'>
                                <del className='text-red-900/80 text-lg'>320/000 تومان</del>
                                <p className='font-black text-white text-2xl'>210/000 <span className='text-zinc-300 text-sm'>تومان</span></p>
                            </div>
                            <div>
                                <Rate tooltips={desc} onChange={setValue} value={value} style={{ scale: "0.8" }} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col p-3 items-end justify-between  h-[35rem] pt-3 rounded-lg bg-zinc-950 hover:scale-105 duration-300 cursor-pointer">
                        <Image src="/NEW___PICS/PRODUCTS/product___4.webp" width={190} height={250} alt='product__image' className='rounded-md w-full' />
                        <h2 className='bg-black/30 text-[16px] rounded bg-zinc-800 px-6 py-4 mt-2 w-full text-center  font-black tracking-wider'>PRODUCT TITLE</h2>

                        <div className='flex bg-zinc-900/80 p-2 rounded items-center justify-between w-full'>
                            <div className='flex flex-col items-start justify-start'>
                                <del className='text-red-900/80 text-lg'>320/000 تومان</del>
                                <p className='font-black text-white text-2xl'>210/000 <span className='text-zinc-300 text-sm'>تومان</span></p>
                            </div>
                            <div>
                                <Rate tooltips={desc} onChange={setValue} value={value} style={{ scale: "0.8" }} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductBoxes
