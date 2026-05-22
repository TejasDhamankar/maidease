"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type DetailedQuoteFormProps = {
  embedded?: boolean;
};

export default function DetailedQuoteForm({ embedded }: DetailedQuoteFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
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
    if (!name || !email || !phone || !service || !urgency) {
      setError("Please fill in all fields.");
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
        body: JSON.stringify({ name, email, phone, service, urgency }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Request a Professional Service
      </h2>

      {success ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center space-y-4"
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-lg font-bold">Request Submitted!</h3>
          <p className="text-sm">Thank you for your request. We will get back to you shortly.</p>
          <button 
            onClick={() => { setSuccess(false); setName(""); setEmail(""); setPhone(""); setService(""); setUrgency(""); }}
            className="text-[#007bff] hover:underline text-sm font-medium"
          >
            Submit another request
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#3aa724] transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#3aa724] transition-all"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#3aa724] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Service</label>
            <div className="relative">
              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white appearance-none focus:ring-2 focus:ring-[#3aa724] outline-none transition-all"
              >
                <option value="" disabled>Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="text-sm font-medium text-gray-700">Urgency</label>
            <div className="grid gap-2">
              {urgencyOptions.map((option) => (
                <label 
                  key={option} 
                  className={`flex items-center p-3 rounded-xl border cursor-pointer transition-colors group ${
                    urgency === option ? "border-[#3aa724] bg-green-50/30" : "border-gray-200 hover:border-[#3aa724]"
                  }`}
                >
                  <input 
                    type="radio" 
                    name="urgency" 
                    value={option}
                    checked={urgency === option}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-4 h-4 text-[#3aa724] focus:ring-[#3aa724]" 
                  />
                  <span className={`ml-3 text-sm font-medium transition-colors ${
                    urgency === option ? "text-[#3aa724]" : "text-gray-700 group-hover:text-[#3aa724]"
                  }`}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-xs font-medium text-center bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full bg-[#3aa724] hover:bg-[#2d851c] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center mt-4 ${
              loading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : "Submit Request"}
          </button>
        </form>
      )}
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