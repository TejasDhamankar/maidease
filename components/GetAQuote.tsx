"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Check } from "lucide-react";

export default function GetAQuote() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [urgency, setUrgency] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const services = [
    "Maid", "Cook", "Baby Sitter", "Baby Massage", 
    "Patient Care", "Elder Care", "Driver", "Nursing", 
    "Japa Maid", "Delivery boy", "Security Guard", 
    "Housekeeping", "Office Support"
  ];

  const urgencyOptions = ["Urgent Need", "Needed Later", "I'm Just Planning"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !selectedService || !urgency) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: selectedService,
          urgency,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="get-a-quote" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* --- LEFT PANEL: THE FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 xl:col-span-5 bg-gradient-to-br from-[#fbe344] via-[#f3f48a] to-[#e5f6d2] rounded-[2.5rem] p-8 md:p-12 flex flex-col shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-widest text-gray-800 uppercase">GET YOUR FREE ESTIMATE</span>
              <span className="text-blue-600 text-lg font-light leading-none -mt-1">{"//"}</span>
            </div>
            
            <h2 className="text-4xl md:text-[2.75rem] font-medium text-[#111827] mb-10 leading-tight">
              Get a Quote
            </h2>

            {success ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center space-y-4 shadow-xl border border-blue-600/20"
              >
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827]">Request Sent!</h3>
                <p className="text-gray-600">Thank you for your interest. We will contact you shortly with your free estimate.</p>
                <button 
                  onClick={() => {
                    setSuccess(false);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setSelectedService("");
                    setUrgency("");
                    }}
                  className="text-blue-600 hover:underline font-bold"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-600/50 shadow-sm text-sm placeholder:text-gray-600 bg-white/70" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-600/50 shadow-sm text-sm placeholder:text-gray-600 bg-white/70" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-600/50 shadow-sm text-sm placeholder:text-gray-600 bg-white/70" 
                  />
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-600/50 shadow-sm text-sm text-gray-600 appearance-none bg-white/70 cursor-pointer"
                  >
                    <option value="" disabled>What do you want your maid to do?</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Urgency Selection */}
                <div className="grid gap-3">
                  {urgencyOptions.map(option => (
                    <label key={option} className={`flex items-center p-4 rounded-xl border ${urgency === option ? 'border-blue-600 bg-white' : 'border-transparent bg-white/50'} cursor-pointer transition-all`}>
                      <input 
                        type="radio" 
                        name="urgency" 
                        value={option} 
                        checked={urgency === option}
                        onChange={() => setUrgency(option)} 
                        className="w-5 h-5 text-blue-600 focus:ring-blue-600" 
                      />
                      <span className="ml-3 font-medium text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>

                {error && (
                  <div className="text-red-600 text-xs font-bold bg-red-50 p-3 rounded-xl border border-red-100">
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="mt-4 bg-[#111827] hover:bg-black text-white font-semibold py-4 px-8 rounded-full w-full transition-transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : "I'd Like a Quote"}
                </button>
              </form>
            )}
          </motion.div>

          {/* --- RIGHT PANEL: IMAGE & GUARANTEE CARD --- */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6">
            <div className="relative w-full min-h-[320px] overflow-hidden rounded-[2.5rem] shadow-sm md:min-h-[420px] lg:flex-1">
              <Image src="/Get_a_Quote.png" alt="Professional Cleaners" fill className="object-cover" />
            </div>

            <motion.div className="relative bg-[#f8f9f6] rounded-[2.5rem] p-8 md:p-10 overflow-hidden shadow-sm flex flex-col justify-center min-h-[220px]">
              <div className="relative z-10 w-full md:w-[70%]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white rounded-full"><CheckCircle2 className="w-8 h-8 text-white fill-blue-600" /></div>
                  <h3 className="text-2xl font-medium text-gray-900 leading-none">100% Satisfaction Guarantee</h3>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed">Your satisfaction is our top priority! We proudly offer a 100% Happiness Guarantee on all our cleanings.</p>
              </div>

              <div className="absolute -bottom-12 -right-8 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0 transform -rotate-12 opacity-90">
                <Image src="/footer-leafs-1.webp" alt="Leaves" fill className="object-contain" />
              </div>
              <div className="absolute top-4 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none z-0 transform rotate-45 opacity-60">
                <Image src="/footer-leafs-2.webp" alt="Leaves" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
