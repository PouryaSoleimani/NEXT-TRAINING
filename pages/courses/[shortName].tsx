import { useRouter } from 'next/router'
import React from 'react'


//^ COMPONENT
const SingleProductPage = () => {
    const router = useRouter()
    return (
        <div>
            <h1>SingleProductPage</h1>
            <h2>Course Name : {router.query.shortName?.toString().toUpperCase()} </h2>
        </div>
    )
}

export default SingleProductPage