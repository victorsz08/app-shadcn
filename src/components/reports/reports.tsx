"use client";

import { ChartNoAxesColumnIncreasing, HandCoins, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { formatCurrency, formatPercent } from "@/utils/utils";



interface CardReportType {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    description: string;
};


export function CardReport({ title, icon, children, description }: CardReportType) {
    return (
        <Card className="w-full border-slate-200 gap-2 shadow-none bg-slate-50">
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-normal text-slate-500 tracking-tighter">
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <span className="text-2xl font-bold text-slate-700 tracking-tighter">
                    {children}
                </span>
            </CardContent>
            <CardFooter>
                <CardDescription className="text-xs font-light text-slate-500">
                    {description}
                </CardDescription>
            </CardFooter>
        </Card>
    );
};


export function Reports() {


    return (
        <section className="flex gap-4 w-full">
            <CardReport
            title="Faturamento"
            icon={
                <div className="bg-blue-100 text-blue-600 p-2 rounded-sm">
                    <HandCoins size={16}/>
                </div>
            }
            description="Valor do faturamento no período atual"
        >
            {formatCurrency(3228.70)}
        </CardReport>
        <CardReport
            title="Vendas"
            icon={
                <div className="bg-orange-100 text-orange-600 p-2 rounded-sm">
                    <Handshake size={16}/>
                </div>
            }
            description="Vendas realizadas no período atual"
        >
            {48}
        </CardReport>
        <CardReport
            title="Vendas"
            icon={
                <div className="bg-green-100 text-green-600 p-2 rounded-sm">
                    <ChartNoAxesColumnIncreasing size={16}/>
                </div>
            }
            description="Percentual de intalação no período atual"
        >
            {formatPercent(0.88)}
        </CardReport>
        </section>
    )
}