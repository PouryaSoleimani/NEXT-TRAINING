import { Rate } from 'antd'
import Image from 'next/image'
import React from 'react'

const ProductBoxes = () => {
    return (
        <div className='w-screen h-screen flex justify-center item-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-black'>
            <div className="container bg-zinc-800/50 my-10 rounded-2xl border h-fit flex items-center justify-around gap-6 p-5">

                <div className="flex flex-col p-3 items-center justify-between w-1/4  rounded bg-zinc-400/50 border h-1/3">
                    <Image src="/NEW___PICS/PRODUCTS/product___1.webp" width={150} height={250} alt='product__image' />
                    <h2 className='bg-black/30 text-[16px] p-1 rounded'>PRODUCT TITLE</h2>

                    <div className='flex flex-row-reverse items-center justify-between w-full px-2 mt-10'>
                        <div className='flex flex-col items-start justify-start'>
                            <del className='text-red-900/80'>320/000 تومان</del>
                            <p className='font-black'>210/000 تومان</p>
                        </div>
                        <div> <Rate /> </div>
                    </div>
                </div>

                <div className="flex flex-col p-3 items-center justify-between w-1/4  rounded bg-zinc-400/50 border h-1/3">
                    <Image src="/NEW___PICS/PRODUCTS/product___2.webp" width={150} height={250} alt='product__image' />
                    <h2 className='bg-black/30 text-[16px] p-1 rounded'>PRODUCT TITLE</h2>
                    <div className='flex flex-row-reverse items-center justify-between w-full px-2 mt-10'>
                        <div>
                            <del className='text-red-900/80'>320/000 تومان</del>
                            <p className='font-black'>210/000 تومان</p>
                        </div>
                        <div>
                            <Rate />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-3 items-center justify-between w-1/4  rounded bg-zinc-400/50 border h-1/3">
                    <Image src="/NEW___PICS/PRODUCTS/product___3.webp" width={150} height={250} alt='product__image' />
                    <h2 className='bg-black/30 text-[16px] p-1 rounded'>PRODUCT TITLE</h2>
                    <div className='flex flex-row-reverse items-center justify-between w-full px-2 mt-10'>
                        <div>
                            <del className='text-red-900/80'>320/000 تومان</del>
                            <p className='font-black'>210/000 تومان</p>
                        </div>
                        <div>
                            <Rate />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-3 items-center justify-between w-1/4  rounded bg-zinc-400/50 border h-1/3">
                    <Image src="/NEW___PICS/PRODUCTS/product___4.webp" width={150} height={250} alt='product__image' />
                    <h2 className='bg-black/30 text-[16px] p-1 rounded'>PRODUCT TITLE</h2>
                    <div className='flex flex-row-reverse items-center justify-between w-full px-2 mt-10'>
                        <div>
                            <del className='text-red-900/80'>320/000 تومان</del>
                            <p className='font-black'>210/000 تومان</p>
                        </div>
                        <div>
                            <Rate />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductBoxes
