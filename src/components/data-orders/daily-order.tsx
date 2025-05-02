"use client";

import { OrderDataType } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { DataOrderTable } from "./data-order-table";
import { Separator } from "../ui/separator";
import { useState, useEffect, useCallback } from "react";
import { ButtonLink } from "../link/button-link";
import { NotFoundOrders } from "../not-found/not-found-orders";

const dataDailyOrder: OrderDataType[] = [
    // {
    //     id: "1",
    //     number: 1,
    //     local: "São Paulo/SP",
    //     schedulingDate: new Date(),
    //     schedulingTime: "10:00",
    //     status: "PENDENTE",
    //     price: 100,
    //     contact: "123456789",
    //     userId: "1",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // },
    // {
    //     id: "2",
    //     number: 1,
    //     local: "São Paulo/SP",
    //     schedulingDate: new Date(),
    //     schedulingTime: "10:00",
    //     status: "CONECTADO",
    //     price: 100,
    //     contact: "123456789",
    //     userId: "1",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // },
    // {
    //     id: "3",
    //     number: 1,
    //     local: "São Paulo/SP",
    //     schedulingDate: new Date(),
    //     schedulingTime: "10:00",
    //     status: "CANCELADO",
    //     price: 100,
    //     contact: "123456789",
    //     userId: "1",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // },
    // {
    //     id: "4",
    //     number: 1,
    //     local: "São Paulo/SP",
    //     schedulingDate: new Date(),
    //     schedulingTime: "10:00",
    //     status: "PENDENTE",
    //     price: 100,
    //     contact: "123456789",
    //     userId: "1",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // },
];


export function DailyOrder() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadDailyOrders = useCallback(async (page: number) => {
        setIsLoading(true);
        setError(null);
    }, []);

    const handlePageChange = useCallback((newPage: number) => {
        loadDailyOrders(newPage);
    }, [loadDailyOrders]);

    const handleOrdersDeleted = useCallback(async (orderIds: string[]) => {

    }, [currentPage, loadDailyOrders]);

    useEffect(() => {
        loadDailyOrders(currentPage);
    }, [loadDailyOrders, currentPage]);

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
                {dataDailyOrder.length > 0 ? (
                    <DataOrderTable
                        orders={dataDailyOrder}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalOrders={totalOrders}
                        onPageChange={handlePageChange}
                        onOrdersDeleted={handleOrdersDeleted}
                    />
                ) : (
                    <NotFoundOrders />
                )}
            </CardContent>
        </Card>
    );
}