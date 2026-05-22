"use client";

import { AdminLeadTable, Lead } from "@/components/AdminLeadTable";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, CheckCircle2 } from "lucide-react";
import { logout } from "../login/actions";
import { Button } from "@/components/ui/button";

export default function DashboardContent({ initialLeads }: { initialLeads: Lead[] }) {
  const stats = [
    {
      label: "Total Leads",
      value: initialLeads.length.toString(),
      icon: Users,
      trend: "+12.5%",
      description: "Since last month",
      color: "text-slate-600",
      bg: "bg-slate-50"
    },
    {
      label: "Urgent Leads",
      value: initialLeads.filter(l => l.urgency === "Urgent Need").length.toString(),
      icon: Clock,
      trend: "Immediate",
      description: "Require attention",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      label: "Completed",
      value: "0",
      icon: CheckCircle2,
      trend: "0%",
      description: "Successfully closed",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <div className="flex flex-col gap-8 p-4 md:p-10 max-w-7xl mx-auto w-full font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1 font-normal">Manage and track your service leads in real-time.</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => logout()}
          className="w-fit rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium px-6"
        >
          Logout Session
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-slate-200/60 shadow-sm overflow-hidden group bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </CardTitle>
              <div className={`${stat.bg} ${stat.color} p-2.5 rounded-xl transition-all duration-300 group-hover:shadow-inner`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-slate-900">{stat.value}</div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="text-[10px] font-semibold px-2 py-0 border-slate-100 text-slate-500">
                  {stat.trend}
                </Badge>
                <span className="text-xs text-slate-400 font-normal">
                  {stat.description}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Recent Service Leads</h2>
          <Button variant="ghost" className="text-[#3aa724] font-medium text-sm hover:bg-emerald-50">View all leads</Button>
        </div>
        <AdminLeadTable data={initialLeads} />
      </div>
    </div>
  );
}
