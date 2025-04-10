import { Rate } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

const ProductBoxes = () => {

    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [value, setValue] = useState(3);


    return (
        <div className='w-screen h-screen flex justify-center item-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-black' dir='rtl'>
            <div className="container bg-zinc-800/50 my-10 rounded-2xl border h-fit flex items-center justify-around gap-6 p-5">

                <div className="flex flex-col p-3 items-center justify-between gap-y-6 w-1/4  rounded bg-zinc-950/90 border">
                    <Image src="/NEW___PICS/PRODUCTS/product___1.webp" width={150} height={250} alt='product__image' />
                    <h2 className='bg-black/30 text-[16px] p-1 rounded bg-zinc-800 px-6 py-2 w-full text-center  font-bold'>PRODUCT TITLE</h2>

                    <div className='flex bg-zinc-900/80 p-2 rounded items-center justify-between w-full'>
                        <div className='flex flex-col items-start justify-start'>
                            <del className='text-red-900/80 text-lg'>320/000 تومان</del>
                            <p className='font-black text-white text-2xl'>210/000 تومان</p>
                        </div>
                        <div>
                            <Rate tooltips={desc} onChange={setValue} value={value} style={{ scale: "0.8" }} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-3 items-center justify-between gap-y-6 w-1/4  rounded bg-zinc-950/90 border">
                    <Image src="/NEW___PICS/PRODUCTS/product___2.webp" width={150} height={250} alt='product__image' />
                    <h2 className='bg-black/30 text-[16px] p-1 rounded bg-zinc-800 px-6 py-2 w-full text-center  font-bold'>PRODUCT TITLE</h2>
                    <div className='flex bg-zinc-900/80 p-2 rounded items-center justify-between w-full'>
                        <div className='flex flex-col items-start justify-start'>
                            <del className='text-red-900/80 text-lg'>320/000 تومان</del>
                            <p className='font-black text-white text-2xl'>210/000 تومان</p>
                        </div>
                        <div>
                            <Rate tooltips={desc} onChange={setValue} value={value} style={{ scale: "0.8" }} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-3 items-center justify-between gap-y-6 w-1/4  rounded bg-zinc-950/90 border">
                    <Image src="/NEW___PICS/PRODUCTS/product___3.webp" width={150} height={250} alt='product__image' />
                    <h2 className='bg-black/30 text-[16px] p-1 rounded bg-zinc-800 px-6 py-2 w-full text-center  font-bold'>PRODUCT TITLE</h2>
                    <div className='flex bg-zinc-900/80 p-2 rounded items-center justify-between w-full'>
                        <div>
                            <del className='text-red-900/80 text-lg'>320/000 تومان</del>
                            <p className='font-black text-white text-2xl'>210/000 تومان</p>
                        </div>
                        <div>
                            <Rate tooltips={desc} onChange={setValue} value={value} style={{ scale: "0.8" }} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-3 items-center justify-between gap-y-6 w-1/4  rounded bg-zinc-950/90 border">
                    <Image src="/NEW___PICS/PRODUCTS/product___4.webp" width={150} height={250} alt='product__image' />
                    <h2 className='bg-black/30 text-[16px] p-1 rounded bg-zinc-800 px-6 py-2 w-full text-center  font-bold'>PRODUCT TITLE</h2>
                    <div className='flex bg-zinc-900/80 p-2 rounded items-center justify-between w-full'>
                        <div>
                            <del className='text-red-900/80 text-lg'>320/000 تومان</del>
                            <p className='font-black text-white text-2xl'>210/000 تومان</p>
                        </div>
                        <div>
                            <Rate tooltips={desc} onChange={setValue} value={value} style={{ scale: "0.8" }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductBoxes
