import React from 'react'
import SkeletonComponent from '../SKELETON/SkeletonComponent'


// COMPONENT
function ProductsWrapperComponent() {
    return (
        <>
            <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 place-items-center justify-items-center place-content-center md:grid-cols-3 lg:grid-cols-4 gap-3 bg-black z-50 p-4 lg:p-10'>
                {Array.from({ length: 12 }).fill("").map((item: any) => (
                    <SkeletonComponent />
                ))}
            </div>

        </>
    )
}

export default ProductsWrapperComponent
