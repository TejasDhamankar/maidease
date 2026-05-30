"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Lock, Mail } from "lucide-react";
import Image from "next/image";
import { login } from "./actions";

export default function AdminLogin() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);
    
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#f8faf8] px-4">
      {/* Decorative background similar to Hero */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Hero_Background_Image.png" 
          alt="Background" 
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/85 to-blue-50"></div>
      </div>

      {/* Floating Leaves */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [-10, -5, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[15%] z-10 hidden md:block"
      >
        <Image src="/footer-leafs-1.webp" alt="leaf" width={80} height={80} className="object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0], rotate: [10, 15, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[15%] z-10 hidden md:block"
      >
        <Image src="/footer-leafs-2.webp" alt="leaf" width={60} height={60} className="object-contain" />
      </motion.div>

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 w-full max-w-md bg-[#f8f9f6]/95 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] shadow-2xl border border-white"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-5 h-14 w-72 max-w-full">
            <Image
              src="/logo_website-.png"
              alt="BB HOSPITALITY"
              fill
              priority
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-medium text-[#111827] tracking-tight text-center">
            Admin Login
          </h1>
          <p className="text-gray-500 text-sm mt-2">Welcome back! Please login to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                name="email" 
                type="email" 
                required 
                placeholder="admin@bbhospitality.in"
                className="pl-11 h-14 rounded-2xl border-gray-100 bg-white/50 focus:bg-white focus:ring-blue-600 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                name="password" 
                type="password" 
                required 
                placeholder="••••••••"
                className="pl-11 h-14 rounded-2xl border-gray-100 bg-white/50 focus:bg-white focus:ring-blue-600 transition-all"
              />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium"
            >
              {error}
            </motion.div>
          )}

          <Button 
            disabled={loading}
            className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl text-base shadow-lg shadow-blue-600/20 transition-transform active:scale-95"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : "Login to Dashboard"}
          </Button>
        </form>

        <div className="mt-8 flex justify-center gap-4">
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <CheckCircle2 className="w-3 h-3 text-blue-600" />
            Secure
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <CheckCircle2 className="w-3 h-3 text-blue-600" />
            Encrypted
          </div>
        </div>
      </motion.div>
    </main>
  );
}
