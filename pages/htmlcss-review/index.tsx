// ^ HTML & CSS REVIEW =======================================================================================================================================================
import Link from 'next/link'
import React from 'react'

const HTMLCSSReviewComponent = () => {

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const selectedValue = formData.get('select');
        console.info(selectedValue)
    }

    // RETURN =================================================================================================================================================================
    return (

        <div className='p-10'>

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

            {/*  DOWNLOAD LINK ============================================================================================================================================== */}
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

            {/* PICTURE ==============================================================================================================================================*/}
            <picture>
                <source srcSet="/NEW___PICS/CARTOON____BG.jpg" type="image/webp" media="(min-width: 600px)" />
                <source srcSet="/NEW___PICS/404_page_cover.jpg" type="image/webp" media="(min-width: 400px)" />
                <img src="/NEW___PICS/not-found.png" alt="Responsive image" />
            </picture>

            {/* TABLE  ==============================================================================================================================================*/}
            <hr />
            <h3 className='text-center font-bold'>MY TABLE</h3>

            <table className='w-1/2 mx-auto border' style={{ fontFamily: "BYekan+", fontSize: "16px ," }}>

                <thead>
                    <tr>
                        <th className='border text-center'>#</th>
                        <th className='border text-center'>FIRST NAME</th>
                        <th className='border text-center'>LAST NAME</th>
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

            {/* LISTS ==============================================================================================================================================*/}
            <ol type='1' start={10}>
                <li>content</li>
                <li>content</li>
                <li>content</li>
            </ol>

            <details>
                <summary className='btn btn-primary'>READ MORE</summary>
                <p>WORLD Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad quos est iste voluptas voluptatum accusamus tempore consequatur aliquid maxime reprehenderit, doloribus rem id enim earum voluptatem eius. Id, ipsum.</p>
            </details>

            <abbr title="HELLO WORLD">HW</abbr>


            <div>
                <label htmlFor="NAME">NAME : </label>
                <input type="text" name="NAME" id="NAME" className='text-black p-2' autoComplete='on' />
                <label htmlFor="EMAIL">EMAIL : </label>
                <input type="text" name="NAME" id="EMAIL" className='text-black p-2' />
                <br />
                {/* GENDER ==================================================================================================================================================*/}
                <label htmlFor="male">male</label>
                <input type="radio" name="gender" id="male" value="male" className='text-white' />
                <br />
                <label htmlFor="female">female</label>
                <input type="radio" name="gender" id="female" value="female" className='text-white' />
                <br />
                <label htmlFor="prefer">prefer not to say</label>
                <input type="radio" name="gender" id="prefer" value="prefer not to say" className='text-white' />
                {/* name||| id ||| value ||| auto complete ||||| target="_blank" */}




                <form onSubmit={event => submitHandler(event)}>

                    {/* SELECT BOX ==============================================================================================================================================*/}
                    <select name="select" id="select" className='bg-black'>
                        <option value="1" selected>Please Select one</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                    </select>
                    <button type="submit">SEND</button>


                    {/* FIELDSET ================================================================================================================================================*/}
                    <fieldset>
                        <legend>TITLE</legend>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <button>SEND</button>
                    </fieldset>


                    {/* DATA LIST ================================================================================================================================================*/}
                    <input type="text" list="listData" />
                    <datalist id='listData'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </datalist>
                </form>


            </div>

        </div >
    )
}

export default HTMLCSSReviewComponent