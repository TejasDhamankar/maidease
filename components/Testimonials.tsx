"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Native Google SVG Logo for perfectly sharp rendering
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "JESSICA CLARK",
      role: "Customer",
      image: "/Service_Card_1.png", // Replace with actual avatar
      text: "Amazing and highly efficient, met all my expectations and more, they were there on time and left my duplex in pristine conditions. Thank MaidEase."
    },
    {
      id: 2,
      name: "CARLOS MOYA",
      role: "Customer",
      image: "/Service_Card_2.png", // Replace with actual avatar
      text: "Amazing and highly efficient, met all my expectations and more, they were there on time and left my duplex in pristine conditions. Thank MaidEase."
    },
    {
      id: 3,
      name: "SARAH JENKINS",
      role: "Customer",
      image: "/Service_Card_1.png", 
      text: "The team was incredibly professional and thorough. My office has never looked better. Highly recommend their commercial cleaning services!"
    }
  ];

  // Smooth scrolling logic for the custom navigation buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / (window.innerWidth < 1024 ? 1 : 2);
      scrollRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <section className="py-10 bg-white relative w-full">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Main Soft Green Container */}
        <div className="bg-[#f4f7f3] rounded-[2.5rem] pt-16 md:pt-20 pb-28 relative flex flex-col items-center">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 flex flex-col items-center"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">TESTIMONIALS</span>
              <span className="text-[#7ed321] text-lg font-light leading-none -mt-1">//</span>
            </div>
            <h2 className="text-4xl md:text-[2.75rem] font-medium text-[#111827] leading-tight">
              Empowering Thousands of <br className="hidden md:block" /> Users and Enterprises
            </h2>
          </motion.div>

          {/* Carousel Wrapper */}
          <div className="relative w-full max-w-5xl px-4 md:px-12">
            
            {/* Navigation Arrows (Absolute positioned outside the cards) */}
            <button 
              onClick={() => scroll("left")}
              className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm z-10 hover:scale-105 hover:shadow-md transition-all text-gray-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm z-10 hover:scale-105 hover:shadow-md transition-all text-gray-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Scrollable Track */}
            {/* scrollbar-hide ensures clean look on all browsers while keeping native snap scrolling */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-full lg:min-w-[calc(50%-12px)] snap-center bg-white rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col"
                >
                  <div className="font-serif text-5xl font-black text-[#111827] leading-none mb-4">“</div>
                  <p className="text-gray-700 text-[15px] md:text-base leading-relaxed mb-8 flex-grow">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden relative shrink-0">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-[13px] text-gray-900 uppercase tracking-wide leading-none mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>

          {/* --- BOTTOM NOTCH WITH GOOGLE BADGE --- */}
          {/* This matches the cutout technique used in the green features section */}
          <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 flex items-end z-20">
            
            {/* Left Curve */}
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 24H0V0c0 13.255 10.745 24 24 24z" />
            </svg>

            {/* Center Block */}
            <div className="bg-white pt-5 px-6 pb-0 rounded-t-[1.5rem]">
              <div className="flex items-center gap-4 bg-[#f8f9f6] rounded-full px-6 py-3 shadow-sm border border-gray-100/50">
                <GoogleLogo />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 leading-none mb-1">4.8</span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-medium leading-none">480 Google reviews</span>
                </div>
              </div>
            </div>

            {/* Right Curve */}
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 24h24V0c0 13.255-10.745 24-24 24z" />
            </svg>

          </div>

        </div>
      </div>
    </section>
  );
}