"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface OptionType {
    value: string;
};
interface AutoCompleteType extends React.ComponentProps<typeof CommandInput> {
    options?: OptionType[];
    value?: string;
    onChange?: (value: string) => void;
};

export function AutoComplete({ options, value, onChange,...props } : AutoCompleteType) {
  const [open, setOpen] = React.useState(false);

  function onValueChange(value: string) {
    if(onChange) {
        onChange(value);
        setOpen(false);
    };
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-xs text-slate-600 font-normal"
        >
          {value
            ? options && options.find((option) => option.value === value)?.value
            : "Selecione uma opção..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput {...props} className="h-9 text-xs text-slate-600" />
          <CommandList>
            <CommandEmpty className="text-xs text-slate-600 px-3 py-5">Nenhuma opção encontrada.</CommandEmpty>
            <CommandGroup>
              {options && options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onValueChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {option.value}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
