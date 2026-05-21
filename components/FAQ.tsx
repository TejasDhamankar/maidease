"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's included in a clean?",
      answer: "Our standard clean includes dusting, wiping down surfaces, vacuuming, mopping floors, and cleaning bathrooms and kitchens. We tailor our services to your specific needs."
    },
    {
      question: "How much does it cost to clean my home?",
      answer: "Pricing depends on the square footage of your home and the type of cleaning requested. Use our free quote tool above to get an instant and accurate estimate."
    },
    {
      question: "Are the cleaning supplies included?",
      answer: "Yes! Our professional cleaners come fully equipped with all the necessary, high-quality, eco-friendly cleaning supplies and equipment."
    },
    {
      question: "What time do you offer cleaning services?",
      answer: "We offer flexible scheduling between 8:00 AM and 6:00 PM, Monday through Saturday. We can also accommodate special timing requests with advanced notice."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Header and Contact Box */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">FAQS</span>
                <span className="text-[#3aa724] text-lg font-light leading-none -mt-1">{"//"}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#111827] leading-tight">
                Frequently Asked <br/> Questions
              </h2>
            </div>

            <div className="bg-[#eef5e5] rounded-[2rem] p-8 md:p-10 shadow-sm mt-auto max-w-sm">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-8 leading-snug">
                Looking for the cleaning service in Mumbai? Contact us now!
              </h3>
              
              <div className="inline-flex items-center bg-white rounded-full py-2 pr-6 pl-2 shadow-sm gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fbbf24] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gray-900" />
                </div>
                <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                  +91 9867074050
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4 justify-center pt-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-[#f8f9f6] rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-base font-medium text-gray-900">{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 ml-4 shadow-sm text-gray-500">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 text-gray-500 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
