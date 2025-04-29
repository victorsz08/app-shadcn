"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createOrderScheme = z.object({
    number: z.coerce.number().min(1, { message: "Campo número do contrato é obrigatório" }),
    local: z.string().min(1, { message: "Campo cidade é obrigatório" }),
    schedulingDate:  z.date().min(new Date(), { message: "Data de agendamento é obrigatória" }),
    schedulingTime: z.string().min(1, { message: "Horário de agendamento é obrigatório" }),
    price: z.string().min(1, { message: "Campo valor é obrigatório" }),
    contact: z.string().min(1, { message: "Campo contato é obrigatório" })
})


export function CreateOrderForm() {
    const form = useForm()
}