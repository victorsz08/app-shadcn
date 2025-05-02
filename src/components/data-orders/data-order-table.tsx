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
import { StatusBadge } from "../status-badge/status-badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Trash2,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState, useCallback, useMemo } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { CreateOrderForm } from "../forms/create-order";

export interface DataOrderTableProps {
  orders: OrderDataType[];
  currentPage: number;
  totalPages: number;
  totalOrders: number;
  onPageChange: (page: number) => void;
  onOrdersDeleted: (deletedOrderIds: string[]) => void;
  isLoading?: boolean;
  error?: string;
}

export const DataOrderTable = ({
  orders,
  currentPage,
  totalPages,
  totalOrders,
  onPageChange,
  onOrdersDeleted,
  isLoading,
  error,
}: DataOrderTableProps) => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const allOrdersSelected = useMemo(
    () => orders.length > 0 && selectedOrders.length === orders.length,
    [orders.length, selectedOrders.length]
  );

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setSelectedOrders(orders.map((order) => order.id));
      } else {
        setSelectedOrders([]);
      }
    },
    [orders]
  );

  const handleSelectOrder = useCallback((orderId: string, checked: boolean) => {
    if (checked) {
      setSelectedOrders((prev) => [...prev, orderId]);
    } else {
      setSelectedOrders((prev) => prev.filter((id) => id !== orderId));
    }
  }, []);

  const handleDeleteSelectedOrders = useCallback(() => {
    if (selectedOrders.length > 0) {
      onOrdersDeleted(selectedOrders);
      setSelectedOrders([]);
      setIsDeleteDialogOpen(false);
    } else {
      // Optionally, you could provide feedback that no orders were selected here.
      setIsDeleteDialogOpen(false); // Ensure the dialog closes even if no orders are selected
    }
  }, [onOrdersDeleted, selectedOrders]);

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
        onPageChange(newPage);
      }
    },
    [currentPage, onPageChange, totalPages]
  );

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-8">
        Carregando pedidos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center py-8 text-red-500">
        Erro ao carregar os pedidos: {error}
      </div>
    );
  }

  return (
    <section>
      <section className="flex justify-between gap-3 items-center mb-4">
        <div className="text-xs font-light text-slate-600">
          {selectedOrders.length > 0 && (
            <span>{selectedOrders.length} pedido(s) selecionado(s)</span>
          )}
        </div>
        <div className="flex items-center gap-3 justify-end">
          <AlertDialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex cursor-pointer border-red-600 text-xs font-light text-red-600 items-center gap-2"
                disabled={selectedOrders.length === 0}
                onClick={() => {
                  if (selectedOrders.length === 0) {
                    setIsDeleteDialogOpen(false);
                  } else {
                    setIsDeleteDialogOpen(true);
                  }
                }}
              >
                <Trash2 className="h-4 w-4" />
                Excluir Selecionados
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                <AlertDialogDescription>
                  Tem certeza que deseja excluir {selectedOrders.length}{" "}
                  pedido(s)? Esta ação não pode ser desfeita.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteSelectedOrders}>
                  Excluir
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <CreateOrderForm />
        </div>
      </section>
      <section className="overflow-clip rounded-lg border border-slate-200">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-100 text-slate-400 text-xs tracking-tight font-medium">
              <TableHead>
                <Checkbox
                  checked={allOrdersSelected}
                  onCheckedChange={handleSelectAll}
                  aria-label="Selecionar todos os pedidos"
                />
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
                <TableCell>
                  <Checkbox
                    checked={selectedOrders.includes(order.id)}
                    onCheckedChange={(checked) =>
                      handleSelectOrder(order.id, !!checked)
                    }
                    aria-label={`Selecionar pedido ${order.number}`}
                  />
                </TableCell>
                <TableCell className="text-slate-600 text-xs font-normal">
                  {order.number}
                </TableCell>
                <TableCell className="text-slate-600 text-xs font-normal">
                  {order.local}
                </TableCell>
                <TableCell className="text-slate-600 text-xs font-normal">
                  {format(order.schedulingDate, "dd/MM/yyyy", { locale: ptBR })}
                </TableCell>
                <TableCell className="text-slate-600 text-xs font-normal">
                  {order.schedulingTime}
                </TableCell>
                <TableCell className="text-slate-600 text-xs font-normal">
                  {order.contact}
                </TableCell>
                <TableCell className="text-slate-600 text-xs font-normal">
                  <StatusBadge status={order.status} />
                </TableCell>
                <TableCell className="justify-center flex items-center w-fit">
                  <MenuOrder order={order} />
                </TableCell>
              </TableRow>
            ))}
            {orders.length === 0 && !isLoading && !error && (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="text-center py-4 text-slate-500"
                >
                  Nenhum pedido encontrado.
                </TableCell>
              </TableRow>
            )}
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
            onClick={() => handlePageChange(1)}
          >
            <ChevronsLeft className="w-4 h-4" />
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
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
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            <ChevronsRight className="w-4 h-4" />
          </Button>
        </section>
      </section>
    </section>
  );
};
