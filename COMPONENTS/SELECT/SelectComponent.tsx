import * as React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/COMPONENTS/ui/select"


function SelectComponent() {
    return (
        <section className="flex items-center justify-center mt-10 text-white">
            <Select>
                <SelectTrigger className="w-[320px] text-white rounded bg-zinc-900 hover:bg-zinc-800 duration-300">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent className="text-white bg-black/70 backdrop-blur-md">
                    <SelectGroup>
                        <SelectLabel className="bg-zinc-900 border-b text-center font-semibold py-3">Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </section>
    )
}

export default SelectComponent
