//^ RESPONSIVE PAGE =====================================================================================================================================
import { CarouselComponent } from "@/COMPONENTS/CAROUSEL/CarouselComponent"
import DrawerComponent from "@/COMPONENTS/DRAWER/DrawerComponent"
import NavBarComponent from "@/COMPONENTS/HEADER/NavBarComponent"
import ProductsWrapperComponent from "@/COMPONENTS/PRODUCTS/ProductsWrapperComponent"
import { Separator } from "@radix-ui/react-dropdown-menu"
import React, { useEffect, useState } from 'react'


// COMPONENT==== =====================================================================================================================================
function responsivePage() {

    return (
        <div className='w-full min-h-screen relative z-0'>
            <NavBarComponent />
            <CarouselComponent />
            <DrawerComponent />
            <Separator className="my-4 bg-zinc-400" />
            <ProductsWrapperComponent />
            <div id="OVERLAY" className="h-[2000px] w-full"></div>
        </div>
    )
}

export default responsivePage
