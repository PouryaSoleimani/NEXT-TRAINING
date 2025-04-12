
import React from 'react'
import { Label } from "@/COMPONENTS/ui/label"
import { RadioGroup, RadioGroupItem } from "@/COMPONENTS/ui/radio-group"


function RadioGroupComponent() {
    return (

        <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
            </div>
        </RadioGroup>

    )
}

export default RadioGroupComponent
