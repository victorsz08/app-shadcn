"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { AutoComplete } from "../input/auto-complete";
import { DatePicker } from "../input/date-picker";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

const timeOptions = [
  { value: "08:00 as 12:00" },
  { value: "08:00 as 19:00" },
  { value: "12:00 as 15:00" },
  { value: "15:00 as 18:00" },
];

const createOrderScheme = z.object({
  number: z
    .string()
    .min(1, { message: "Campo número do contrato é obrigatório" })
    .transform((value) => value.replace(/\D/g, "")),
  local: z.string().min(1, { message: "Campo cidade é obrigatório" }),
  schedulingDate: z
    .coerce
    .date()
    .min(new Date(), { message: "Data de agendamento é obrigatória" }),
  schedulingTime: z
    .string()
    .min(1, { message: "Horário de agendamento é obrigatório" }),
  price: z.string().min(1, { message: "Campo valor é obrigatório" }),
  contact: z.string().min(1, { message: "Campo contato é obrigatório" }),
  observations: z.string().optional(),
});

type CreateOrderFormData = z.infer<typeof createOrderScheme>;

export function CreateOrderForm() {
  const form = useForm<CreateOrderFormData>({
    resolver: zodResolver(createOrderScheme),
    defaultValues: {
      number: "",
      local: "",
      schedulingDate: new Date(),
      schedulingTime: "",
      price: "",
      contact: "",
      observations: "",
    }
  });


  const onSubmit = (data: CreateOrderFormData) => {
    console.log(data);
  };

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
      <DialogTrigger asChild>
        <div>
          <Button
            className="text-xs text-slate-50 flex items-center 
                            gap-1 justify-center cursor-pointer"
          >
            <Plus size={12} />
            <span>Novo Contrato</span>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-2">
          <DialogTitle className="text-xl font-bold text-slate-600 tracking-tighter">
            Criar novo contrato
          </DialogTitle>
          <DialogDescription className="text-xs font-normal text-slate-500 tracking-tight">
            Preencha os campos abaixo para criar um novo contrato.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="flex flex-col space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
            <FormField
              control={form.control}
              name="schedulingDate"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-xs text-slate-500">
                    Data de agendamento *
                  </FormLabel>
                  <DatePicker
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="schedulingTime"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-xs text-slate-500">
                    Horário de agendamento *
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex items-center justify-between w-full space-x-4"
                    >
                      {timeOptions.map((item, index) => (
                        <FormItem
                          key={index}
                          className="flex flex-col items-start gap-1"
                        >
                          <RadioGroupItem value={item.value} />
                          <FormLabel className="text-xs font-medium text-slate-600">
                            {item.value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
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
                    Observações
                  </FormLabel>
                  <Textarea
                    className="resize-none h-32 text-xs font-normal text-slate-600"
                    {...field}
                  />
                  <FormMessage className="text-[10px]" />
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
                Criar
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
