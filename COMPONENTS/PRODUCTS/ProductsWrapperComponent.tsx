import React from 'react'
import SkeletonComponent from '../SKELETON/SkeletonComponent'

function ProductsWrapperComponent() {
    return (
        <div className='w-full h-full flex items-center justify-center gap-5  bg-black z-50 p-4 lg:p-10 flex-wrap'>
            {Array.from({ length: 10 }).fill("").map((item: any) => (
                <SkeletonComponent />
            ))}
        </div>
    )
}

export default ProductsWrapperComponent
