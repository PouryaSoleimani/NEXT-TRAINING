import Link from 'next/link'
import React from 'react'

const HTMLCSSReviewComponent = () => {

    return (
        <div className='p-4 text-white'>

            <h1 className='text-center mt-4' title='THIS IS THE PAGE TITLE'>HTML & CSS <strong>Review</strong></h1>
            <p className='text-orange-500 font-black text-2xl text-center w-full' title='THIS IS THE p TAG TITLE '>This is a review of HTML and <i>CSS concepts.</i></p>

            <ul className='text-zinc-200'>
                <li><mark>HTML Elements</mark></li>
                <li>CSS Selectors</li>
                <li>Flexbox</li>
                <li>Grid Layout</li>
                <li>Responsive Design</li>
            </ul>

            <p className='text-center w-full bg-white text-black font-black text-3xl py-3'>Make sure to practice these concepts!</p>
            <h2>Resources</h2>
            <p><del className='text-red-900'>300/000</del> 200/000 </p>
            <p>H<sub>2</sub>O</p>
            <p>H<sup>2</sup>O</p>

            <p>H<small>2</small>O</p>
            <p>H<big>2</big>O</p>

            <Link href="/NEW___PICS/CARTOON____BG.jpg" download target='_blank' rel="noopener noreferrer" title='DOWNLOAD THE IMAGE'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Download PDF
                </button>
            </Link>
        </div >
    )
}

export default HTMLCSSReviewComponent