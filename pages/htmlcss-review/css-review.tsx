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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia deserunt commodi eligendi in ut vero, nobis quaerat, libero illum magnam non blanditiis neque ipsa exercitationem! Officiis itaque sit iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eaque culpa obcaecati explicabo nisi repellat temporibus, suscipit quia impedit aperiam velit voluptatum officiis laboriosam. Enim dignissimos ut natus odio laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex blanditiis, nesciunt voluptas rem assumenda unde adipisci minima ullam quasi tempore doloremque aspernatur sunt explicabo aliquam, molestias numquam fugit odio!
                    </p>
                </div>
            </main>
        </div>
    )
}

export default CCSReviewComponent