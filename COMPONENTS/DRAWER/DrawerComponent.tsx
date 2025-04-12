import { RiLoginBoxFill } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
'use client';
import React from 'react'
import { Drawer } from "vaul"
import DrawerFormComponent from '../FORM/DrawerFormComponent';


function DrawerComponent() {
    return (
        <Drawer.Root>
            <Drawer.Trigger className='w-full'>
                <h3 className='font-semibold text-4xl rounded text-emerald-700 hover:bg-emerald-900 hover:text-white duration-300 p-2  bg-zinc-900 border border-1-zinc-800 w-64 mx-auto flex items-center justify-center gap-2'><RiLoginBoxFill />LOGIN</h3>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/90" />
                <Drawer.Content className="bg-black/50 backdrop-blur-md h-[40em] fixed bottom-0 left-0 right-0 outline-none">
                    <div className=" py-2 border-t-2 border-zinc-800 text-center flex items-center justify-center bg-black">
                        <p className='mt-2 text-3xl font-bold text-zinc-200'>❤ WELCOME BACK </p>
                    </div>
                    <DrawerFormComponent />
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}

export default DrawerComponent