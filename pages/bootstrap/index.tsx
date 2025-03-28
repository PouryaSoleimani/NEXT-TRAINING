//^ BOOTSTRAP TRAINING PAGE =====================================================================================================================
import Footer from '@/COMPONENTS/FOOTER/Footer'
import React from 'react'

const BootstrapTrainingPage = () => {
    return (

        <section className='h-screen overflow-hidden flex flex-col p-0 items-stretch m-0'>
            <div>
                <h1 className='bg-violet-800 text-white p-10 text-6xl font-extrabold text-center capitalize'>BOOTSTRAP TRAINING PAGE</h1>
            </div>
            <div className='p-10'>
                <ul>
                    <li className='alert alert-primary'>FIRST</li>
                    <li className='alert alert-secondary'>SECOND</li>
                    <li className='alert alert-warning'>THIRD</li>
                    <li className='alert alert-danger'>FOURTH</li>
                    <li className='alert alert-success'>FIFTH</li>
                </ul>
            </div>
            <Footer />
        </section>
        
    )
}

export default BootstrapTrainingPage