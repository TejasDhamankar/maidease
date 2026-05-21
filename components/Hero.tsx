"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // Removed the horizontal padding here since it is now handled by the page wrapper or layout if needed, 
    // but kept container standard to ensure safety.
    <section className="relative w-full pt-32 pb-10 px-4 lg:px-8">
      
      <div className="relative w-full min-h-[600px] lg:min-h-[75vh] rounded-[2.5rem] overflow-hidden flex items-center bg-[#f8faf8] shadow-md border border-gray-100 p-4 sm:p-8 lg:p-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Hero_Background_Image.png" 
            alt="MaidEase Cleaning Professional" 
            fill
            className="object-cover object-[80%_center] md:object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent lg:hidden"></div>
        </div>

        {/* Floating Leaves overlaying the background AND the text card (z-40) */}
        <motion.div 
          animate={{ y: [0, -12, 0], rotate: [-12, -8, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute top-[15%] left-[48%] z-40 drop-shadow-xl"
        >
          <Image src="/footer-leafs-1.webp" alt="leaf decoration" width={65} height={65} className="object-contain" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0], rotate: [12, 16, 12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden lg:block absolute top-[42%] left-[45%] z-40 drop-shadow-lg"
        >
          <Image src="/footer-leafs-2.webp" alt="leaf decoration" width={45} height={45} className="object-contain" />
        </motion.div>

        {/* Floating Text Card */}
        <div className="relative z-30 w-full md:w-[70%] lg:w-[52%] bg-[#f8f9f6]/95 backdrop-blur-sm p-8 sm:p-10 lg:p-12 rounded-[2rem] shadow-2xl border border-white/50">
          
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-[#111827] mb-6 leading-[1.15]">
            Sparkly Residential <br className="hidden xl:block"/> and Commercial <br className="hidden xl:block"/> Cleaning Services
          </h1>
          
          <p className="text-lg text-gray-500 mb-8 max-w-[90%] leading-relaxed">
            Stop wasting your precious free time cleaning, relax while we make your home sparkle!
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-semibold px-8 py-6 rounded-full text-base transition-transform hover:scale-105">
              Free Quote
            </Button>
            <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 font-semibold px-8 py-6 rounded-full text-base transition-colors bg-transparent">
              Our Services
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <CheckCircle2 className="w-5 h-5 text-white fill-[#4ade80]" />
              Professional
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <CheckCircle2 className="w-5 h-5 text-white fill-[#4ade80]" />
              Friendly
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <CheckCircle2 className="w-5 h-5 text-white fill-[#4ade80]" />
              Convenient
            </div>
          </div>
        </div>

        {/* Floating Review Card (Bottom Right) */}
        <div className="hidden lg:flex absolute bottom-8 right-8 bg-white p-3 pr-5 rounded-2xl shadow-xl z-30 items-center gap-3 border border-gray-100">
          <div className="flex -space-x-3">
             <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative"><Image src="/Service_Card_1.png" alt="user" fill className="object-cover"/></div>
             <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden relative"><Image src="/Service_Card_2.png" alt="user" fill className="object-cover"/></div>
             <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden relative"><Image src="/Get_a_Quote.png" alt="user" fill className="object-cover"/></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-base font-bold text-gray-900 leading-none mb-1">
              <Star className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
              4.8 <span className="text-blue-600 font-extrabold ml-1 tracking-tighter">G</span>
            </div>
            <span className="text-xs text-gray-500 font-medium leading-none">480 Reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
}