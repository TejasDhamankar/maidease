"use client"

import * as React from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { 
  LayoutDashboardIcon, 
  UsersIcon, 
  LogOutIcon, 
  ChevronUp,
  BriefcaseBusinessIcon
} from "lucide-react"
import { logout } from "@/app/admin/login/actions"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "dashboard";
  const navItems = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      tab: "dashboard",
      Icon: LayoutDashboardIcon,
    },
    {
      label: "Service Leads",
      href: "/admin/dashboard?tab=service",
      tab: "service",
      Icon: UsersIcon,
    },
    {
      label: "Job Applications",
      href: "/admin/dashboard?tab=jobs",
      tab: "jobs",
      Icon: BriefcaseBusinessIcon,
    },
  ];

  return (
    <Sidebar collapsible="offcanvas" className="border-r border-slate-200" {...props}>
      <SidebarHeader className="p-4">
        <div className="flex flex-col gap-2">
          <div className="relative h-11 w-full">
            <Image
              src="/logo_website-.png"
              alt="BB HOSPITALITY"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          <span className="pl-1 text-[10px] font-bold uppercase tracking-widest text-orange-500">Admin Portal</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 font-bold text-[10px] uppercase tracking-widest px-4 mb-2">Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.tab}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeTab === item.tab}
                    className="px-4 h-11 rounded-xl data-[active=true]:bg-orange-50 data-[active=true]:text-orange-600 hover:bg-slate-50 transition-colors"
                  >
                    <a href={item.href}>
                      <item.Icon className="size-4" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-slate-100">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="w-full justify-between px-2 hover:bg-slate-50 rounded-xl transition-colors">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 rounded-lg border border-slate-200">
                  <AvatarImage src="/avatars/admin.jpg" />
                  <AvatarFallback className="bg-slate-100 text-slate-500 text-xs font-bold">AD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold text-slate-700 leading-none mb-1">Administrator</span>
                  <span className="text-[10px] text-slate-400 font-medium">admin@bbhospitality.in</span>
                </div>
              </div>
              <ChevronUp className="size-4 text-slate-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="w-56 mb-2 rounded-xl p-1 shadow-xl border-slate-100" align="end">
            <DropdownMenuItem 
              onClick={() => logout()}
              className="flex items-center gap-2 px-3 py-2.5 text-rose-600 font-medium cursor-pointer hover:bg-rose-50 rounded-lg transition-colors"
            >
              <LogOutIcon className="size-4" />
              Logout Session
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
