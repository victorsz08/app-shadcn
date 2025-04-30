"use client";

import { OrderDataType } from "@/types";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { MenuOrder } from "../menu-order/menu-order";
import { StatusBadge } from "../status-badge/status-badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface DataOrderTableType {
  orders: OrderDataType[];
  currentPage: number;
  totalPages: number;
  totalOrders: number;
}

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
                <Checkbox />
              </TableHead>
              <TableHead className="text-xs font-medium text-slate-400">
                N° do Contrato
              </TableHead>
              <TableHead className="text-xs font-medium text-slate-400">
                Cidade/UF
              </TableHead>
              <TableHead className="text-xs font-medium text-slate-400">
                Data de Agendamento
              </TableHead>
              <TableHead className="text-xs font-medium text-slate-400">
                Horário de Agendamento
              </TableHead>
              <TableHead className="text-xs font-medium text-slate-400">
                Contato
              </TableHead>
              <TableHead className="text-xs font-medium text-slate-400">
                Status
              </TableHead>
              <TableHead className="text-xs font-medium text-slate-400 text-center w-[80px]">
                Ação
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="text-xs font-normal text-slate-600"
              >
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead className="text-slate-600 text-xs font-normal">
                  {order.number}
                </TableHead>
                <TableHead className="text-slate-600 text-xs font-normal">
                  {order.local}
                </TableHead>
                <TableHead className="text-slate-600 text-xs font-normal">
                  {format(order.schedulingDate, "dd/MM/yyyy", { locale: ptBR })}
                </TableHead>
                <TableHead className="text-slate-600 text-xs font-normal">
                  {order.schedulingTime}
                </TableHead>
                <TableHead className="text-slate-600 text-xs font-normal">
                  {order.contact}
                </TableHead>
                <TableHead className="text-slate-600 text-xs font-normal">
                  <StatusBadge status={order.status} />
                </TableHead>
                <TableHead className="justify-center flex items-center w-fit">
                  <MenuOrder order={order} />
                </TableHead>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <Separator className="my-3" />
      <section className="flex items-center justify-between px-2 py-2">
        <span className="text-xs font-light text-slate-600 tracking-tighter">
          Mostrando {orders.length} de {totalOrders} pedidos
        </span>
        <section className="flex items-center gap-2 justify-center">
          <Button
            className="cursor-pointer"
            variant="outline"
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="w-4 h-4" />
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            disabled
            variant="outline"
            className="text-sm font-semibold text-slate-600 border-slate-300"
          >
            {currentPage}
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="w-4 h-4" />
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </section>
      </section>
    </section>
  );
}
