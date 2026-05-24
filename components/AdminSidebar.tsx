"use client"

import * as React from "react"
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
  ChevronUp
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
  return (
    <Sidebar collapsible="offcanvas" className="border-r border-slate-200" {...props}>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <span className="text-white font-bold text-sm leading-none">BB</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-slate-900 leading-tight">BB HOSPITALITY</span>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Admin Portal</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 font-bold text-[10px] uppercase tracking-widest px-4 mb-2">Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={true}
                  className="px-4 h-11 rounded-xl data-[active=true]:bg-blue-50 data-[active=true]:text-blue-700 hover:bg-slate-50 transition-colors"
                >
                  <a href="/admin/dashboard">
                    <LayoutDashboardIcon className="size-4" />
                    <span className="font-medium">Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="px-4 h-11 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <a href="/admin/dashboard">
                    <UsersIcon className="size-4" />
                    <span className="font-medium">Service Leads</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
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
