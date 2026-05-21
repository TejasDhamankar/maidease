"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      label: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M14 8.5h2V5h-2.4C10.8 5 9 6.8 9 9.8V12H6v3.5h3V23h4v-7.5h2.8l.5-3.5H13v-1.9c0-1.1.4-1.6 1-1.6Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[2]">
          <rect width="16" height="16" x="4" y="4" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17" cy="7" r="1" className="fill-current stroke-none" />
        </svg>
      ),
    },
    {
      label: "X",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M14.2 10.4 21.7 2h-2.9l-5.9 6.6L8.2 2H2l7.8 11-7.9 9h2.9l6.3-7.2 5.1 7.2h6.2l-8.2-11.6Zm-2 2.3-1.3-1.8L5.8 4.2h1.3l4.8 6.3 1.3 1.8 5.4 7.4h-1.3l-5.1-7Z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M21.5 7.2a3 3 0 0 0-2.1-2.1C17.5 4.6 12 4.6 12 4.6s-5.5 0-7.4.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.4.5 7.4.5s5.5 0 7.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.5-4.8ZM10 15.4V8.6l5.8 3.4L10 15.4Z" />
        </svg>
      ),
    },
  ];
  const services = [
    "Maid",
    "Cook",
    "Baby Sitter",
    "Baby Massage",
    "Patient Care",
    "Elder Care",
    "Driver",
    "Nursing",
    "Japa Maid",
    "Delivery boy",
    "Security Guard",
    "Housekeeping",
    "Office Support",
  ];

  return (
    <footer className="bg-[#e4f4d2] pt-20 pb-8 rounded-t-[3rem] px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section: Goal, Newsletter, Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Goal */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-medium text-gray-900 mb-8 leading-tight">
              Our Goal is to Wow You With Every Clean
            </h2>
            <Button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-semibold px-8 py-6 rounded-full text-base transition-transform hover:scale-105">
              Get a Free Quote
            </Button>
            <div className="mt-8 opacity-60">
                <Image src="/footer-leafs-2.webp" alt="leaf" width={40} height={40} />
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-6">SERVICES</h4>
            {services.map((service) => (
              <a key={service} href="#" className="block text-gray-600 hover:text-[#3aa724] transition-colors">{service}</a>
            ))}
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-6">CONTACT INFO</h4>
            <p className="text-gray-600">72 Kneeland St, Suite 305, <br/> New York, MA 02111</p>
            <div className="bg-white inline-flex items-center gap-3 px-4 py-2 rounded-full shadow-sm">
                <div className="bg-[#fbbf24] p-2 rounded-full"><span className="text-sm">📞</span></div>
                <span className="font-semibold">+ 1 (180) 567-8990</span>
            </div>
            <a href="mailto:contact@clanyeco.com" className="block text-[#3aa724] font-medium underline">contact@clanyeco.com</a>
          </div>

          {/* Column 4: Newsletter/Working Hours */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-6">WORKING HOURS</h4>
            <div className="text-gray-600 space-y-2">
                <p>Mon – Fri: <span className="font-medium">9.00am – 8.00pm</span></p>
                <p>Saturday: <span className="font-medium">10.00am – 8.00pm</span></p>
                <p>Sunday: <span className="font-medium">10.00am – 4.00pm</span></p>
            </div>
            
            <div className="pt-6">
                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-4">SUBSCRIBE TO OUR NEWSLETTER</h4>
                <div className="flex gap-2">
                    <Input placeholder="Enter our email address" className="bg-white rounded-full border-none shadow-sm" />
                    <Button className="bg-[#3aa724] hover:bg-[#2d851c] text-white rounded-full px-6">Subscribe</Button>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/10 gap-6">
          <p className="text-sm text-gray-500">© 2026 VamTam. All Rights Reserved</p>
          <div className="flex gap-4 text-gray-600">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-700 transition-colors hover:bg-[#3aa724] hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
