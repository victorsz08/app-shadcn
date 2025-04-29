"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export interface ChartPieDataType {
    status: string;
    quantity: number;
    fill: string;
};

const chartConfig = {
  slaes: {
    label: "Vendas",
  },
  pending: {
    label: "Pendente",
    color: "var(--color-orange-300)",
  },
  connected: {
    label: "Conectado",
    color: "var(--color-green-300)",
  },
  cancelled: {
    label: "Cancelado",
    color: "var(--color-red-300)",
  }
} satisfies ChartConfig

export function ChartPie({ chartData } : { chartData: ChartPieDataType[] }) {
  const totalSales = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [chartData]);


  return (
    <Card className="flex flex-col shadow-none border-slate-200">
      <CardHeader className="items-center pb-0 text-center">
        <CardTitle className="text-slate-600 font-semibold text-base tracking-tighter">
            Relatório de Vendas
        </CardTitle>
        <CardDescription className="text-xs font-light text-slate-500 tracking-tighter">
           Vendas no período atual
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="quantity"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 2}
                          className="fill-slate-600 text-3xl font-bold tracking-tighter"
                        >
                          {totalSales.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 18}
                          className="fill-muted-foreground"
                        >
                          Vendas
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
            <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-[6px]" style={{ backgroundColor: chartConfig.pending.color }}></span>
                    <span className="text-xs text-slate-500">
                        {chartConfig.pending.label}
                    </span>
                </span>
                <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-[6px]" style={{ backgroundColor: chartConfig.connected.color }}></span>
                    <span className="text-xs text-slate-500">
                        {chartConfig.connected.label}
                    </span>
                </span>
                <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-[6px]" style={{ backgroundColor: chartConfig.cancelled.color }}></span>
                    <span className="text-xs text-slate-500">
                        {chartConfig.cancelled.label}
                    </span>
                </span>
            </div>
      </CardFooter>
    </Card>
  )
}
