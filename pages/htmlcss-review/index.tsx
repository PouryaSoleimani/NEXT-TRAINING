// ^ HTML & CSS REVIEW =======================================================================================================================================================
import Link from 'next/link'
import React from 'react'

const HTMLCSSReviewComponent = () => {

    return (

        <div className='p-4 text-white'>

            <h1 className='text-center mt-4' title='THIS IS THE PAGE TITLE'>HTML & CSS <strong>Review</strong></h1>
            <p className='text-orange-500 font-black text-2xl text-center w-full' title='THIS IS THE <p></p> TAG TITLE '>This is a review of HTML and <i>CSS concepts.</i></p>

            <ul className='text-zinc-200'>
                <li><mark>HTML Elements</mark></li>
                <li>CSS Selectors</li>
                <li>Flexbox</li>
                <li>Grid Layout</li>
                <li>Responsive Design</li>
            </ul>

            {/* TYPOGRAPHY */}
            <p className='text-center w-full bg-white text-black font-black text-3xl py-3'>Make sure to practice these concepts!</p>
            <h2>Resources</h2>
            <p><del className='text-red-900'>300/000</del> 200/000 </p>

            <p>H<sub>2</sub>O</p>
            <p>H<sup>2</sup>O</p>

            <p>H<small>2</small>O</p>
            <p>H<big>2</big>O</p>

            {/*  DOWNLOAD */}
            <Link href="/NEW___PICS/CARTOON____BG.jpg" download target='_blank' rel="noopener noreferrer" title='DOWNLOAD THE IMAGE'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Download PDF
                </button>
            </Link>
            {/* PHONE NUMBER  */}
            <Link href="tel:+989375008682" title='CALL ME'>
                <button className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded mx-1'>
                    +989375008682
                </button>
            </Link>
            {/* PICTURE */}
            <picture>
                <source srcSet="/NEW___PICS/CARTOON____BG.jpg" type="image/webp" media="(min-width: 600px)" />
                <source srcSet="/NEW___PICS/404_page_cover.jpg" type="image/webp" media="(min-width: 400px)" />
                <img src="/NEW___PICS/not-found.png" alt="Responsive image" />
            </picture>

            {/* TABLE  */}
            <hr />
            <h3 className='text-center font-bold'>MY TABLE</h3>
            <table className='w-1/2 mx-auto border' style={{ fontFamily: "BYekan+", fontSize: "16px ," }}>

                <thead>
                    <tr className='border p-10 text-center'>
                        <th className='border'>#</th>
                        <th className='border'>NAME</th>
                        <th className='border'>JOB</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='border border-separate text-center'>
                        <td className='border'>1</td>
                        <td className='border'>POURYA</td>
                        <td className='border'>SOLEIMANI</td>
                    </tr>
                </tbody>

            </table>

            <ol type='1' start={10}>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
            </ol>


        </div >
    )
}

export default HTMLCSSReviewComponent