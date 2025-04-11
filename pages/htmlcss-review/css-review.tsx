import { FaInstagram, FaUserAlt } from "react-icons/fa";
// ^ CSS REVIEW PAGE ============================================================================================================================================================================================
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, MessageCircleIcon, Phone, Star } from 'lucide-react'
import Image from 'next/image'
import InboxIconComponent from '@/COMPONENTS/ICONS/InboxIconComponent'
import UserIconComponent from '@/COMPONENTS/ICONS/UserIconComponent'
import CartIconComponent from '@/COMPONENTS/ICONS/CartIconComponent'
import SettingsIconComponent from '@/COMPONENTS/ICONS/SettingsIconComponent'




const CCSReviewComponent = () => {

    const [activeCard, setActiveCard] = useState<number | null>(null)

    const concepts = [
        { title: 'Selectors', description: 'Target HTML elements with precision' },
        { title: 'Box Model', description: 'Understanding content, padding, border, and margin' },
        { title: 'Flexbox', description: 'Create flexible and responsive layouts' }
    ]

    const advancedTopics = [
        { title: 'CSS Grid', description: 'Master two-dimensional layouts' },
        { title: 'Animations', description: 'Bring your website to life with smooth transitions' },
        { title: 'Media Queries', description: 'Build responsive designs for all devices' }
    ]


    const [isShow, setIsShow] = useState(false)


    // RETURN ============================================================================================================================================================
    return (
        <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>

            <motion.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className='bg-black/80 backdrop-blur-lg p-6 sticky top-0 z-50 border-b border-gray-800' >
                <h1 className='text-4xl font-black text-white text-center'> CSS REVIEW </h1>
            </motion.header>

            {/* STICKY DIV   */}
            <div className="STICKY">
                <nav className='flex items-center justify-between mt-10 border-2 p-1 border-zinc-500 rounded w-full px-6 bg-zinc-200'>
                    <Image src='/next.svg' width={150} height={20} alt='logo' />
                    <div id="ICONS" className='flex'>
                        <InboxIconComponent />
                        <UserIconComponent />
                        <CartIconComponent />
                        <SettingsIconComponent />
                    </div>
                </nav>
            </div>

            <main className='container mx-auto px-4 py-12'>
                <div id="TEXT__INDENT">
                    <h2 className='text-center bg-slate-700 w-full rounded'>TEXT INDENT</h2>
                    <br />
                    <p className='font-[LALEZAR]  text-justify indent-16 font-thin' dir='rtl'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
            </main>
            <ul className='myOL flex flex-col gap-y-1'>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <button className='px-4 py-2 rounded bg-red-900 text-4xl font-bold z-20 border w-fit mx-auto' onClick={() => setIsShow(prev => !prev)}>{!isShow ? "SHOW" : "HIDE"}</button>
            </ul>


            {/* MESSAGE AND PHONE */}
            <div id="POSITION">
                <div className="RELATIVE">
                    <div className="ABSOLUTE"><Star /></div>
                </div>
                <div className="MESSAGE"><MessageCircleIcon /></div>
                <div className="PHONE"><Phone /></div>

                {/* MESSAGE BOX */}
                <div className={` ${!isShow ? "hidden" : "ADDVERTISEMENT"}`}>
                    <div className="ADDVERSTSEMENT__BOX">THIS IS A MESSAGE</div>
                </div>

                {/* CHECKBOX */}
                <div className='w-full flex flex-col gap-y-5 items-center justify-center mt-10'>
                    <input type="checkbox" className='CHECKBOX mx-auto' />
                    <p className='CHECKBOX__P'>ITEM CHECKED</p>
                </div>


                {/* PSEUDO CLASSES */}
                <ul>
                    <li className="item">ITEM</li>
                    <li className="item item-delete">ITEM</li>
                    <li className="item">ITEM</li>
                    <li className="item">ITEM</li>
                    <li className="item">ITEM</li>
                    <li className="item">ITEM تومان</li>
                </ul>

                <div className="flex items-center justify-center">
                    <input type="email" id="INPUT" required placeholder="INPUT" className="px-3 py-2 rounded mx-auto text-2xl text-black" />
                </div>

                {/* BEFORE AND AFTER */}
                <div id="BOX1"></div>
                <div id="BOX2"><p id="PRICE">230/000</p></div>
                <div className="flex flex-col gap-y-4 w-fit">
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <input type="email" name="" id="" />

                    <a href="#">HOME</a>
                    <a href="https://github.com">GITHUB</a>
                    <a href="https://linkedin.com">LINKEDIN</a>
                    <a href="google.com">GOOGLE</a>
                    <a href="google.com">عنوان</a>
                </div>

                <div id="TEXT__WRAPPER">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente, corrupti officiis tempore illo asperiores error quasi, amet soluta consectetur explicabo eaque animi rerum suscipit ipsum! Eaque magnam qui sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maxime fugiat ipsa laboriosam quo totam assumenda possimus minima dolorum aspernatur. Fuga incidunt earum nulla quisquam odit voluptatem, distinctio est officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium inventore mollitia quae sequi saepe alias eos odio minima et! Adipisci perspiciatis aperiam placeat! Harum ab placeat illo autem quos?</p>
                </div>
                <p className="CLAMP">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, beatae aliquam. Temporibus modi consequuntur eaque animi obcaecati molestiae possimus nisi, optio voluptate expedita eligendi voluptatem, velit, ullam adipisci ab accusantium? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis officia, obcaecati impedit, quis placeat, quos atque ducimus illo adipisci beatae sequi. Illum sequi unde quasi! Eius rerum reprehenderit commodi accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis voluptatibus distinctio veritatis, deserunt cumque sequi eius nisi corrupti, quo consequuntur ipsum, neque repellat consectetur at assumenda? Temporibus, dxxicta alias!</p>
                <p className="RED">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi distinctio rerum sunt consectetur doloremque maiores? Enim qui debitis consequatur vero sequi at facere nam perspiciatis iusto, atque explicabo minus accusamus.</p>

                <div id="GRADIENT____BOX"><FaInstagram className="w-64 h-64" /></div>










                <div className="OVERLAY"></div>
            </div>
        </div>
    )
}

export default CCSReviewComponent