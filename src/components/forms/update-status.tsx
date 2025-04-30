"use client";

import { OrderDataType, StatusType } from "@/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Settings2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem
} from "../ui/select";
import { StatusBadge } from "../status-badge/status-badge";
import { Button } from "../ui/button";

const updateStatusScheme = z.object({
  status: z.string().min(1, { message: "Selecione um status" }),
});

type UpdateStatusType = z.infer<typeof updateStatusScheme>;

const statusDataOptions = [
  {
    value: "PENDENTE" as StatusType,
  },
  {
    value: "CONECTADO" as StatusType,
  },
  {
    value: "CANCELADO" as StatusType,
  },
];

export function UpdateStatusForm({ order }: { order: OrderDataType }) {
  const form = useForm<UpdateStatusType>({
    resolver: zodResolver(updateStatusScheme),
    defaultValues: {
      status: order.status,
    },
  });

  return (
    <Dialog>
      <DialogTrigger className="text-xs px-2 py-1 font-normal text-slate-600 cursor-pointer flex items-center gap-1">
        <Settings2 size={12} />
        <span>Editar Status</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-2">
          <DialogTitle className="text-xl font-bold text-slate-600 tracking-tighter">
            Atualizar Status
          </DialogTitle>
          <DialogDescription className="text-xs font-normal flex flex-col gap-1 text-slate-500 tracking-tight">
            <span>
              <strong>Contrato: </strong> {order.number}
            </span>
            <span>
              <strong>Cidade/UF: </strong> {order.local}
            </span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="flex flex-col space-y-4">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-xs text-slate-500">
                    Status
                </FormLabel>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {statusDataOptions.map((status, index) => (
                        <SelectItem key={index} value={status.value}>
                          <StatusBadge status={status.value} />
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end gap-2">
              <DialogClose asChild>
                <div>
                  <Button
                    type="button"
                    variant="outline"
                    className="cursor-pointer text-xs font-normal"
                  >
                    Cancelar
                  </Button>
                </div>
              </DialogClose>
              <Button
                type="submit"
                className="text-xs font-normal px-5 cursor-pointer"
              >
                Atualizar
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
