import React, { useState } from 'react'
import { motion } from 'framer-motion'

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

    // RETURN ============================================================================================================================================================
    return (
        <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>

            <motion.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className='bg-black/80 backdrop-blur-lg p-6 sticky top-0 z-50 border-b border-gray-800' >
                <h1 className='text-4xl font-black text-white text-center'> CSS REVIEW </h1>
            </motion.header>

            <main className='container mx-auto px-4 py-12'>
                <div id="TEXT__INDENT">
                    <h2 className='text-center bg-slate-700 w-full'>TEXT INDENT</h2>
                    <br />
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
            </main>

        </div>
    )
}

export default CCSReviewComponent