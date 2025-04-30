"use client";

import { OrderDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { DatePicker } from "../input/date-picker";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const timeOptions = [
  { value: "08:00 as 12:00" },
  { value: "08:00 as 19:00" },
  { value: "12:00 as 15:00" },
  { value: "15:00 as 18:00" },
];

const updateSchedulingScheme = z.object({
  schedulingDate: z.coerce
    .date()
    .min(new Date(), { message: "Data de agendamento é obrigatória" }),
  schedulingTime: z
    .string()
    .min(1, { message: "Horário de agendamento é obrigatório" }),
});

type UpdateSchedulingFormData = z.infer<typeof updateSchedulingScheme>;

export function UpdateSchedulingForm({ order }: { order: OrderDataType }) {
  const form = useForm<UpdateSchedulingFormData>({
    resolver: zodResolver(updateSchedulingScheme),
    defaultValues: {
      schedulingDate: order.schedulingDate,
      schedulingTime: order.schedulingTime,
    },
  });

  return (
    <Dialog>
      <DialogTrigger className="text-xs px-2 py-1 font-normal text-slate-600 cursor-pointer flex items-center gap-1">
        <Calendar size={12} />
        <span>Editar Agendamento</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-2">
          <DialogTitle className="text-xl font-bold text-slate-600 tracking-tighter">
            Atualizar Agendamento
          </DialogTitle>
          <DialogDescription className="text-xs font-normal flex flex-col gap-1 text-slate-500 tracking-tight">
            <span><strong>Contrato: </strong> {order.number}</span>
            <span><strong>Cidade/UF: </strong> {order.local}</span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="flex flex-col space-y-4">
            <FormField
              control={form.control}
              name="schedulingDate"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-xs text-slate-500">
                    Data do Agendamento *
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
