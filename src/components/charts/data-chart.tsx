"use client";

import { ChartBar } from "./chart-bar";
import { ChartPie } from "./chart-pie";

const dataPieChart = [
    {
        status: "pending",
        quantity: 4,
        fill: "var(--color-pending)"
    },
    {
        status: "connected",
        quantity: 24,
        fill: "var(--color-connected)"
    },
    {
        status: "cancelled",
        quantity: 2,
        fill: "var(--color-cancelled)"
    },
];

const dataBarChart = [
    {
        day: "01/04",
        connected: 3,
        cancelled: 0
    },
    {
        day: "02/04",
        connected: 2,
        cancelled: 1
    },
    {
        day: "03/04",
        connected: 1,
        cancelled: 3
    },
    {
        day: "04/04",
        connected: 1,
        cancelled: 2
    },
    {
        day: "05/04",
        connected: 4,
        cancelled: 1
    },
    {
        day: "06/04",
        connected: 1,
        cancelled: 3
    },
    {
        day: "07/04",
        connected: 2,
        cancelled: 1
    }
];


export function DataChart() {

    return (
        <section className="flex gap-4">
            <ChartPie chartData={dataPieChart}/>
            <ChartBar chartData={dataBarChart}/>
        </section>
    )
}