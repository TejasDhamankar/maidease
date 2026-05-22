import { checkAuth } from "../login/actions";
import { redirect } from "next/navigation";
import connectToDatabase from "@/lib/mongodb";
import Quote from "@/models/Quote";
import DashboardContent from "./DashboardContent";
import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default async function AdminDashboard() {
  const isAuth = await checkAuth();

  if (!isAuth) {
    redirect("/admin/login");
  }

  await connectToDatabase();
  const quotes = await Quote.find().sort({ createdAt: -1 }).lean();
  
  // Serialize Mongo objects
  const serializedQuotes = quotes.map((quote: any) => ({
    ...quote,
    _id: quote._id.toString(),
    createdAt: quote.createdAt.toISOString(),
    updatedAt: quote.updatedAt.toISOString(),
  }));

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 64)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AdminSidebar variant="inset" />
      <SidebarInset className="bg-[#f1f5f9]">
        <DashboardContent initialLeads={serializedQuotes as any} />
      </SidebarInset>
    </SidebarProvider>
  );
}
