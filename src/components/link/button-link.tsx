"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ButtonLink extends React.ComponentProps<typeof Link> {
  icon?: boolean;
}

export function ButtonLink({ children, icon, ...props }: ButtonLink) {
  return (
    <Link
      {...props}
      className="text-xs font-normal text-slate-500 cursor-pointer hover:text-slate-800 duration-200 
        underline flex items-center gap-1"
    >
      {children}
      {icon && <ExternalLink size={14} />}
    </Link>
  );
}
