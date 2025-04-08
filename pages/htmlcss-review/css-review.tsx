//^ CSS REVIEW PAGE ===================================================================================================================================================================
import React from 'react'
import styles from "./cssreview.module.css"




// COMPONENT ========================================================================================================================================================================
const CCSReviewComponent = () => {
    return (

        <div className='w-screen h-screen text-white'>
            <h1 className='bg-blue-900 text-center py-1 font-bold'>CCS REVIEW</h1>
            <p className={styles.text}>HELLO WOLRD</p>
        </div>

    )
}

export default CCSReviewComponent