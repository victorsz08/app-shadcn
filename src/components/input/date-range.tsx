"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangeType extends React.ComponentProps<'div'>{
  date: DateRange | undefined;
  onValueChange: (date: DateRange | undefined) => void;
}

export function DatePickerWithRange({ date, onValueChange, className, ...props }: DateRangeType) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <Button
            id="date"
            variant={"outline"}
            className={cn(className,
              "w-full justify-start text-slate-600 text-left font-normal text-xs",
              !date && "text-slate-400"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", { locale: ptBR })} -{" "}
                  {format(date.to, "LLL dd, y", { locale: ptBR })}
                </>
              ) : (
                format(date.from, "LLL dd, y", { locale: ptBR })
              )
            ) : (
              <span className="text-xs font-normal">Selecione uma data</span>
            )}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          locale={ptBR}
          defaultMonth={date?.from}
          selected={date}
          onSelect={(date) => onValueChange(date)}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
