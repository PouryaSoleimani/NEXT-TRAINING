//^ RESPONSIVE PAGE =====================================================================================================================================
import { CarouselComponent } from "@/COMPONENTS/CAROUSEL/CarouselComponent"
import DrawerComponent from "@/COMPONENTS/DRAWER/DrawerComponent"
import NavBarComponent from "@/COMPONENTS/HEADER/NavBarComponent"
import React, { useEffect, useState } from 'react'


// COMPONENT==== =====================================================================================================================================
function responsivePage() {

    return (
        <div className='w-full min-h-screen relative z-0'>
            <NavBarComponent />
            <CarouselComponent />
            <DrawerComponent />
            <div id="OVERLAY" className="h-[2000px] w-full"></div>
        </div>
    )
}

export default responsivePage
