"use client";

import { OrderDataType } from "@/types";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";





export interface DataOrderTableType {
    orders: OrderDataType[];
    currentPage: number;
    totalPages: number;
    totalOrders: number;
};


export function DataOrderTable({
    orders,
    currentPage,
    totalPages,
    totalOrders,
}: DataOrderTableType) {

    return (
        <section>
            <section className="overflow-clip rounded-lg border border-slate-200">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-slate-100 text-slate-400 text-xs tracking-tight font-medium">
                            <TableHead>
                                <Checkbox/>
                            </TableHead>
                            <TableHead className="text-xs font-medium text-slate-400">N° do Contrato</TableHead>
                            <TableHead className="text-xs font-medium text-slate-400">Cidade/UF</TableHead>
                            <TableHead className="text-xs font-medium text-slate-400">Data de Agendamento</TableHead>
                            <TableHead className="text-xs font-medium text-slate-400">Horário de Agendamento</TableHead>
                            <TableHead className="text-xs font-medium text-slate-400">Contato</TableHead>
                            <TableHead className="text-xs font-medium text-slate-400">Status</TableHead>
                            <TableHead className="text-xs font-medium text-slate-400">Ação</TableHead>                        
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id} className="text-xs font-normal text-slate-600">
                                <TableHead>
                                    <Checkbox/>
                                </TableHead>
                                <TableHead className="text-slate-600 text-xs font-normal">{order.number}</TableHead>
                                <TableHead className="text-slate-600 text-xs font-normal">{order.local}</TableHead>
                                <TableHead className="text-slate-600 text-xs font-normal">{order.schedulingDate.toLocaleDateString()}</TableHead>
                                <TableHead className="text-slate-600 text-xs font-normal">{order.schedulingTime}</TableHead>
                                <TableHead className="text-slate-600 text-xs font-normal">{order.contact}</TableHead>
                                <TableHead className="text-slate-600 text-xs font-normal">{order.status}</TableHead>
                                <TableHead>
                                    <button className="text-blue-500">
                                        Editar
                                    </button>
                                </TableHead>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </section>
    )
}