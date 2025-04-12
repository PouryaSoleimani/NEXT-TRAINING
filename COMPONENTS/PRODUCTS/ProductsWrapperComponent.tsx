import React from 'react'
import SkeletonComponent from '../SKELETON/SkeletonComponent'
import { Separator } from '@radix-ui/react-dropdown-menu'

function ProductsWrapperComponent() {
    return (
        <>
            <Separator className='text-white bg-zinc-800 h-0.5 w-2/3 mx-auto'/>
            <div className='w-full h-full flex items-center justify-center gap-5  bg-black z-50 p-4 lg:p-10 flex-wrap'>
                {Array.from({ length: 10 }).fill("").map((item: any) => (
                    <SkeletonComponent />
                ))}
            </div>
        </>
    )
}

export default ProductsWrapperComponent
