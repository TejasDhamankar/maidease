"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import DetailedQuoteForm from "@/components/DetailedQuoteForm";

const contactCards = [
  {
    title: "Email us",
    value: "contact@clanyeco.com",
    icon: Mail,
  },
  {
    title: "Call us",
    value: "+1 (180) 567-8990",
    icon: Phone,
  },
  {
    title: "Our Location",
    value: "72 Kneeland St, Suite 305, New York, MA 02111",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Mon – Fri: 9.00am – 8.00pm\nSaturday: 10.00am – 8.00pm\nSunday: 10.00am – 4.00pm",
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <section className="relative overflow-hidden py-24 px-4 lg:px-8">
        <div className="absolute top-14 left-6 opacity-70 hidden lg:block">
          <Image src="/footer-leafs-1.webp" alt="leaf" width={100} height={100} className="object-contain" />
        </div>
        <div className="absolute top-36 right-10 opacity-80 hidden lg:block">
          <Image src="/footer-leafs-2.webp" alt="leaf" width={88} height={88} className="object-contain" />
        </div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#3aa724] mb-4">CONTACT US</p>
            <h1 className="text-4xl md:text-5xl font-medium text-[#111827] leading-[1.1] mb-4">Contact Us Today</h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1.5 w-16 rounded-full bg-[#3aa724]" />
              <div className="h-1.5 w-16 rounded-full bg-[#a3d57a]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[2rem] border border-[#f0f4ec] bg-[#f7faf6] p-8 shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm mb-5">
                    <Icon className="w-6 h-6 text-[#3aa724]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-2">{card.title}</h3>
                  <p className="whitespace-pre-line text-sm text-gray-600 leading-6">{card.value}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-10 left-0 opacity-70 hidden xl:block">
                <Image src="/footer-leafs-2.webp" alt="leaf" width={80} height={80} className="object-contain" />
              </div>
              <div className="bg-gradient-to-br from-[#fef3c7] via-[#f9f3c5] to-[#eaf9d9] rounded-[3rem] p-6 md:p-8 shadow-[0_35px_60px_-30px_rgba(58,167,36,0.35)]">
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#3aa724] mb-3">Contact form</p>
                  <h2 className="text-3xl md:text-4xl font-medium text-[#111827] leading-tight">Contact us Today for Any Questions</h2>
                </div>
                <DetailedQuoteForm embedded />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-30px_rgba(17,24,39,0.25)]">
                <Image src="/GettyImages-1226346559-1.webp" alt="Cleaning team" width={1200} height={900} className="object-cover w-full h-[460px] md:h-[550px]" />
                <div className="absolute bottom-6 left-6 rounded-[2rem] bg-white/90 backdrop-blur-xl p-5 shadow-lg border border-white">
                  <p className="text-sm text-gray-500">Need advice on our services?</p>
                  <p className="text-lg font-semibold text-gray-900">We’re ready to help.</p>
                </div>
                <div className="absolute top-6 right-6 opacity-80 hidden lg:block">
                  <Image src="/footer-leafs-1.webp" alt="leaf" width={90} height={90} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
