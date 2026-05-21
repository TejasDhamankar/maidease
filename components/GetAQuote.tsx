"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

export default function GetAQuote() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* --- LEFT PANEL: THE FORM --- */}
          {/* Exact gradient matching the template: Vibrant yellow to pale mint green */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 xl:col-span-5 bg-gradient-to-br from-[#fbe344] via-[#f3f48a] to-[#e5f6d2] rounded-[2.5rem] p-8 md:p-12 flex flex-col shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-widest text-gray-800 uppercase">GET YOUR FREE ESTIMATE</span>
              <span className="text-[#3aa724] text-lg font-light leading-none -mt-1">{"//"}</span>
            </div>
            
            <h2 className="text-4xl md:text-[2.75rem] font-medium text-[#111827] mb-10 leading-tight">
              Get a Quote
            </h2>

            <form className="flex flex-col gap-6 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Your name</label>
                  <input 
                    type="text" 
                    placeholder="John Smith" 
                    className="w-full px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#3aa724]/50 shadow-sm text-sm placeholder:text-gray-400"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    placeholder="e.g. john@youremail.com" 
                    className="w-full px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#3aa724]/50 shadow-sm text-sm placeholder:text-gray-400"
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. (1) 23 4567 891" 
                    className="w-full px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#3aa724]/50 shadow-sm text-sm placeholder:text-gray-400"
                  />
                </div>
                {/* Square Footage */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Total square footage</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 120" 
                    className="w-full px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#3aa724]/50 shadow-sm text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Choose a service</label>
                <div className="relative">
                  <select className="w-full px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#3aa724]/50 shadow-sm text-sm text-gray-600 appearance-none bg-white cursor-pointer">
                    <option value="" disabled selected>Select</option>
                    <option value="house">House Cleaning</option>
                    <option value="office">Office Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 mt-2">
                <input 
                  type="checkbox" 
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-[#3aa724] focus:ring-[#3aa724]"
                  defaultChecked
                />
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  By submitting this form, you agree to the processing of your personal data in accordance with the General Data Protection Regulation and our Privacy Policy.
                </p>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="mt-4 bg-[#111827] hover:bg-black text-white text-[15px] font-semibold py-4 px-8 rounded-full w-fit transition-transform hover:scale-105 shadow-md"
              >
                I&apos;d Like a Quote
              </button>
            </form>
          </motion.div>

          {/* --- RIGHT PANEL: IMAGE & GUARANTEE CARD --- */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6">
            
            {/* Top Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full min-h-[320px] overflow-hidden rounded-[2.5rem] bg-[#f4f6f1] shadow-sm md:min-h-[420px] lg:flex-1"
            >
              <Image 
                src="/Get_a_Quote.png" 
                alt="Cleaner holding fresh towels" 
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
              />
            </motion.div>

            {/* Bottom Guarantee Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-[#f8f9f6] rounded-[2.5rem] p-8 md:p-10 overflow-hidden shadow-sm flex flex-col justify-center min-h-[220px]"
            >
              <div className="relative z-10 w-full md:w-[70%]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-white fill-[#3aa724]" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 leading-none">
                    100% Satisfaction Guarantee
                  </h3>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Your satisfaction is our top priority! We proudly offer a 100% Happiness Guarantee on all our cleanings.
                </p>
              </div>

              {/* Exact Leaf Decoration from the template */}
              <div className="absolute -bottom-12 -right-8 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0 transform -rotate-12 opacity-90">
                <Image 
                  src="/footer-leafs-1.webp" 
                  alt="Decorative Leaves" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="absolute top-4 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none z-0 transform rotate-45 opacity-60">
                <Image 
                  src="/footer-leafs-2.webp" 
                  alt="Decorative Leaves" 
                  fill 
                  className="object-contain"
                />
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
