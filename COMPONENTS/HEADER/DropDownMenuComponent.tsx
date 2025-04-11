import { BiMenu } from "react-icons/bi";
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/COMPONENTS/ui/dropdown-menu"
import { Button } from '../ui/button'

function DropDownMenuComponent() {
    return (

        <DropdownMenu>

            <DropdownMenuTrigger asChild className="sm:hidden z-50">
                <Button variant="secondary" className="rounded px-3 py-2 bg-black text-white"><BiMenu /></Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 mr-3 rounded bg-black/90 backdrop-blur-lg ">
                <DropdownMenuLabel className="text-white bg-zinc-700">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-blue-900" />

                <DropdownMenuGroup>
                    <DropdownMenuItem> Profile  </DropdownMenuItem>
                    <DropdownMenuItem> Billing </DropdownMenuItem>
                    <DropdownMenuItem> Settings  </DropdownMenuItem>
                    <DropdownMenuItem> Keyboard shortcuts </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-blue-900" />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-blue-900" />
                <DropdownMenuItem>    Log out  </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownMenuComponent
