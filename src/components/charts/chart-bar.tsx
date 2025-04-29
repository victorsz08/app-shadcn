"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export interface BarChartDataType {
  day: string;
  connected: number;
  cancelled: number;
}

const chartConfig = {
  connected: {
    label: "Conectados",
    color: "var(--color-green-300)",
  },
  cancelled: {
    label: "Cancelados",
    color: "var(--color-red-300)",
  },
} satisfies ChartConfig;

export function ChartBar({ chartData }: { chartData: BarChartDataType[] }) {
  return (
    <Card className="w-full border-slate-200 shadow-none flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-slate-600 font-semibold text-base tracking-tighter">
          Relatório de Instalação
        </CardTitle>
        <CardDescription className="text-xs font-light text-slate-500 tracking-tighter">
          Instalações dos últimos dias
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="connected" fill="var(--color-connected)" radius={4} />
            <Bar dataKey="cancelled" fill="var(--color-cancelled)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-start gap-2 flex-wrap">
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-[6px]"
              style={{ backgroundColor: chartConfig.connected.color }}
            ></span>
            <span className="text-xs text-slate-500">
              {chartConfig.connected.label}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-[6px]"
              style={{ backgroundColor: chartConfig.cancelled.color }}
            ></span>
            <span className="text-xs text-slate-500">
              {chartConfig.cancelled.label}
            </span>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
