//^ RESPONSIVE PAGE =====================================================================================================================================
import NavBarComponent from "@/COMPONENTS/HEADER/NavBarComponent"
import React from 'react'



function responsive() {
    return (
        <div className='w-screen min-h-screen relative z-0'>
            <NavBarComponent />
        </div>
    )
}

export default responsive
