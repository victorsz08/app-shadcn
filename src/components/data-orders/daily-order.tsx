"use client";

import { OrderDataType } from "@/types";
import { Card, CardContent } from "../ui/card";
import { DataOrderTable } from "./data-order-table";



const dataDailyOrder: OrderDataType[] = [
    {
        id: "1",
        number: 1,
        local: "São Paulo/SP",
        schedulingDate: new Date(),
        schedulingTime: "10:00",
        status: "PENDENTE",
        price: 100,
        contact: "123456789",
        userId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        number: 1,
        local: "São Paulo/SP",
        schedulingDate: new Date(),
        schedulingTime: "10:00",
        status: "CONECTADO",
        price: 100,
        contact: "123456789",
        userId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "3",
        number: 1,
        local: "São Paulo/SP",
        schedulingDate: new Date(),
        schedulingTime: "10:00",
        status: "CANCELADO",
        price: 100,
        contact: "123456789",
        userId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "4",
        number: 1,
        local: "São Paulo/SP",
        schedulingDate: new Date(),
        schedulingTime: "10:00",
        status: "PENDENTE",
        price: 100,
        contact: "123456789",
        userId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];




export function DailyOrder() {


    return (
        <Card className="w-full">
            <CardContent>
                <DataOrderTable currentPage={1} totalOrders={10} totalPages={1} orders={dataDailyOrder}/>
            </CardContent>
        </Card>
    )
}