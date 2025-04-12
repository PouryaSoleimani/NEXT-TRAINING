"use client"
import { toast, Toaster } from "sonner"
import { Button } from "@/COMPONENTS/ui/button"



function SonnerComponent() {
    function toastHandler() {
        toast("Event has been created", { description: "Sunday, December 03, 2023 at 9:00 AM", action: { label: "Undo", onClick: () => console.log("Undo"), }, })
    }


    return (
        <>
            <Toaster />
            <div className="w-full flex items-center justify-center py-5">
                <Button
                    variant="outline"
                    onClick={() => toastHandler}
                    className="text-white  font-semibold px-4 py-8 leading-tight tracking-tighter m-0 rounded border-zinc-800 flex text-base"
                >
                    Show Toast
                </Button>
            </div>
        </>
    )
}

export default SonnerComponent
