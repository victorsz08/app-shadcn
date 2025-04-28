import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "../../components/ui/sidebar";
import { TriggerSidebar } from "@/components/sidebar/trigger-sidebar";
import { BreadcrumbRoot } from "@/components/sidebar/breadcrumb-root";





export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar variant="sidebar" collapsible="icon" />
      <main className="w-full">
        <header className="bg-slate-50 w-full border-b-slate-200 border-b flex justify-between items-center py-3 px-2">
          <div className="flex items-center gap-4">
            <TriggerSidebar />
            <BreadcrumbRoot />
          </div>
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}