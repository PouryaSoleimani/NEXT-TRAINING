
import React from 'react'
import { Label } from "@/COMPONENTS/ui/label"
import { RadioGroup, RadioGroupItem } from "@/COMPONENTS/ui/radio-group"


function RadioGroupComponent() {
    return (
        <section className='flex items-center justify-center mt-10 text-white'>
            <RadioGroup defaultValue="compact">
                <div className="flex items-center space-x-2 text-white">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center space-x-2 text-white">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2 text-white">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                </div>
            </RadioGroup>
        </section>

    )
}

export default RadioGroupComponent
