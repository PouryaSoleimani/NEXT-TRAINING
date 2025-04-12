import React from 'react'
import { Label } from "@/COMPONENTS/ui/label"
import { Switch } from "@/COMPONENTS/ui/switch"




function SwitchComponent() {
    return (
        <div className="flex items-center space-x-2 mt-10 bg-zinc-800 w-fit mx-auto text-white p-4">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    )
}

export default SwitchComponent
