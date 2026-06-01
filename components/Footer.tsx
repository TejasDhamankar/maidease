"use client";

import Image from "next/image";
import Link from "next/link";
import { ClipboardList, LayoutGrid, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = ["About Us", "Vision Mission", "Services", "Contact Us", "FAQ", "Our Price"];
const policyLinks = ["Privacy Policy", "Refund Policy", "Terms & Conditions"];
const quickLinkHrefs: Record<string, string> = {
  "About Us": "/about",
  Services: "/services",
  "Contact Us": "/contact",
  "Our Price": "/rate-card",
};
const mobileNavLinks = [
  { label: "Post Your Requirement", href: "/#booking", Icon: ClipboardList },
  { label: "Services", href: "/services", Icon: LayoutGrid },
  { label: "Contact", href: "/contact", Icon: Phone },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-900">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr_1.5fr]">
        <div>
          <div className="mb-4 inline-flex rounded-lg bg-white px-4 py-3 shadow-md border border-gray-100">
            <Image
              src="/logo_website-.png"
              alt="BB HOSPITALITY"
              width={1787}
              height={293}
              className="h-10 w-auto max-w-56 object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Premium maid, care, housekeeping, and hospitality staffing support for modern families and businesses.
          </p>
          <div className="mt-5 text-xs leading-relaxed text-gray-600">
            <p className="font-bold text-gray-900">Working Hours:</p>
            <p>Mon - Sat: 10:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold tracking-tight text-gray-900">Quick Links</h3>
          <div className="h-0.5 w-8 bg-orange-500" />
          <div className="mt-5 grid gap-3 text-sm font-semibold text-gray-600">
            {quickLinks.map((link) => (
              <Link key={link} href={quickLinkHrefs[link] ?? "#"} className="hover:text-gray-900">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold tracking-tight text-gray-900">Quick Links</h3>
          <div className="h-0.5 w-8 bg-orange-500" />
          <div className="mt-5 grid gap-3 text-sm font-semibold text-gray-600">
            {policyLinks.map((link) => (
              <Link key={link} href="#" className="hover:text-gray-900">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold tracking-tight text-gray-900">Official Address</h3>
          <div className="h-0.5 w-8 bg-orange-500" />
          <div className="mt-5 grid gap-3 text-sm font-semibold text-gray-600">
            <p className="flex gap-2 leading-relaxed">
              <MapPin className="mt-1 size-4 shrink-0 text-gray-400" />
              Office No. 1007, 10th Floor, The Landmark, Sector 7, Kharghar, Navi Mumbai, Pin Code - 410210.
            </p>
            <a href="tel:02247173377" className="flex items-center gap-2 hover:text-gray-900">
              <Phone className="size-4 text-gray-400" />
              022 47173377 (Landline)
            </a>
            <a href="tel:+919076354999" className="flex items-center gap-2 hover:text-gray-900">
              <Phone className="size-4 text-gray-400" />
              (+91) 9076354999
            </a>
            <a href="mailto:info@bbhospitality.in" className="flex items-center gap-2 hover:text-gray-900">
              <Mail className="size-4 text-gray-400" />
              info@bbhospitality.in
            </a>
            <a href="mailto:operations@bbhospitality.in" className="flex items-center gap-2 hover:text-gray-900">
              <Mail className="size-4 text-gray-400" />
              operations@bbhospitality.in
            </a>
          </div>
          <div className="mt-5 flex gap-3">
            {["f", "x", "in"].map((label) => (
              <a key={label} href="#" className="flex size-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600 transition hover:bg-orange-500 hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 px-4 py-4 text-center text-xs font-semibold text-gray-500">
        2026 All rights reserved by BB HOSPITALITY.
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 grid h-16 grid-cols-3 border-t border-gray-200 bg-white text-[11px] font-bold text-gray-700 shadow-[0_-8px_30px_rgba(0,0,0,0.05)] md:hidden">
        {mobileNavLinks.map(({ label, href, Icon }) => (
          <Link key={label} href={href} className="flex min-w-0 flex-col items-center justify-center gap-1 px-2 text-center leading-tight hover:bg-gray-50">
            <Icon className="size-4 shrink-0 text-orange-500" />
            <span className="w-full truncate">{label}</span>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
