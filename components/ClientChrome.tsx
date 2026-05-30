"use client";

import { usePathname } from "next/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import EntryChoiceModal from "@/components/EntryChoiceModal";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export default function ClientChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <TooltipProvider>
      {!isAdminPage && <Navbar />}
      {!isAdminPage && <EntryChoiceModal />}
      {children}
      <Toaster richColors position="top-center" />
    </TooltipProvider>
  );
}
