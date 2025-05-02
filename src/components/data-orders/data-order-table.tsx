"use client";

import { OrderDataType } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { MenuOrder } from "../menu-order/menu-order";
import { format } from "date-fns";

interface DataOrderTableType {
  data: OrderDataType[];
  currentPage: number;
  totalPages: number;
  totalOrders: number;
  onPageChange: (page: number) => void;
  onOrdersDeleted: (deletedOrderIds: string[]) => void;
  isLoading?: boolean;
  error?: string;
}

export function DataOrderTable({
  data,
  currentPage,
  totalPages,
  totalOrders,
  onPageChange,
  onOrdersDeleted,
  isLoading,
  error,
}: DataOrderTableType) {
  return (
    <section>
      <section className="border border-slate-200 rounded-md overflow-clip">
        <Table>
          <TableHeader>
            <TableRow className="text-xs text-slate-400 font-medium">
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead>N° do Contrato</TableHead>
              <TableHead>Cidade/UF</TableHead>
              <TableHead>Data de Agendamento</TableHead>
              <TableHead>Horário de Agendamento</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{order.number}</TableCell>
                <TableCell>{order.local}</TableCell>
                <TableCell>
                  {format(order.schedulingDate, "dd/MM/yyyy")}
                </TableCell>
                <TableCell>{order.schedulingTime}</TableCell>
                <TableCell>{order.contact}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <MenuOrder order={order} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </section>
  );
}
