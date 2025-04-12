//^ RESPONSIVE PAGE =====================================================================================================================================
import { CarouselComponent } from "@/COMPONENTS/CAROUSEL/CarouselComponent";
import DrawerComponent from "@/COMPONENTS/DRAWER/DrawerComponent";
import NavBarComponent from "@/COMPONENTS/HEADER/NavBarComponent";
import { PaginationComponent } from "@/COMPONENTS/PAGINATION/PaginationComponent";
import ProductsWrapperComponent from "@/COMPONENTS/PRODUCTS/ProductsWrapperComponent";
import SonnerComponent from "@/COMPONENTS/SONNER/SonnerComponent";
import { TabsComponent } from "@/COMPONENTS/TABS/TabsComponent";
import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";

// COMPONENT==== =====================================================================================================================================
function responsivePage() {
  return (
    <section className="w-full min-h-screen relative z-0">
      <NavBarComponent />
      <CarouselComponent />
      <Separator className="text-white bg-zinc-800 h-0.5 w-2/3 mx-auto my-5" />
      <DrawerComponent />
      <Separator className="text-white bg-zinc-800 h-0.5 w-2/3 mx-auto my-5" />
      <ProductsWrapperComponent />
      <SonnerComponent />
      <TabsComponent />
      <PaginationComponent />
      <div id="OVERLAY" className="h-[1500px] w-full"></div>
    </section>
  );
}

export default responsivePage;
