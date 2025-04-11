'use client';
import React from 'react'
import { Drawer } from 'vaul';
import { Button } from "@/COMPONENTS/ui/button"


function DrawerComponent() {
    return (
        <Drawer.Root>
            <Drawer.Trigger className='w-full'>
                <Button type='submit' variant="secondary" className='font-semibold text-xl rounded text-white py-4 bg-zinc-900 border border-1-zinc-800'>Open Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/90" />
                <Drawer.Content className="bg-zinc-900 h-[30em] fixed bottom-0 left-0 right-0 outline-none">
                    <div className=" py-2 border-t-2 border-zinc-800 text-center flex items-center justify-center bg-black">
                        <p className='mt-2 text-3xl font-bold text-zinc-200'>FORM</p>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}

export default DrawerComponent