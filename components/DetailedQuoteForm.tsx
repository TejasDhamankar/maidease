"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type DetailedQuoteFormProps = {
  embedded?: boolean;
};

export default function DetailedQuoteForm({ embedded }: DetailedQuoteFormProps) {
  const services = [
    "Maid", "Cook", "Baby Sitter", "Baby Massage", 
    "Patient Care", "Elder Care", "Driver", "Nursing", 
    "Japa Maid", "Delivery boy", "Security Guard", 
    "Housekeeping", "Office Support"
  ];

  const urgencyOptions = ["Urgent Need", "Needed Later", "I'm Just Planning"];

  const formContent = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        What Do You Want Your Maid To Do?
      </h2>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Service</label>
          <div className="relative">
            <select
              name="service"
              defaultValue=""
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white appearance-none focus:ring-2 focus:ring-[#3aa724] outline-none transition-all"
            >
              <option value="" disabled>Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Urgency</label>
          <div className="grid gap-3">
            {urgencyOptions.map((option) => (
              <label 
                key={option} 
                className="flex items-center p-4 rounded-xl border border-gray-200 hover:border-[#3aa724] cursor-pointer transition-colors group"
              >
                <input type="radio" name="urgency" value={option} className="w-5 h-5 text-[#3aa724] focus:ring-[#3aa724]" />
                <span className="ml-3 font-medium text-gray-700 group-hover:text-[#3aa724]">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#007bff] hover:bg-[#0069d9] text-white font-bold py-4 rounded-xl transition-all shadow-lg"
        >
          Next
        </button>
      </form>
    </motion.div>
  );

  if (embedded) {
    return formContent;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        {formContent}
      </div>
    </section>
  );
}
