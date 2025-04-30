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
import { UpdateSchedulingForm } from "../forms/update-scheduling";
import { OrderDataType } from "@/types";
import { UpdateStatusForm } from "../forms/update-status";

interface MenuOrderType {
  order: OrderDataType;
}

export function MenuOrder({ order }: MenuOrderType) {
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
        <DropdownMenuItem asChild>
            <UpdateSchedulingForm order={order}/>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <UpdateStatusForm order={order}/>
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
