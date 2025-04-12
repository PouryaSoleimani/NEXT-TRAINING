import React from 'react'
import Skeleton from "@/COMPONENTS/ui/skeleton"


function SkeletonComponent() {
    return (

        <section className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </section>
    )
}

export default SkeletonComponent
