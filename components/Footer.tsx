"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = ["About Us", "Vision Mission", "Services", "Contact Us", "FAQ", "Our Price"];
const policyLinks = ["Privacy Policy", "Refund Policy", "Terms & Conditions"];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr_1.5fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-blue-950 shadow-lg">
            <span className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-extrabold text-white">
              BB
            </span>
            <span className="font-extrabold">BB HOSPITALITY</span>
          </div>
          <p className="text-sm leading-6 text-blue-100">
            Premium maid, care, housekeeping, and hospitality staffing support for modern families and businesses.
          </p>
          <div className="mt-5 text-xs leading-6 text-blue-100">
            <p className="font-bold text-white">Open Hours:</p>
            <p>Mon - Sat: 9:30am - 6:30pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-extrabold">Quick Links</h3>
          <div className="h-0.5 w-8 bg-yellow-400" />
          <div className="mt-5 grid gap-3 text-sm font-semibold text-blue-100">
            {quickLinks.map((link) => (
              <Link key={link} href={link === "Contact Us" ? "/contact" : "#"} className="hover:text-white">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-extrabold">Quick Links</h3>
          <div className="h-0.5 w-8 bg-yellow-400" />
          <div className="mt-5 grid gap-3 text-sm font-semibold text-blue-100">
            {policyLinks.map((link) => (
              <Link key={link} href="#" className="hover:text-white">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-extrabold">Official Address</h3>
          <div className="h-0.5 w-8 bg-yellow-400" />
          <div className="mt-5 grid gap-3 text-sm font-semibold text-blue-100">
            <p className="flex gap-2 leading-6">
              <MapPin className="mt-1 size-4 shrink-0 text-sky-300" />
              1904, Haware Infotech Park, Opp. Four Points Hotel, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703.
            </p>
            <a href="tel:+919867074050" className="flex items-center gap-2 hover:text-white">
              <Phone className="size-4 text-sky-300" />
              (+91) 9867074050
            </a>
            <a href="mailto:sales@bbhospitality.in" className="flex items-center gap-2 hover:text-white">
              <Mail className="size-4 text-sky-300" />
              sales@bbhospitality.in
            </a>
          </div>
          <div className="mt-5 flex gap-3">
            {["f", "x", "in"].map((label) => (
              <a key={label} href="#" className="flex size-8 items-center justify-center rounded-full bg-white/10 text-xs font-extrabold text-white transition hover:bg-blue-600">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-blue-900 px-4 py-4 text-center text-xs font-semibold text-blue-100">
        2026 All rights reserved by BB HOSPITALITY.
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t border-slate-200 bg-white text-[11px] font-bold text-blue-950 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] md:hidden">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Services", "/services"],
          ["Contact", "/contact"],
        ].map(([label, href]) => (
          <Link key={label} href={href} className="py-3 text-center hover:bg-blue-50">
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
