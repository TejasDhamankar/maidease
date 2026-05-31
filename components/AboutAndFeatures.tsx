"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, CalendarCheck, Droplet, Sparkles, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutAndFeatures() {
  const features = [
    {
      title: "Free Quote & Instant Pricing",
      desc: "Get instant pricing and get your free quote cleaning all online.",
      icon: CalendarCheck,
      // Shape 1: Top-Right and Bottom-Left are heavily rounded
      radius: "rounded-tl-2xl rounded-tr-[3.5rem] rounded-br-2xl rounded-bl-[3.5rem]"
    },
    {
      title: "Equipment & Supplies Provided",
      desc: "Our cleaners provide all the essential equipment & supplies.",
      icon: Droplet,
      // Shape 2: Top-Left and Bottom-Right are heavily rounded
      radius: "rounded-tl-[3.5rem] rounded-tr-2xl rounded-br-[3.5rem] rounded-bl-2xl"
    },
    {
      title: "100% Satisfaction Guarantee",
      desc: "If you're not happy with your cleaning, we'll be back to fix the missed areas for free.",
      icon: Sparkles,
      // Shape 1
      radius: "rounded-tl-2xl rounded-tr-[3.5rem] rounded-br-2xl rounded-bl-[3.5rem]"
    },
    {
      title: "Vetted & Background Checked Cleaners",
      desc: "Our cleaners go through a rigorous hiring process to make sure your home is in safe hands.",
      icon: UserCheck,
      // Shape 2
      radius: "rounded-tl-[3.5rem] rounded-tr-2xl rounded-br-[3.5rem] rounded-bl-2xl"
    }
  ];

  const stats = [
    { value: "15", suffix: "+", label: "years experience" },
    { value: "10", suffix: "+", label: "homes cleaned last year" },
    { value: "500", suffix: "+", label: "saved hours for our clients" },
    { value: "95", suffix: "%", label: "of our clients hire us again" }
  ];

  return (
    <section className="relative w-full bg-white pt-10">
      
      {/* Background Split Layer (White top, Green bottom) */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="h-[250px] lg:h-[350px] w-full bg-white"></div>
        <div className="flex-1 w-full bg-blue-600"></div>
      </div>

      {/* Centralized Container */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* --- PART 1: WHO WE ARE CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#f8f9f6] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-lg border border-white flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">WHO WE ARE</span>
              <span className="text-[#7ed321] text-lg font-light leading-none -mt-1">{"//"}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-medium text-[#111827] mb-6 leading-[1.15]">
              We Are the Best <br className="hidden md:block" /> Option for a <br className="hidden md:block" /> Sparkling Home
            </h2>
            
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
              At BB HOSPITALITY, our mission is to provide the most convenient platform for connecting you with exceptional, professional hospitality staff who deliver outstanding results.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-white fill-[#4ade80] shrink-0" />
                <span className="text-gray-900 font-medium">We always keep you up to date on your cleaning</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-white fill-[#4ade80] shrink-0" />
                <span className="text-gray-900 font-medium">The cleaners treat your home like their own home</span>
              </div>
            </div>
            
            <Button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-semibold px-8 py-6 rounded-full text-base transition-transform hover:scale-105">
              Learn More
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative mx-auto aspect-square w-full max-w-[520px] rounded-[2rem] overflow-hidden bg-white shadow-md">
              <Image 
                src="/images/🧹 Housekeeping Staff.jpeg" 
                alt="BB HOSPITALITY housekeeping team" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* --- PART 2: WHY CHOOSE US (GREEN SECTION) --- */}
        <div className="mt-24 relative z-10 w-full">
          
          {/* Decorative Subtle Background Leaves using your uploaded images */}
          <div className="absolute -top-16 left-4 w-40 h-40 opacity-20 hidden md:block pointer-events-none transform -rotate-12">
            <Image src="/footer-leafs-1.webp" alt="leaf decoration" fill className="object-contain" />
          </div>
          <div className="absolute -top-6 right-16 w-24 h-24 opacity-20 hidden md:block pointer-events-none transform rotate-12">
            <Image src="/footer-leafs-2.webp" alt="leaf decoration" fill className="object-contain" />
          </div>

          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 flex flex-col items-center text-white"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest uppercase">WHY CHOOSE US</span>
              <span className="text-sky-200 text-lg font-light leading-none -mt-1">{"//"}</span>
            </div>
            <h2 className="text-4xl md:text-[2.75rem] font-medium leading-tight">We Are Experienced & We <br className="hidden md:block"/> Have Expert Teams</h2>
          </motion.div>

          {/* Features Grid - Perfectly Centralized */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  // Applied exact alternating radii
                  className={`bg-[#f0f6ea] p-8 ${feature.radius} hover:-translate-y-2 transition-transform duration-300 group shadow-sm`}
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3 leading-snug">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Stats band with a clean bottom CTA */}
          <div className="relative mt-20 overflow-hidden rounded-b-[2.75rem] bg-blue-600 px-4 pb-14 pt-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-4 lg:px-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-start px-0 py-4 md:px-6 lg:px-8 md:border-r md:border-white/20 last:border-r-0"
                >
                  <div className="flex items-start gap-1">
                    <span className="text-[3.25rem] lg:text-[4rem] font-medium leading-none tracking-tight">{stat.value}</span>
                    <span className="text-2xl lg:text-3xl font-medium leading-none pt-1">{stat.suffix}</span>
                  </div>
                  <div className="mt-4 max-w-[180px] text-sm lg:text-base font-normal leading-tight text-white/90">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-6 border-t border-white/15 pt-10">
              <Button className="h-[58px] rounded-full border border-white/70 bg-[#eef7dc] px-10 text-base font-semibold text-black shadow-[0_16px_35px_rgba(0,0,0,0.14)] transition-transform hover:-translate-y-0.5 hover:bg-[#e4f0d0]">
                Cleaning Process
              </Button>
              <div className="h-1 w-24 rounded-full bg-white/30" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
