import { checkAuth } from "../login/actions";
import { redirect } from "next/navigation";
import connectToDatabase from "@/lib/mongodb";
import Quote from "@/models/Quote";
import JobApplication from "@/models/JobApplication";
import DashboardContent from "./DashboardContent";
import type { JobLead, ServiceLead } from "./DashboardContent";
import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

type MongoRecord = {
  _id: { toString: () => string };
  createdAt?: Date;
  updatedAt?: Date;
  [key: string]: unknown;
};

export default async function AdminDashboard() {
  const isAuth = await checkAuth();

  if (!isAuth) {
    redirect("/admin/login");
  }

  await connectToDatabase();
  const [quotes, jobApplications] = await Promise.all([
    Quote.find().sort({ createdAt: -1 }).lean(),
    JobApplication.find().sort({ createdAt: -1 }).lean(),
  ]);
  
  const serializedQuotes = (quotes as MongoRecord[]).map((quote) => ({
    ...quote,
    _id: quote._id.toString(),
    createdAt: quote.createdAt?.toISOString() ?? null,
    updatedAt: quote.updatedAt?.toISOString() ?? null,
  }));

  const serializedJobApplications = (jobApplications as MongoRecord[]).map((application) => ({
    ...application,
    _id: application._id.toString(),
    createdAt: application.createdAt?.toISOString() ?? null,
    updatedAt: application.updatedAt?.toISOString() ?? null,
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
        <DashboardContent
          serviceLeads={serializedQuotes as unknown as ServiceLead[]}
          jobApplications={serializedJobApplications as unknown as JobLead[]}
        />
      </SidebarInset>
    </SidebarProvider>
  );
}
