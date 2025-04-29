import { DataChart } from "@/components/charts/data-chart";
import { DailyOrder } from "@/components/data-orders/daily-order";
import { Reports } from "@/components/reports/reports";
import { Metadata } from "next"



export const metadata: Metadata = {
    title: "Dashboard"
};

export default function DashboardPage() {

    return (
        <section>
            <section className="p-4 space-y-4">
                <Reports/>
                <DataChart/>
                <DailyOrder/>
            </section>
        </section>
    )
}