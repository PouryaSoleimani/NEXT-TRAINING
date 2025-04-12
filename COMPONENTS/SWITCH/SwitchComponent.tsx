import React, { useState } from 'react'
import { Label } from "@/COMPONENTS/ui/label"
import { Switch } from "@/COMPONENTS/ui/switch"
import { toast } from 'sonner'




function SwitchComponent() {

    const [isDark, setIsDark] = useState(false)

    function darkThemeHandler() {
        setIsDark(prev => !prev)
        console.info("HELLO")
        toast.success("Theme Changed")
    }


    return (
        <section>
            <div className="flex items-center space-x-2 mt-10 bg-zinc-800 w-fit mx-auto text-white px-3 py-2.5 rounded">
                <Switch id="Dark-mode" value={isDark ? "on" : "off"} onCheckedChange={darkThemeHandler} />
                <Label htmlFor="Dark-mode">Dark Mode</Label>
            </div>
        </section>
    )
}

export default SwitchComponent
