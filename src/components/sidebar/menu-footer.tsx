"use client";

import { LucideIcon } from "lucide-react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Collapsible } from "../ui/collapsible";
import Link from "next/link";




export interface MenuFooterType {
    title: string;
    href: string;
    icon: LucideIcon;
    onClick?: () => void;
};



export function MenuFooter({ items }: { items: MenuFooterType[] }) {

    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item, index) => (
                    <Collapsible
                        asChild
                        key={index}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <Link href={item.href}>
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    onClick={item.onClick}
                                    className="data-[active=true]:bg-purple-300 data-[active=true]:text-purple-700
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
};