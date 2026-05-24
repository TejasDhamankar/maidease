"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Apple,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  Play,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/services";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services +", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Our Price", href: "/#services" },
  { name: "Why Choose Us", href: "/#why-choose-us" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_8px_30px_rgba(15,23,42,0.08)]" : "shadow-sm"
      }`}
    >
      <div className="hidden border-b border-slate-100 text-xs font-semibold text-slate-700 lg:block">
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-5">
            <a href="tel:+919867074050" className="flex items-center gap-1.5 hover:text-blue-700">
              <Phone className="size-3.5 text-blue-600" />
              Call: (+91) 9867074050 | 9891122200
            </a>
            <a href="mailto:sales@bbhospitality.in" className="flex items-center gap-1.5 hover:text-blue-700">
              <Mail className="size-3.5 text-blue-600" />
              Mail us: sales@bbhospitality.in
            </a>
            <div className="flex items-center gap-2 text-[11px] text-slate-900">
              <span aria-label="Facebook">f</span>
              <span aria-label="X">x</span>
              <span aria-label="Instagram">in</span>
            </div>
          </div>
          {/* Removed Google Play and App Store buttons */}
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="BB HOSPITALITY home">
          <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-base font-extrabold text-white shadow-lg shadow-blue-600/20">
            BB
          </span>
          <span className="leading-none">
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-rose-500">
              Premium Care
            </span>
            <span className="block text-xl font-extrabold tracking-tight text-blue-950">
              BB HOSPITALITY
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            link.name.startsWith("Services") ? (
              <div
                key={link.name}
                className="group relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className="relative inline-flex items-center gap-1 text-sm font-bold text-blue-950 transition-colors after:absolute after:-bottom-5 after:left-0 after:h-1 after:w-0 after:rounded-full after:bg-blue-600 after:transition-all hover:text-blue-700 group-hover:text-blue-700 group-hover:after:w-full"
                >
                  Services
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div
                  className={`absolute left-1/2 top-[42px] w-[520px] -translate-x-1/2 rounded-b-xl border border-slate-100 bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.16)] transition-all duration-200 ${
                    isServicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {serviceCategories.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold text-blue-950 transition-colors after:absolute after:-bottom-5 after:left-0 after:h-1 after:w-0 after:rounded-full after:bg-blue-600 after:transition-all hover:text-blue-700 hover:after:w-full"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        <Button asChild className="hidden h-10 rounded bg-rose-600 px-5 font-bold text-white shadow-lg shadow-rose-600/20 hover:bg-rose-700 md:inline-flex">
          <Link href="/#booking">I Am Looking For Staff</Link>
        </Button>

        <button
          aria-label="Toggle navigation"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-blue-950 md:hidden"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 md:hidden">
          <div className="grid gap-1 py-3">
            {navLinks.map((link) =>
              link.name.startsWith("Services") ? (
                <div key={link.name}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-bold text-blue-950 hover:bg-blue-50"
                    onClick={() => setIsServicesOpen((value) => !value)}
                  >
                    Services
                    <ChevronDown className={`size-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="ml-3 grid gap-1 border-l border-blue-100 pl-3">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-blue-950 hover:bg-blue-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
          <div className="grid gap-3 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-700">
            <a href="tel:+919867074050" className="flex items-center gap-2">
              <Phone className="size-4 text-blue-600" />
              (+91) 9867074050
            </a>
            <Button asChild className="h-11 rounded bg-gradient-to-r from-blue-600 to-blue-700 font-bold text-white hover:from-blue-700 hover:to-blue-800">
              <Link href="/#booking" onClick={() => setIsMobileMenuOpen(false)}>
                Post Your Requirement
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
