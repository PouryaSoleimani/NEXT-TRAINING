import React from 'react'

const HTMLCSSReviewComponent = () => {

    return (
        <div className='p-4 text-white'>

            <h1 className='text-center mt-4 font-black'>HTML & CSS Review</h1>
            <p className='text-orange-500 font-black text-2xl'>This is a review of HTML and CSS concepts.</p>

            <ul className='text-zinc-200'>
                <li>HTML Elements</li>
                <li>CSS Selectors</li>
                <li>Flexbox</li>
                <li>Grid Layout</li> 
                <li>Responsive Design</li>
            </ul> 

            <p className='text-center w-full bg-white text-black font-black text-3xl py-3'>Make sure to practice these concepts!</p>
            <h2>Resources</h2>

        </div>
    )
}

export default HTMLCSSReviewComponent