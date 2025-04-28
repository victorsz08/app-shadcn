"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Home } from "lucide-react";






export function BreadcrumbRoot() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter((path) => path !== "");

    return (
        <Breadcrumb>
            <BreadcrumbList className="text-slate-400">
                <BreadcrumbItem>
                    <Home size={12} className="text-slate-400" />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {segments.map((segment, index) => (
                    <div key={index}>
                        <BreadcrumbLink key={index}
                            className={`${pathname.endsWith(segment) ? "text-slate-800" : "text-slate-400"}
                                text-xs cursor-pointer`}>
                            {segment.charAt(0).toUpperCase() + segment.slice(1)}
                        </BreadcrumbLink>
                        {index < segments.length - 1 && <BreadcrumbSeparator />}
                    </div>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}