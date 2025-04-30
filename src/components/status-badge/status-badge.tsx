"use client";

import { CheckCircle, Clock, LucideIcon, XCircle } from "lucide-react";
import { Badge } from "../ui/badge";





export interface StatusBadgeType {
    status: "PENDENTE" | "CANCELADO" | "CONECTADO";
};


export function StatusBadge({ status }: StatusBadgeType) {
    let classsesName: string;
    let Icon: LucideIcon;
    let text: string;

    if(status === "PENDENTE") {
        classsesName = "bg-orange-200 text-orange-600";
        text = "Pendente";
        Icon = Clock;
    } else if(status === "CANCELADO") {
        classsesName = "bg-red-200 text-red-600";
        text = "Cancelado";
        Icon = XCircle;
    } else {
        classsesName = "bg-green-200 text-green-600";
        text = "Conectado";
        Icon = CheckCircle;
    };

    return (
        <Badge className={`${classsesName} text-[11px] tracking-tight font-semibold flex items-center gap-1`}>
            <Icon className={`w-3 h-3 ${classsesName}`}/>
            {text}
        </Badge>
    )
}