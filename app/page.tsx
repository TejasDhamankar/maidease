"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Ambulance,
  ArrowUp,
  Baby,
  BadgeCheck,
  Bike,
  CalendarDays,
  Car,
  ChefHat,
  ClipboardCheck,
  Home,
  MessageCircle,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const services = [
  { title: "Maid", slug: "maid", icon: Sparkles, color: "text-lime-600", bg: "bg-lime-100", ring: "group-hover:ring-lime-200" },
  { title: "Cook", slug: "cook", icon: ChefHat, color: "text-amber-500", bg: "bg-amber-100", ring: "group-hover:ring-amber-200" },
  { title: "Baby Care & Delivery Service", displayTitle: "Baby Care", slug: "baby-care-delivery-service", icon: Baby, color: "text-rose-500", bg: "bg-rose-100", ring: "group-hover:ring-rose-200" },
  { title: "Patient Care", slug: "patient-care", icon: Ambulance, color: "text-sky-600", bg: "bg-sky-100", ring: "group-hover:ring-sky-200" },
  { title: "Elder Care", slug: "elder-care", icon: UserRoundCheck, color: "text-emerald-600", bg: "bg-emerald-100", ring: "group-hover:ring-emerald-200" },
  { title: "Driver", slug: "driver", icon: Car, color: "text-indigo-600", bg: "bg-indigo-100", ring: "group-hover:ring-indigo-200" },
  { title: "Nursing", slug: "nursing", icon: Stethoscope, color: "text-red-500", bg: "bg-red-100", ring: "group-hover:ring-red-200" },
  { title: "Delivery Boy", slug: "delivery", icon: Bike, color: "text-orange-500", bg: "bg-orange-100", ring: "group-hover:ring-orange-200" },
  { title: "Security Guard", slug: "security-guard", icon: ShieldCheck, color: "text-cyan-600", bg: "bg-cyan-100", ring: "group-hover:ring-cyan-200" },
  { title: "Housekeeping", slug: "housekeeping", icon: Home, color: "text-blue-600", bg: "bg-blue-100", ring: "group-hover:ring-blue-200" },
  { title: "Office Support", slug: "office-support", icon: ClipboardCheck, color: "text-violet-600", bg: "bg-violet-100", ring: "group-hover:ring-violet-200" },
];

const benefits = [
  {
    title: "Quick & Easy",
    image: "/GettyImages-1456829834.webp",
    text: "No waiting for interviews. Search, view profiles, shortlist, and book faster.",
  },
  {
    title: "High Quality",
    image: "/GettyImages-1724689200.webp",
    text: "Trained hospitality staff for homes, apartments, offices, and care needs.",
  },
  {
    title: "Safe & Reliable",
    image: "/GettyImages-1226346559-1.webp",
    text: "Identity checks, document verification, and guided onboarding for every candidate.",
  },
  {
    title: "Free Replacement",
    image: "/GettyImages-1350786822-1.webp",
    text: "If a staff member leaves within the service window, we help you replace them.",
  },
  {
    title: "Multiple Options",
    image: "/Service_Card_1.png",
    text: "Review multiple profiles and select the candidate that fits your home best.",
  },
  {
    title: "Service First",
    image: "/Service_Card_2.png",
    text: "A dedicated team supports you before booking and after joining.",
  },
];

const locations = [
  "Maid Services In Malad",
  "Maid Services In Andheri",
  "Maid Services In Mira Road",
  "Maid Services In Mahim",
  "Maid Services In Bandra",
  "Maid Services In Santacruz",
  "Maid Services In Vile Parle",
  "Maid Services In Jogeshwari",
  "Maid Services In Goregaon",
  "Baby Care & Delivery Service In Borivali",
  "Baby Care & Delivery Service In Vasai",
  "Baby Care & Delivery Service In Virar",
  "Cook Services In Malad",
  "Cook Services In Andheri",
  "Cook Services In Bandra",
  "Cook Services In Kandivali",
  "Cook Services In Dahisar",
  "Cook Services In Bhayandar",
  "Patient Care In Mumbai",
  "Driver Services In Mumbai",
  "Housekeeping Services In Mumbai",
];

