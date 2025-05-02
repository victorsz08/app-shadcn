"use client";

import Image from "next/image";
import { CreateOrderForm } from "../forms/create-order";

export function NotFoundOrders() {
  return (
    <section className="w-full py-4">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/public/not-found-order.png"
          alt="not-found-order"
          width={120}
          height={120}
        />
        <div className="flex flex-col items-center gap-1 justify-center">
          <p className="text-sm tracking-tight font-normal text-slate-500">
            Nenhum Pedido Encontrato
          </p>
          <CreateOrderForm />
        </div>
      </div>
    </section>
  );
}
