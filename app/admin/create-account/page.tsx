"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAdminAccount } from "../login/actions";

export default function AdminCreateAccountPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await createAdminAccount(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#fff8f3] px-4 py-10">
      <div className="absolute inset-0 z-0">
        <Image src="/Hero_Background_Image.png" alt="Background" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-orange-50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-white bg-white/95 p-7 shadow-2xl sm:p-9"
      >
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-[#12345b] text-lg font-black text-orange-300">
            BB
          </div>
          <h1 className="text-3xl font-black text-[#12345b]">Create Admin Account</h1>
          <p className="mt-2 text-sm font-semibold text-slate-500">Use this account to manage all form requests.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#12345b]">Name</label>
            <div className="relative">
              <UserRound className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-500" />
              <Input name="name" required placeholder="Admin name" className="h-12 rounded-xl pl-11" />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#12345b]">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-500" />
              <Input name="email" type="email" required placeholder="admin@bbhospitality.in" className="h-12 rounded-xl pl-11" />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#12345b]">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-500" />
              <Input name="password" type="password" required minLength={8} placeholder="Minimum 8 characters" className="h-12 rounded-xl pl-11" />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#12345b]">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-500" />
              <Input name="confirmPassword" type="password" required minLength={8} placeholder="Confirm password" className="h-12 rounded-xl pl-11" />
            </div>
          </div>

          {error ? <p className="rounded-xl border border-red-100 bg-red-50 p-3 text-sm font-bold text-red-600">{error}</p> : null}

          <Button disabled={loading} className="h-12 w-full rounded-xl bg-orange-500 font-black text-white hover:bg-orange-600">
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>

        <div className="mt-6 flex items-center justify-between text-xs font-bold text-slate-500">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="size-3.5 text-orange-500" />
            Secure account
          </span>
          <Link href="/admin/login" className="text-[#12345b] hover:text-orange-600">
            Back to login
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