function BookingCard() {
  const [service, setService] = useState("Maid");
  const [urgency, setUrgency] = useState("Urgent Need");

  return (
    <form id="booking" className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.16)] md:p-6">
      <h2 className="mb-5 text-center text-base font-extrabold text-blue-950">
        What Do You Want Your Staff To Do?
      </h2>
      <label className="mb-3 block text-xs font-bold uppercase tracking-wide text-slate-500">
        Select Service
      </label>
      <select
        value={service}
        onChange={(event) => setService(event.target.value)}
        className="mb-4 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
      >
        {services.map((item) => (
          <option key={item.title}>{item.title}</option>
        ))}
      </select>

      <div className="grid gap-3">
        {["Urgent Need", "Needed Later", "I'm Just Planning"].map((item) => (
          <label
            key={item}
            className={`flex h-12 cursor-pointer items-center gap-3 rounded-lg border px-4 text-sm font-semibold transition ${
              urgency === item
                ? "border-blue-600 bg-blue-50 text-blue-950"
                : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
            }`}
          >
            <input
              type="radio"
              name="urgency"
              value={item}
              checked={urgency === item}
              onChange={() => setUrgency(item)}
              className="accent-blue-600"
            />
            {item}
          </label>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input className="h-11 rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-blue-600" placeholder="Name" />
        <input className="h-11 rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-blue-600" placeholder="Phone" />
      </div>
      <Button className="mx-auto mt-5 flex h-10 rounded bg-gradient-to-r from-blue-600 to-blue-700 px-8 font-bold text-white shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-blue-800">
        Next
      </Button>
    </form>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-24 text-slate-900 lg:pt-[96px]">
      <section className="bg-gradient-to-b from-sky-400 to-sky-50 px-4 py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_1.08fr]">
          <div className="text-center md:pr-6">
            <h1 className="mb-5 text-3xl font-extrabold text-white underline decoration-white/80 underline-offset-4 md:text-4xl">
              Why Choose Us
            </h1>
            <div className="relative mx-auto h-64 w-full max-w-[460px] overflow-hidden rounded-xl bg-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:h-80 md:max-w-[540px]">
              <Image src="/Why_Choose_Us.png" alt="BB HOSPITALITY verified staff" fill className="object-cover object-center" priority />
            </div>
            <p className="mt-5 text-xl font-extrabold text-blue-950">
              Trained By Experts, Candidates
            </p>
          </div>
          <BookingCard />
        </div>
      </section>

      <section id="services" className="bg-gradient-to-b from-white via-slate-50 to-white px-4 py-16">
        <h2 className="text-center text-4xl font-black tracking-normal text-orange-500 md:text-5xl">
          Our Services
        </h2>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 justify-items-center gap-x-3 gap-y-5 sm:grid-cols-3 md:gap-x-5 lg:grid-cols-6 lg:gap-y-0">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                href={`/services/${item.slug}`}
                key={item.title}
                className={`group flex h-40 w-40 flex-col items-center justify-center gap-4 bg-white text-center shadow-[0_20px_45px_rgba(15,23,42,0.10)] ring-0 transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(15,23,42,0.14)] hover:ring-4 sm:h-44 sm:w-44 ${item.ring} ${
                  index >= 6 ? "lg:-mt-8" : ""
                } ${index >= 10 ? "lg:col-start-3" : ""}`}
                style={{ clipPath: "polygon(50% 0%, 96% 25%, 96% 75%, 50% 100%, 4% 75%, 4% 25%)" }}
              >
                <span className={`flex size-16 items-center justify-center rounded-2xl ${item.bg}`}>
                  <Icon className={`size-10 stroke-[2.6] ${item.color}`} />
                </span>
                <span className="max-w-28 text-[15px] font-black leading-tight text-[#0b6fae]">
                  {item.displayTitle ?? item.title}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Button className="h-10 rounded bg-gradient-to-r from-blue-600 to-sky-500 px-8 font-bold text-white hover:from-blue-700 hover:to-blue-600">
            View More
          </Button>
        </div>
      </section>

      <section id="why-choose-us" className="px-4 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto h-72 w-full max-w-md">
            <Image src="/Service_Card_1.png" alt="Choosing trained hospitality staff" fill className="object-contain" />
          </div>
          <div>
            <h2 className="mb-2 text-3xl font-extrabold text-blue-950">Why Choose Us</h2>
            <p className="mb-3 text-sm font-semibold text-slate-700">Do you know what is our utmost priority?</p>
            <p className="mb-4 text-sm leading-7 text-slate-600">
              Ensuring availability 24/7 and prioritizing safety are our paramount concerns. With a compassionate team committed to serving you, BB HOSPITALITY makes hiring maids, cooks, caregivers, and hospitality staff simpler, faster, and more reliable.
            </p>
            <Button className="h-10 rounded bg-gradient-to-r from-blue-600 to-blue-700 px-6 font-bold text-white hover:from-blue-700 hover:to-blue-800">
              Read More
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-8 md:pb-28">
        <div className="relative mx-auto grid max-w-5xl items-center overflow-visible rounded-lg bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-8 text-white shadow-xl md:min-h-[300px] md:grid-cols-[1fr_360px] md:p-12">
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-extrabold">Now Available On</h2>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-4 font-bold text-slate-900"><Play className="size-5 text-blue-600" /> Google Play</span>
              <span className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-4 font-bold text-slate-900">App Store</span>
            </div>
          </div>
          <div className="relative z-10 mx-auto mt-8 h-80 w-64 md:absolute md:bottom-[-34px] md:right-14 md:mt-0 md:h-[360px] md:w-[280px]">
            <Image src="/Get_a_Quote.png" alt="BB HOSPITALITY mobile app" fill className="rounded-[2rem] object-cover object-center shadow-2xl ring-4 ring-white/15" />
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-rose-500">How It Work?</h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            ["Search", Search, "Use our simple search and tell us what you require in your area."],
            ["Shortlist", BadgeCheck, "View complete profiles and shortlist candidates as per preference."],
            ["Meet, Select & Relax", CalendarDays, "Talk to the candidate, confirm details, and pay after joining."],
          ].map(([title, Icon, text], index) => (
            <div key={title as string} className="relative text-center">
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-white shadow-[0_12px_35px_rgba(37,99,235,0.16)]">
                <Icon className="size-7 text-blue-600" />
              </div>
              <span className="absolute left-1/2 top-10 ml-5 flex size-5 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-extrabold text-blue-950">
                {index + 1}
              </span>
              <h3 className="mb-3 text-xl font-extrabold text-blue-950">{title as string}</h3>
              <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-rose-500" />
              <p className="mx-auto max-w-xs text-sm leading-6 text-slate-600">{text as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-blue-950">Why Use BB HOSPITALITY?</h2>
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <article key={item.title} className="grid grid-cols-[110px_1fr] items-center overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition hover:-translate-y-1">
              <div className="relative h-full min-h-28 overflow-hidden rounded-r-[60px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-extrabold text-slate-950">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-700">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fffaf7] px-4 py-16">
        <div className="text-center">
          <p className="mb-2 text-sm font-bold text-rose-500">Work Process</p>
          <h2 className="text-3xl font-extrabold text-blue-950">We&apos;re Big On Trust & Safety</h2>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="mx-auto mb-8 flex h-16 w-44 items-center justify-center rounded-xl border-8 border-slate-200 bg-blue-600 text-sm font-extrabold text-white shadow-xl">
            BB HOSPITALITY
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {["Identity Check", "Document Verification", "In-Person Interview", "Training Session"].map((step, index) => (
              <div key={step} className="rounded-lg border border-blue-100 bg-white p-6 text-center shadow-[10px_10px_0_rgba(37,99,235,0.15)]">
                <span className="mx-auto -mt-10 mb-4 flex size-14 items-center justify-center rounded-full border border-blue-100 bg-white text-sm font-extrabold text-blue-950">
                  0{index + 1}
                </span>
                <p className="text-sm font-extrabold text-blue-950">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-sky-100 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-sm font-bold text-blue-600">Testimonial</p>
          <h2 className="mb-10 text-3xl font-extrabold text-blue-950">We Are Very Happy For<br />Client&apos;s Review</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {["Salim Shaikh", "Minal More", "Vishal Salve"].map((name, index) => (
              <article key={name} className="bg-white p-6 shadow-sm">
                <div className="mb-3 text-6xl font-black leading-none text-slate-300">&quot;</div>
                <p className="mb-5 text-sm leading-6 text-blue-950">
                  BB HOSPITALITY helped us with reliable staff on time. The team was professional, responsive, and the service quality was excellent.
                </p>
                <div className="mb-5 flex text-yellow-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
                <div className="flex items-center gap-3">
                  <div className="relative size-12 overflow-hidden rounded-full bg-blue-50">
                    <Image src={index === 1 ? "/Service_Card_2.png" : "/Service_Card_1.png"} alt={name} fill className="object-cover" />
                  </div>
                  <strong className="text-sm text-blue-950">{name}</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {[0, 1, 2, 3].map((dot) => <span key={dot} className={`size-2 rounded-full ${dot === 2 ? "bg-blue-600 ring-2 ring-blue-600/30" : "bg-slate-400"}`} />)}
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,0.16)] md:p-6">
          <div className="grid gap-5 md:grid-cols-[180px_1fr]">
            <div className="rounded bg-sky-100 p-3 text-sm font-semibold text-blue-950">
              {["Western Suburbs", "South Mumbai", "Central Mumbai", "Harbour Suburbs", "Notable Pocket Areas"].map((area, index) => (
                <div key={area} className={`rounded px-3 py-3 ${index === 0 ? "bg-sky-300" : ""}`}>{area}</div>
              ))}
            </div>
            <div className="grid gap-x-8 gap-y-4 text-xs font-bold text-blue-700 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((item) => <Link href="/services/maid" key={item} className="hover:text-rose-600">{item}</Link>)}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button className="h-9 rounded bg-rose-600 px-8 text-xs font-bold text-white hover:bg-rose-700">View all location</Button>
        </div>
      </section>

      <section className="px-4 pb-16">
        <h2 className="mx-auto mb-5 max-w-5xl text-2xl font-extrabold text-blue-950">Our Services</h2>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Elder Care", "elder-care", "/GettyImages-1226346559-1.webp"],
            ["Driver", "driver", "/GettyImages-1456829834.webp"],
            ["Nursing", "nursing", "/GettyImages-1724689200.webp"],
            ["Baby Care & Delivery Service", "baby-care-delivery-service", "/GettyImages-1350786822-1.webp"],
          ].map(([title, slug, image]) => (
            <Link href={`/services/${slug}`} key={title} className="overflow-hidden rounded-lg bg-blue-950 shadow-sm">
              <div className="relative h-40">
                <Image src={image} alt={title} fill className="object-cover transition hover:scale-105" />
              </div>
              <h3 className="py-3 text-center text-sm font-extrabold text-white">{title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <Footer />

      <div className="fixed bottom-5 right-5 z-40 grid gap-3">
        <a href="#top" aria-label="Back to top" className="flex size-11 items-center justify-center rounded bg-orange-500 text-white shadow-lg">
          <ArrowUp className="size-5" />
        </a>
        <a href="https://wa.me/919076354999" aria-label="WhatsApp" className="flex size-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
          <MessageCircle className="size-6" />
        </a>
      </div>
      <a href="#booking" className="fixed bottom-0 left-0 z-40 rounded-tr-md bg-rose-600 px-4 py-2 text-xs font-extrabold text-white shadow-lg">
        Post Your Requirement
      </a>
    </main>
  );
}
