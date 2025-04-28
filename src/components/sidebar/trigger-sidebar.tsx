"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";





export function TriggerSidebar() {
    const { toggleSidebar } = useSidebar();

    return (
        <Button 
            variant="outline" 
            className="text-slate-600 border-none w-fit cursor-pointer"
            onClick={toggleSidebar}
        >
            <Menu size={24}/>
        </Button>
    )
};