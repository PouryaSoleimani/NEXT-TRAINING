//^ FOOTER COMPONENT
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className='w-full absolute bottom-0  p-6 flex flex-col space-y-4 items-center justify-around border-t-8 border-black bg-zinc-900'>

            <div id="FOOTER__TOP__DIV" className={styles.FOOTER__BUTTOM__DIV}>
                FOOTER BUTTOM DIV
            </div>

            <ul className=' text-white text-4xl flex items-center justify-around space-x-8 bg-black p-2 rounded-xl'>
                <li className='hover:bg-zinc-900 duration-300 p-5 rounded-xl'>HOME</li>
                <li className='hover:bg-zinc-900 duration-300 p-5 rounded-xl'>ABOUT</li>
                <li className='hover:bg-zinc-900 duration-300 p-5 rounded-xl'>LOGIN</li>
            </ul>
            <ul className=' text-white text-4xl flex items-center justify-around space-x-8 bg-black p-2 rounded-xl'>
                <li className='hover:bg-zinc-900 duration-300 p-5 rounded-xl'>PRODUCTS</li>
                <li className='hover:bg-zinc-900 duration-300 p-5 rounded-xl'>SHOP</li>
                <li className='hover:bg-zinc-900 duration-300 p-5 rounded-xl'>EMPLOYEES</li>
            </ul>
        </div>
    )
}

export default Footer