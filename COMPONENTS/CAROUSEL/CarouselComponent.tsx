import * as React from "react"

"use client"
import { Card, CardContent } from "@/COMPONENTS/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/COMPONENTS/ui/carousel"
import Image from "next/image"



//  COMPOENENT ==================================================================================================================================
export function CarouselComponent() {
    return (

        <section className="w-full">
            <Carousel opts={{ align: "start", loop: true, }} className="w-full p-5 sm:p-3 max-w-max mx-auto">
                <CarouselContent>

                    {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <div className="p-1">
                                <Card className="w-full h-full">
                                    <CardContent className="flex aspect-square items-center justify-center p-0 w-full h-full">
                                        <Image width={800} height={800} src={`/NEW___PICS/PRODUCTS/product___${index + 1}.webp`} alt="product--image" className="rounded w-full h-full object-cover" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
