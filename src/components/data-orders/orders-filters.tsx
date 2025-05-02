import { startOfMonth } from "date-fns";
import { DatePickerWithRange } from "../input/date-range";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";



interface PopoverDataFilterType {
  children?: React.ReactNode;
  title: string;
}

export function PopoverDataFilter({ children, title }: PopoverDataFilterType) {
  return (
    <Popover>
      <PopoverTrigger className="text-xs">{title}</PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {children}
      </PopoverContent>
    </Popover>
  );
};

interface SchedulingFilterType extends React.ComponentProps<"div"> {
    date: DateRange | undefined;
    onValueChange: (date: DateRange | undefined) => void;
    onHandleFilter: () => void;
};

export function SchedulingDateFilter({
  className,
  date,
  onValueChange,
  onHandleFilter,
}: SchedulingFilterType) {
  return (
    <PopoverDataFilter title="Data de Agendamento">
      <div className={cn("p-4 flex items-center", className)}>
        <DatePickerWithRange date={date} onValueChange={onValueChange} />
        <Separator />
        <div className="flex items-center justify-center">
          <Button onClick={() => onHandleFilter()}>Aplicar</Button>
          <Button variant="outline">Limpar</Button>
        </div>
      </div>
    </PopoverDataFilter>
  );
}
