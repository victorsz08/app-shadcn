"use client";

import { Calendar, ChevronDown, EllipsisVertical, Info, Settings2, Trash } from "lucide-react";
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
import { UpdateDetailsForm } from "../forms/update-details";

interface MenuOrderType {
  order: OrderDataType;
}

export function MenuOrder({ order }: MenuOrderType) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-fit h-fit">
        <div>
          <Button variant="outline" className="border-none cursor-pointer w-fit h-fit text-slate-500">
            <EllipsisVertical size={14} />
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
        <DropdownMenuItem asChild>
          <UpdateDetailsForm order={order}/>
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
