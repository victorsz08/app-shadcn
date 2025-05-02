"use client";

import { OrderDataType } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { ButtonLink } from "../link/button-link";
import { NotFoundOrders } from "../not-found/not-found-orders";



export function DailyOrder() {


    return (
        <Card className="w-full">
            <CardHeader className="w-full flex justify-between items-center">
                <section>
                    <CardTitle className="text-lg font-semibold text-slate-600 tracking-tighter">
                        Pedidos recentes
                    </CardTitle>
                    <CardDescription className="text-xs font-light text-slate-600 tracking-tight">
                        Pedidos com instalação prevista para hoje
                    </CardDescription>
                </section>
            <ButtonLink href="/contratos" icon>
                    Ver todos os pedidos
                </ButtonLink>
            </CardHeader>
            <CardContent>
                <Separator className="my-2"/>
             
            </CardContent>
        </Card>
    );
}