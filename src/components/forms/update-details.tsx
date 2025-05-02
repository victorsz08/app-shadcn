"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Info } from "lucide-react";
import { OrderDataType } from "@/types";
import { formatCurrency } from "@/utils/utils";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { AutoComplete } from "../input/auto-complete";
import { Button } from "../ui/button";

const updateOrderScheme = z.object({
  number: z.coerce
    .number()
    .min(1, { message: "Campo número do contrato é obrigatório" }),
  local: z.string().min(1, { message: "Campo cidade é obrigatório" }),
  contact: z.string().min(1, { message: "Campo contato é obrigatório" }),
  price: z.string().min(1, { message: "campo valor é obrigatório" }),
});

type UpdateOrderType = z.infer<typeof updateOrderScheme>;

export function UpdateDetailsForm({ order }: { order: OrderDataType }) {
  const form = useForm<UpdateOrderType>({
    resolver: zodResolver(updateOrderScheme),
    defaultValues: {
      number: order.number,
      local: order.local,
      contact: order.contact,
      price: formatCurrency(order.price),
    },
  });

  const formatPrice = (value: string) => {
    const valueNumber = value.replace(/\D/g, "");
    const valueFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(valueNumber) / 100);
    return valueFormatted;
  };

  const price = form.watch("price") ? formatPrice(form.watch("price")) : "";

  return (
    <Dialog>
      <DialogTrigger className="text-xs px-2 py-1 font-normal text-slate-600 cursor-pointer flex items-center gap-1">
        <Info size={12} />
        <span>Editar Informações</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-2">
          <DialogTitle className="text-xl font-bold text-slate-600 tracking-tighter">
            Atualizar Detalhes
          </DialogTitle>
          <DialogDescription className="text-xs font-normal flex flex-col gap-1 text-slate-500 tracking-tight">
            Edite as informações do contrato
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => console.log(data))}>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-xs text-slate-500">
                      N° do Contrato *
                    </FormLabel>
                    <Input {...field} className="text-xs text-slate-600" />
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="local"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-xs text-slate-500">
                      Cidade/UF *
                    </FormLabel>
                    <AutoComplete
                      value={field.value}
                      onChange={field.onChange}
                      options={[]}
                    />
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-xs text-slate-500">
                      Contato *
                    </FormLabel>
                    <Input {...field} className="text-xs text-slate-600" />
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-xs text-slate-500">
                      Valor *
                    </FormLabel>
                    <Input
                      value={price}
                      onChange={field.onChange}
                      className="text-xs text-slate-600"
                    />
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-end gap-2 mt-3">
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
