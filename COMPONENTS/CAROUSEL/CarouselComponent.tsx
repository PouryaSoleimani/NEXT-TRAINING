import * as React from "react"

"use client"
import { Card, CardContent } from "@/COMPONENTS/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/COMPONENTS/ui/carousel"




export function CarouselComponent() {
    return (

        <section className="w-full">
            <Carousel opts={{ align: "start", }} className="w-full p-3 sm:p-5 max-w-3xl mx-auto">
                <CarouselContent>
                    {Array.from({ length: 15 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <p className="text-3xl font-semibold">{index + 1}</p>
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
