"use client";


import { usePathname } from "next/navigation";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Collapsible } from "../ui/collapsible";
import Link from "next/link";
import { LucideIcon } from "lucide-react";




export interface MenuItemType {
    title: string;
    href: string;
    icon: LucideIcon;
    target?: React.HTMLAttributeAnchorTarget;
};


export function MenuItems({ items }: { items: MenuItemType[] }) {
    const pathname = usePathname();


    return (
        <SidebarGroup>
            <SidebarGroupLabel>Navegação</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item, index) => (
                    <Collapsible
                        asChild
                        key={index}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <Link href={item.href} target={item.target}>
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    isActive={pathname === item.href}
                                    className="data-[active=true]:bg-purple-300 data-[active=true]:text-purple-900
                                    cursor-pointer text-slate-500 font-normal"
                                >
                                    <item.icon />
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}