//^ CSS REVIEW PAGE ===================================================================================================================================================================
import React from 'react'
import styles from "./cssreview.module.css"




// COMPONENT ========================================================================================================================================================================
const CCSReviewComponent = () => {
    return (

        <div className='w-screen h-screen text-white'>
            <h1 className='bg-blue-900 text-center py-1 font-bold'>CCS REVIEW</h1>
            <p className={styles.text}>HELLO WOLRD</p>

            <div className='bg-zinc-800'>
                <h1 className='myTitle'>Hello World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
        </div>

    )
}

export default CCSReviewComponent