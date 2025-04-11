import * as React from "react"

"use client"
import { Card, CardContent } from "@/COMPONENTS/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/COMPONENTS/ui/carousel"
import Image from "next/image"




export function CarouselComponent() {
    return (

        <section className="w-full">
            <Carousel opts={{ align: "start", loop: true }} className="w-full p-3 sm:p-5 max-w-3xl mx-auto">
                <CarouselContent>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-0">
                                        <Image width={230} height={230} src={`/NEW___PICS/PRODUCTS/product___${index + 1}.webp`} alt="product--image" className="rounded" />
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
