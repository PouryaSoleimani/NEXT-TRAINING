import { Button } from "@/COMPONENTS/ui/button"
import { Input } from "@/COMPONENTS/ui/input"
import { Label } from "@/COMPONENTS/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/COMPONENTS/ui/popover"

export function PopOverComponent() {
    return (
        <section className="flex items-center justify-center mt-10">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="secondary" className="text-white rounded bg-zinc-900 hover:bg-zinc-800 duration-300 focus:bg-zinc-700 active:bg-zinc-600">Open popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 text-white rounded mt-1 bg-black/70 backdrop-blur-md">
                    <div className="grid gap-4">

                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                        </div>

                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="width">Width</Label>
                                <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxWidth">Max. width</Label>
                                <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="height">Height</Label>
                                <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxHeight">Max. height</Label>
                                <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
                            </div>
                        </div>

                    </div>
                </PopoverContent>
            </Popover>
        </section>
    )
}
