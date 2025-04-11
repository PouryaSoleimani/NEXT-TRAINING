//^ RESPONSIVE PAGE =====================================================================================================================================
import NavBarComponent from "@/COMPONENTS/HEADER/NavBarComponent"
import React, { useEffect, useState } from 'react'



function responsive() {

    const [isScroll, setIsScroll] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress percentage
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(Math.round(progress))
            console.info(progress)
            // Set scroll state if scrolled more than 50px
            setIsScroll(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className='w-screen min-h-screen relative z-0'>
            <NavBarComponent />
        </div>
    )
}

export default responsive
