import React from 'react'
import SkeletonComponent from '../SKELETON/SkeletonComponent'

function ProductsWrapperComponent() {
    return (
        <div className='w-full h-full flex items-center gap-5 border-8 border-red-900 bg-black z-50'>
            {Array.from({ length: 10 }).fill("").map((item: any) => (
                <SkeletonComponent />
            ))}
        </div>
    )
}

export default ProductsWrapperComponent
