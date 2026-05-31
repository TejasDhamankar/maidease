"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Briefcase, Armchair, Truck, ChevronRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "House Cleaning",
      image: "/images/Maid Service.jpeg",
      icon: Home,
    },
    {
      title: "Office Cleaning",
      image: "/images/👨‍💼 Office Boy.jpeg",
      icon: Briefcase,
    },
    {
      title: "Deep Cleaning",
      image: "/images/🧹 Housekeeping Staff.jpeg",
      icon: Armchair,
    },
    {
      title: "Move In Out Cleaning",
      image: "/images/📦 Delivery Boy.jpeg",
      icon: Truck,
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Section Header (Left Aligned) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">OUR SERVICES</span>
            <span className="text-blue-600 text-lg font-light leading-none -mt-1">{"//"}</span>
          </div>
          <h2 className="text-4xl md:text-[2.75rem] font-medium text-[#111827] leading-[1.15]">
            Here&apos;s What We Can <br className="hidden md:block" /> Do for You
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                // The exact gradient matching the template: soft yellow to mint green
                className="bg-gradient-to-b from-[#eef26c] to-[#e2f6d1] p-4 rounded-[2rem] flex flex-col h-full group shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image Container with Floating Icon */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white mb-6">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Squircle Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-sm z-10">
                    <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-2 flex flex-col flex-grow">
                  <h3 className="text-2xl font-medium text-gray-900 mb-8 pr-4 leading-snug">
                    {service.title.split(' ').map((word, i) => (
                      <span key={i}>{word} <br className={i === 0 ? "hidden lg:block" : "hidden"}/></span>
                    ))}
                  </h3>
                  
                  {/* Custom Learn More Button */}
                  <div className="mt-auto bg-white rounded-full p-1.5 pl-6 flex items-center justify-between cursor-pointer hover:ring-2 hover:ring-white/50 transition-all">
                    <span className="text-sm font-semibold text-gray-900">Learn more</span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
