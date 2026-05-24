"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  Mail,
  Phone,
  User,
  Calendar,
} from "lucide-react";

export type Lead = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  urgency: string;
  createdAt: string;
};

const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: "Lead Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
          <User className="w-4 h-4 text-slate-400" />
        </div>
        <span className="font-medium text-slate-700">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Contact Info",
    cell: ({ row }) => (
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-normal">
          <Mail className="w-3 h-3 text-slate-300" />
          {row.getValue("email")}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-normal">
          <Phone className="w-3 h-3 text-slate-300" />
          {row.original.phone}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "service",
    header: "Service",
    cell: ({ row }) => (
      <Badge variant="outline" className="bg-blue-50/30 border-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg font-medium text-[11px]">
        {row.getValue("service")}
      </Badge>
    ),
  },
  {
    accessorKey: "urgency",
    header: "Urgency",
    cell: ({ row }) => {
      const urgency = row.getValue("urgency") as string;
      let color = "bg-slate-50 text-slate-500 border-slate-100";
      if (urgency === "Urgent Need") color = "bg-rose-50 text-rose-600 border-rose-100";
      if (urgency === "Needed Later") color = "bg-sky-50 text-sky-600 border-sky-100";
      
      return (
        <Badge className={`${color} border px-2 py-0.5 rounded-md font-medium text-[10px] uppercase tracking-wider`}>
          {urgency}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      const [mounted, setMounted] = React.useState(false);
      React.useEffect(() => {
        setMounted(true);
      }, []);

      if (!mounted) {
        return (
          <div className="flex items-center gap-1.5 text-sm text-slate-400 font-normal">
            <Calendar className="w-3.5 h-3.5" />
            <span className="opacity-0">Loading...</span>
          </div>
        );
      }

      return (
        <div className="flex items-center gap-1.5 text-sm text-slate-400 font-normal">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(row.getValue("createdAt")).toLocaleDateString()}
        </div>
      );
    },
  },
];

export function AdminLeadTable({ data }: { data: Lead[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="space-y-4 font-sans">
      <div className="rounded-2xl border border-slate-200/60 bg-white overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent border-b border-slate-100">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 h-11 px-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-slate-50/30 border-b border-slate-50/50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3 px-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-32 text-center text-slate-400 font-normal">
                  No leads found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-2">
        <div className="text-sm text-gray-500 font-medium">
          Showing {table.getRowModel().rows.length} of {data.length} leads
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="w-8 h-8 rounded-lg border-gray-200"
          >
            <ChevronsLeftIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="w-8 h-8 rounded-lg border-gray-200"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="w-8 h-8 rounded-lg border-gray-200"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="w-8 h-8 rounded-lg border-gray-200"
          >
            <ChevronsRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
