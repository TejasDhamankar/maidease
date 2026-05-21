"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";

const services = [
  { title: "House Cleaning", image: "/GettyImages-1456829834.webp", excerpt: "Regular and deep cleaning services for homes of all sizes." },
  { title: "Office Cleaning", image: "/GettyImages-1350786822-1.webp", excerpt: "Professional commercial cleaning to keep your workspace healthy." },
  { title: "Deep Cleaning", image: "/GettyImages-1724689200.webp", excerpt: "Thorough top-to-bottom cleaning for special occasions or moves." },
  { title: "Move In/Out Cleaning", image: "/GettyImages-1226346559-1.webp", excerpt: "Make moving easier with our detailed move in/out cleaning service." },
  { title: "Maid", image: "/Service_Card_1.png", excerpt: "Trusted maids for regular upkeep and housekeeping." },
  { title: "Cook", image: "/Service_Card_2.png", excerpt: "Experienced cooks to prepare fresh meals at your home." },
  { title: "Baby Sitter", image: "/Get_a_Quote.png", excerpt: "Reliable babysitters who care for your children." },
  { title: "Patient Care", image: "/Service_Card_1.png", excerpt: "Attentive patient care services for recovery and comfort." },
  { title: "Elder Care", image: "/GettyImages-1350786822-1.webp", excerpt: "Compassionate elder care to support daily living." },
  { title: "Driver", image: "/Hero_Background_Image.png", excerpt: "Professional drivers for your transport needs." },
  { title: "Nursing", image: "/GettyImages-1724689200.webp", excerpt: "Qualified nurses for medical and home support." },
  { title: "Security Guard", image: "/GettyImages-1226346559-1.webp", excerpt: "Trained security personnel for residential and commercial sites." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <span className="inline-block px-4 py-2 bg-[#e4f4d2] text-[#3aa724] rounded-full text-sm font-semibold mb-4">
              SERVICES WE PROVIDE
            </span>
            <h1 className="text-4xl md:text-[2.75rem] font-medium text-[#111827] leading-[1.15]">
              Services We Provide
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Choose from a wide range of professional services tailored for homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {services.map((svc, idx) => (
                <motion.article
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="bg-[#f8f9f6] rounded-2xl overflow-hidden shadow-sm border border-white/60 flex flex-col md:flex-row items-stretch"
                >
                  <div className="relative w-full md:w-1/3 h-40 md:h-auto">
                    <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-medium text-[#111827] mb-2">{svc.title}</h3>
                      <p className="text-gray-500 mb-4">{svc.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <Button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-semibold px-6 py-3 rounded-full">
                        Learn more
                      </Button>
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#3aa724]" /> Trusted
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="bg-[#3aa724] text-white rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-2">Booking CTA</h4>
                <p className="text-sm mb-4">Get a free quote or schedule a booking with our easy form.</p>
                <Button className="bg-white text-[#3aa724] font-semibold px-6 py-3 rounded-full">Get a Free Quote</Button>
              </div>

              <div className="bg-[#f8f9f6] rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-4">All Services</h4>
                <div className="grid gap-2">
                  {[
                    "Maid","Cook","Baby Sitter","Baby Massage","Patient Care","Elder Care","Driver","Nursing","Japa Maid","Delivery boy","Security Guard","Housekeeping","Office Support"
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 rounded-md bg-[#e4f4d2] flex items-center justify-center text-[#3aa724] font-bold">{s.charAt(0)}</div>
                      <div className="flex-1 text-sm text-gray-700">{s}</div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3">Why Choose Us</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#3aa724] mt-1"/> Experienced & Vetted Cleaners</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#3aa724] mt-1"/> Eco-friendly supplies</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#3aa724] mt-1"/> Satisfaction guaranteed</li>
                </ul>
              </div>

              <div className="bg-[#f8f9f6] rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-3">Got Questions?</h4>
                <p className="text-sm text-gray-600 mb-4">Check our FAQ or contact support for more details.</p>
                <Button className="bg-[#3aa724] hover:bg-[#2d851c] text-white font-semibold px-6 py-3 rounded-full">Contact Support</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
