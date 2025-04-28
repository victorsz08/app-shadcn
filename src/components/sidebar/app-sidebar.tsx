"use client";

import Image from "next/image";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";
import { MenuItems, MenuItemType } from "./menu-item";
import { ChartNoAxesColumn, Clipboard, ExternalLink, Home, LogOut, Notebook, Settings, ShieldCheck, User, UserCheck, Wallet } from "lucide-react";
import { MenuFooter, MenuFooterType } from "./menu-footer";
import { Separator } from "../ui/separator";


interface SidebarType extends React.ComponentProps<typeof Sidebar> { };

const menuItems: MenuItemType[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: Home
    },
    {
        title: "Contratos",
        href: "/contratos",
        icon: Clipboard
    },
    {
        title: "Notas",
        href: "/notas",
        icon: Notebook
    },
    {
        title: "Relatórios",
        href: "/relatorios",
        icon: ChartNoAxesColumn
    },
    {
        title: "Situação CPF",
        href: "https://www.situacaocpf.com.br/",
        icon: UserCheck,
        target: "_blank"
    },
    {
        title: "Situação CNPJ",
        href: "https://www.situacaocpf.com.br/",
        icon: ShieldCheck,
        target: "_blank"
    },
    {
        title: "Negocia Fácil Claro",
        href: "https://www.situacaocpf.com.br/",
        icon: Wallet,
        target: "_blank"
    },
    {
        title: "Site Oficial da Claro",
        href: "https://www.situacaocpf.com.br/",
        icon: ExternalLink,
        target: "_blank"
    },
];

const menuFooterItems: MenuFooterType[] = [
    {
        title: "Configurações",
        href: "/configuracoes",
        icon: Settings
    },
    {
        title: "Perfil",
        href: "/perfil",
        icon: User
    },
    {
        title: "Sair",
        href: "/sair",
        icon: LogOut
    }
];

export function AppSidebar({ ...props }: SidebarType) {

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <div className="flex items-center py-3 gap-2">
                    <Image src="icon.svg" alt="Logo" width={32} height={32} />
                    <span
                        className="text-xl font-semibold text-slate-600 tracking-tight
                            group-data-[collapsible=icon]:hidden"
                    >
                        Notetools
                    </span>
                </div>
            </SidebarHeader>
            <Separator />
            <SidebarContent>
                <MenuItems items={menuItems} />
            </SidebarContent>
            <Separator />
            <SidebarFooter>
                <MenuFooter items={menuFooterItems} />
            </SidebarFooter>
        </Sidebar>
    )
}