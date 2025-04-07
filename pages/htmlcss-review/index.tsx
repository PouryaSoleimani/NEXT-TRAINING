// ^ HTML & CSS REVIEW =======================================================================================================================================================
import Link from 'next/link'
import React from 'react'

const HTMLCSSReviewComponent = () => {

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const selectedValue = formData.get('select');
        console.info("%c TECHNOLOGY  ===> ", "color:cornflowerblue ; font-size:14px ; line-height:1.2", selectedValue)
    }


    // RETURN =================================================================================================================================================================
    return (

        <div className='p-24 bg-zinc-300'>

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
            <div>
                <p className='text-center w-full bg-white text-black font-black text-3xl py-3'>Make sure to practice these concepts!</p>
                <h2>Resources</h2>
                <p><del className='text-red-900'>300/000</del> 200/000 </p>

                <p>H<sub>2</sub>O</p>
                <p>H<sup>2</sup>O</p>

                <p>H<small>2</small>O</p>
                <p>H<big>2</big>O</p>
            </div>

            {/*  DOWNLOAD LINK =================================================================================================================================================== */}
            <Link href="/NEW___PICS/CARTOON____BG.jpg" download target='_blank' rel="noopener noreferrer" title='DOWNLOAD THE IMAGE'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Download PDF
                </button>
            </Link>

            <Link href={"/next.svg"} download target='_blank' rel='noopener noreferrer' title='DOWNLOAD SVG'>
                <button className='px-4 py-2 rounded mx-4 text-white font-black my-5 bg-red-950 hover:bg-red-800'>DOWNLOAD SVG</button>
            </Link>

            {/* PHONE NUMBER LINK  ==============================================================================================================================================*/}
            <Link href="tel:+989375008682" title='CALL ME'>
                <button className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded mx-1'>
                    +989375008682
                </button>
            </Link>

            <Link href={"tel:+989375008682"}>
                <button className='px-4 py-2 rounded mx-4 text-white font-black my-5 bg-emerald-950 hover:bg-emerald-800'>CALL ME</button>
            </Link>

            {/* PICTURE ==========================================================================================================================================================*/}
            <picture>
                <source srcSet="/NEW___PICS/CARTOON____BG.jpg" type="image/webp" media="(min-width: 600px)" />
                <source srcSet="/NEW___PICS/404_page_cover.jpg" type="image/webp" media="(min-width: 400px)" />
                <img src="/NEW___PICS/not-found.png" alt="Responsive image" />
            </picture>

            {/*TABLE  ============================================================================================================================================================*/}
            <hr />
            <h3 className='text-center font-bold'>MY TABLE</h3>

            <table className='w-1/2 mx-auto border' style={{ fontFamily: "BYekan+", fontSize: "16px ," }}>

                <thead className='text-white font-black'>
                    <tr>
                        <th className='border text-center'>#</th>
                        <th className='border text-center'>FIRST NAME</th>
                        <th className='border text-center'>LAST NAME</th>
                    </tr>
                </thead>

                <tbody className='text-white'>
                    <tr className='border border-separate text-center'>
                        <td className='border'>1</td>
                        <td className='border'>POURYA</td>
                        <td className='border'>SOLEIMANI</td>
                    </tr>
                </tbody>

            </table>

            {/* LISTS ==============================================================================================================================================*/}
            <ol type='1' start={10}>
                <li>content</li>
                <li>content</li>
                <li>content</li>
            </ol>
            {/* DETAILS AND SUMMARY ==============================================================================================================================================*/}
            <details>
                <summary className='btn btn-primary'>READ MORE</summary>
                <p>WORLD Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad quos est iste voluptas voluptatum accusamus tempore consequatur aliquid maxime reprehenderit, doloribus rem id enim earum voluptatem eius. Id, ipsum.</p>
            </details>

            <details >
                <summary className='btn btn-danger mt-5'>READ MORE</summary>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptas iure consequatur porro eligendi sed minima mollitia corrupti eaque impedit quasi expedita, nihil quaerat aspernatur ea iste qui. Exercitationem, veritatis.</p>
            </details>
            <hr />

            {/* ABBREVIATION ==============================================================================================================================================*/}
            <abbr title="HELLO WORLD">HW</abbr>
            <abbr title="UNITED STATES OF AMERICA" className='block my-4 bg-black w-fit px-5 py-2 font-bold text-3xl rounded text-white'> USA </abbr>


            {/* AUTO COMPLETE ==============================================================================================================================================*/}
            <div>
                <div className='flex flex-col w-fit p-4 border-2 border-black rounded'>
                    <label htmlFor="NAME">NAME : </label>
                    <input type="text" name="NAME" id="NAME" autoComplete='on' className='text-black p-2' />
                    <label htmlFor="EMAIL">EMAIL : </label>
                    <input type="text" name="NAME" id="EMAIL" autoComplete='on' className='text-black p-2' />
                </div>

                <hr />

                {/* RADIO BUTTONS  ==================================================================================================================================================*/}
                <div className='border-2 border-black w-fit p-3 rounded space-y-2 items-start justify-start'>
                    <label htmlFor="male">male</label>
                    <input type="radio" name="gender" id="male" value="male" className='text-white' />
                    <br />
                    <label htmlFor="female">female</label>
                    <input type="radio" name="gender" id="female" value="female" className='text-white' />
                    <br />
                    <label htmlFor="prefer">prefer not to say</label>
                    <input type="radio" name="gender" id="prefer" value="prefer not to say" className='text-white' />
                </div>
                <br />
                {/* name||| id ||| value ||| auto complete ||||| target="_blank" */}

                {/* SELECT BOX ==============================================================================================================================================*/}
                <form onSubmit={event => submitHandler(event)} className='border-2 border-red-900 p-4 rounded'>
                    <select name="select" id="select" className='px-3 py-2 border border-black rounded mr-4' defaultValue={1}>
                        <option value="0">Please Select one</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="BOOTSTRAP">BOOTSTRAP</option>
                        <option value="TAILWIND">TAILWIND</option>
                        <option value="JAVASCRIPT">JAVASCRIPT</option>
                        <option value="TYPESCRIPT">TYPESCRIPT</option>
                        <option value="REACT">REACT.JS</option>
                        <option value="NEXT">NEXT.JS</option>
                        <option value="GIT">GIT</option>
                        <option value="GITHUB">GITHUB</option>
                        <option value="NPM">NPM</option>
                        <option value="GSAP">GSAP</option>
                    </select>
                    <button type="submit" className='btn btn-success'>SEND</button>
                </form>

                {/* FIELD SET AND LEGEND   ================================================================================================================================================*/}
                <form className='border-2 my-4 border-blue-900 p-4 rounded'>

                    <fieldset className='border-2 border-blue-900 my-4'>
                        <legend>TITLE 1</legend>
                        <label htmlFor="fname">FIRST NAME</label>
                        <input type="text" name="fname" id="" className='px-2 py-1 rounded mx-1 border-1 border-zinc-800' />
                        <label htmlFor="lname">LAST NAME</label>
                        <input type="text" name="lname" id="" className='px-2 py-1 rounded mx-1 border-1 border-zinc-800' />
                        <button className='btn btn-success'>SEND</button>
                    </fieldset>

                    <fieldset className='border-2 border-blue-900 my-4'>
                        <legend>TITLE 2</legend>
                        <label htmlFor="fname">FIRST NAME</label>
                        <input type="text" name="fname" id="" className='px-2 py-1 rounded mx-1 border-1 border-zinc-800' />
                        <label htmlFor="lname">LAST NAME</label>
                        <input type="text" name="lname" id="" className='px-2 py-1 rounded mx-1 border-1 border-zinc-800' />
                        <button className='btn btn-success'>SEND</button>
                    </fieldset>

                </form>

                {/* DATA LIST ================================================================================================================================================*/}
                <input type="text" list="listData" />
                <datalist id='listData'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </datalist>



            </div>


            <h1>HELLOW WORLD</h1>
        </div >
    )
}

export default HTMLCSSReviewComponent