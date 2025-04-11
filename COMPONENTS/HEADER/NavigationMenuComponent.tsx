"use client"
import { IoLogoApple } from "react-icons/io";
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/COMPONENTS/ui/navigation-menu"



// COMPONENT =======================================================================================================================================
const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
]

export function NavigationMenuComponent() {
    return (
        <NavigationMenu className="hidden sm:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger> Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-1 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink>
                                    <a className="flex h-full w-full hover:bg-zinc-800 duration-300 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md" href="/"  >
                                        <div className="mb-2 mt-4 text-lg font-medium flex items-center justify-start gap-x-1">
                                            <IoLogoApple className="w-6 h-6" />  shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components built with Radix UI and
                                            Tailwind CSS.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col w-[300px] gap-3 p-1 md:w-[300px] lg:w-[300px] ">
                            {components.map((component) => (
                                <ListItem key={component.title} title={component.title} href={component.href}    >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref className="font-bold">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>  Documentation  </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {


    return (
        <li>
            <NavigationMenuLink asChild>
                <a ref={ref} className={cn("block hover:bg-zinc-800 duration-300 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground", className)}       {...props}   >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground"> {children} </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
