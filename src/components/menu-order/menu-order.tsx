"use client";

import { Calendar, ChevronDown, Info, Settings2, Trash } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";

interface MenuOrderType {
  orderId: string;
}

export function MenuOrder({ orderId }: MenuOrderType) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-fit h-fit">
        <div>
          <Button className="bg-slate-950 text-[11px] py-1 justify-between cursor-pointer  w-fit text-slate-50 flex items-center gap-1 h-fit">
            <span>Editar</span>
            <ChevronDown size={12} />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-full">
        <DropdownMenuItem className="text-xs font-normal text-slate-600 cursor-pointer flex items-center gap-1">
          <Calendar size={12} />
          <span>Editar Agendamento</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs font-normal text-slate-600 cursor-pointer flex items-center gap-1">
          <Settings2 size={12} />
          <span>Editar Status</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs font-normal text-slate-600 cursor-pointer flex items-center gap-1">
          <Info size={12} />
          <span>Editar Informações</span>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="text-xs font-normal text-red-600 cursor-pointer flex items-center gap-1">
          <Trash size={12} className="text-red-600" />
          <span>Excluir</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
