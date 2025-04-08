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

    return (
        <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>
            <motion.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className='bg-black/80 backdrop-blur-lg p-6 sticky top-0 z-50 border-b border-gray-800' >
                <h1 className='text-4xl font-black text-white text-center'>
                    CSS Mastery
                </h1>
            </motion.header>

            <main className='container mx-auto px-4 py-12'>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-xl text-center mb-12 font-light tracking-wide text-gray-400'  >
                    Transform your web development journey
                </motion.p>

                <div className='space-y-16'>
                    <motion.section initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className='bg-gradient-to-r from-gray-900 to-black backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-800'    >
                        <h2 className='text-3xl font-bold mb-6 text-white'>
                            Essential Concepts
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {concepts.map((concept, index) => (
                                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`p-6 rounded-xl cursor-pointer transition-all duration-300                 ${activeCard === index ? 'bg-gray-800' : 'bg-black/40'}                 hover:bg-gray-800 border border-gray-700`} onClick={() => setActiveCard(index)}         >
                                    <h3 className='text-xl font-semibold mb-2 text-white'>{concept.title}</h3>
                                    <p className='text-gray-400 text-sm'>{concept.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} className='bg-gradient-to-r from-black to-gray-900 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-800'  >
                        <h2 className='text-3xl font-bold mb-6 text-white'>
                            Advanced Techniques
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {advancedTopics.map((topic, index) => (
                                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='p-6 rounded-xl bg-black/40 hover:bg-gray-800 border border-gray-700 cursor-pointer transition-all duration-300'    >
                                    <h3 className='text-xl font-semibold mb-2 text-white'>{topic.title}</h3>
                                    <p className='text-gray-400 text-sm'>{topic.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </main>
        </div>
    )
}

export default CCSReviewComponent