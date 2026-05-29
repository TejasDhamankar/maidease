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
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import LocationInput from "@/components/LocationInput";
import { inquiryServices } from "@/lib/inquiry";

const services = [
  { title: "Maid", slug: "maid", icon: Sparkles, color: "text-lime-600", bg: "bg-lime-100", description: "Daily cleaning and home help." },
  { title: "Cook", slug: "cook", icon: ChefHat, color: "text-amber-500", bg: "bg-amber-100", description: "Fresh meals and kitchen support." },
  { title: "Baby Care & Delivery Service", displayTitle: "Baby Care", slug: "baby-care-delivery-service", icon: Baby, color: "text-orange-500", bg: "bg-orange-100", description: "Japa, childcare, and newborn care." },
  { title: "Patient Care", slug: "patient-care", icon: Ambulance, color: "text-sky-600", bg: "bg-sky-100", description: "Recovery and daily patient support." },
  { title: "Elder Care", slug: "elder-care", icon: UserRoundCheck, color: "text-emerald-600", bg: "bg-emerald-100", description: "Compassionate senior assistance." },
  { title: "Driver", slug: "driver", icon: Car, color: "text-indigo-600", bg: "bg-indigo-100", description: "Personal and office drivers." },
  { title: "Nursing", slug: "nursing", icon: Stethoscope, color: "text-red-500", bg: "bg-red-100", description: "Home nursing care support." },
  { title: "Delivery Boy", slug: "delivery", icon: Bike, color: "text-orange-500", bg: "bg-orange-100", description: "Errands and delivery staffing." },
  { title: "Security Guard", slug: "security-guard", icon: ShieldCheck, color: "text-cyan-600", bg: "bg-cyan-100", description: "Day, night, and site security." },
  { title: "Housekeeping", slug: "housekeeping", icon: Home, color: "text-[#12345b]", bg: "bg-orange-50", description: "Office and home housekeeping." },
  { title: "Office Support", slug: "office-support", icon: ClipboardCheck, color: "text-violet-600", bg: "bg-violet-100", description: "Office boys and support staff." },
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !phone || !location || !service || !urgency) {
      setError("Please fill name, phone number, location, service, and urgency.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, location, service, urgency }),
      });

      if (!response.ok) throw new Error("Failed to submit inquiry");

      setSuccess("Requirement submitted. Our team will contact you shortly.");
      setName("");
      setPhone("");
      setLocation("");
      setService("Maid");
      setUrgency("Urgent Need");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="booking" onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(18,52,91,0.18)] md:p-6">
      <h2 className="mb-5 text-center text-base font-extrabold text-[#12345b]">
        What Do You Want Your Staff To Do?
      </h2>
      <label className="mb-3 block text-xs font-bold uppercase tracking-wide text-[#12345b]/70">
        Select Service
      </label>
      <select
        value={service}
        onChange={(event) => setService(event.target.value)}
        className="mb-4 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-[#12345b] outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
      >
        {inquiryServices.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <div className="grid gap-3">
        {["Urgent Need", "Needed Later", "I'm Just Planning"].map((item) => (
          <label
            key={item}
            className={`flex h-12 cursor-pointer items-center gap-3 rounded-lg border px-4 text-sm font-semibold transition ${
              urgency === item
                ? "border-orange-500 bg-orange-50 text-[#12345b]"
                : "border-slate-200 bg-white text-slate-700 hover:border-orange-300"
            }`}
          >
            <input
              type="radio"
              name="urgency"
              value={item}
              checked={urgency === item}
              onChange={() => setUrgency(item)}
              className="accent-orange-500"
            />
            {item}
          </label>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="h-11 rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
          placeholder="Name"
        />
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="h-11 rounded-lg border border-slate-200 px-4 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
          placeholder="Phone Number"
        />
      </div>
      <div className="mt-3">
        <LocationInput value={location} onChange={setLocation} />
      </div>

      {error ? <p className="mt-3 rounded-lg bg-red-50 p-3 text-center text-xs font-bold text-red-600">{error}</p> : null}
      {success ? <p className="mt-3 rounded-lg bg-orange-50 p-3 text-center text-xs font-bold text-[#12345b]">{success}</p> : null}

      <Button disabled={loading} className="mx-auto mt-5 flex h-10 rounded bg-gradient-to-r from-orange-500 to-orange-600 px-8 font-bold text-white shadow-lg shadow-orange-500/20 hover:from-orange-600 hover:to-orange-700">
        {loading ? "Submitting..." : "Next"}
      </Button>
    </form>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-24 text-slate-900 lg:pt-[96px]">
      <section className="bg-gradient-to-b from-[#12345b] via-[#0f6f9f] to-orange-50 px-4 py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_1.08fr]">
          <div className="text-center md:pr-6">
            <h1 className="mb-5 text-3xl font-extrabold text-white underline decoration-white/80 underline-offset-4 md:text-4xl">
              Why Choose Us
            </h1>
            <div className="relative mx-auto h-64 w-full max-w-[460px] overflow-hidden rounded-xl bg-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:h-80 md:max-w-[540px]">
              <Image src="/Why_Choose_Us.png" alt="BB HOSPITALITY verified staff" fill className="object-cover object-center" priority />
            </div>
            <p className="mt-5 text-xl font-extrabold text-[#12345b]">
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
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href={`/services/${item.slug}`}
                key={item.title}
                className="group flex min-h-44 items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(18,52,91,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_24px_52px_rgba(18,52,91,0.14)]"
              >
                <span className={`flex size-14 shrink-0 items-center justify-center rounded-lg ${item.bg}`}>
                  <Icon className={`size-8 stroke-[2.4] ${item.color}`} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-lg font-black leading-6 text-[#12345b]">
                    {item.displayTitle ?? item.title}
                  </span>
                  <span className="mt-2 min-h-10 text-sm font-semibold leading-5 text-slate-600">
                    {item.description}
                  </span>
                  <span className="mt-4 inline-flex items-center text-sm font-extrabold text-orange-500 transition group-hover:text-orange-600">
                    View Details
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Button className="h-10 rounded bg-gradient-to-r from-orange-500 to-orange-600 px-8 font-bold text-white hover:from-orange-600 hover:to-orange-700">
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
            <h2 className="mb-2 text-3xl font-extrabold text-[#12345b]">Why Choose Us</h2>
            <p className="mb-3 text-sm font-semibold text-slate-700">Do you know what is our utmost priority?</p>
            <p className="mb-4 text-sm leading-7 text-slate-600">
              Ensuring availability 24/7 and prioritizing safety are our paramount concerns. With a compassionate team committed to serving you, BB HOSPITALITY makes hiring maids, cooks, caregivers, and hospitality staff simpler, faster, and more reliable.
            </p>
            <Button className="h-10 rounded bg-gradient-to-r from-orange-500 to-orange-600 px-6 font-bold text-white hover:from-orange-600 hover:to-orange-700">
              Read More
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-8 md:pb-28">
        <div className="relative mx-auto grid max-w-5xl items-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-950 via-[#12345b] to-orange-500 p-8 text-white shadow-xl md:min-h-[300px] md:grid-cols-[1fr_360px] md:p-12">
          <div className="relative z-10">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-orange-200">Verified Staffing</p>
            <h2 className="mb-4 text-3xl font-extrabold">Professional support for every home and workplace</h2>
            <p className="max-w-xl text-sm font-semibold leading-7 text-blue-50">
              Tell us your requirement and we will help you choose reliable staff for the right timing, location, and budget.
            </p>
            <Button asChild className="mt-6 h-11 rounded bg-white px-6 font-extrabold text-[#12345b] hover:bg-orange-50">
              <Link href="#booking">Post Your Requirement</Link>
            </Button>
          </div>
          <div className="relative z-10 mx-auto mt-8 h-80 w-64 md:absolute md:bottom-[-34px] md:right-14 md:mt-0 md:h-[360px] md:w-[280px]">
            <Image src="/Get_a_Quote.png" alt="BB HOSPITALITY mobile app" fill className="rounded-[2rem] object-cover object-center shadow-2xl ring-4 ring-white/15" />
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-orange-500">How It Work?</h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            ["Search", Search, "Use our simple search and tell us what you require in your area."],
            ["Shortlist", BadgeCheck, "View complete profiles and shortlist candidates as per preference."],
            ["Meet, Select & Relax", CalendarDays, "Talk to the candidate, confirm details, and pay after joining."],
          ].map(([title, Icon, text], index) => (
            <div key={title as string} className="relative text-center">
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-white shadow-[0_12px_35px_rgba(37,99,235,0.16)]">
                <Icon className="size-7 text-orange-500" />
              </div>
              <span className="absolute left-1/2 top-10 ml-5 flex size-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-extrabold text-white">
                {index + 1}
              </span>
              <h3 className="mb-3 text-xl font-extrabold text-[#12345b]">{title as string}</h3>
              <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-orange-500" />
              <p className="mx-auto max-w-xs text-sm leading-6 text-slate-600">{text as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-[#12345b]">Why Use BB HOSPITALITY?</h2>
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
          <p className="mb-2 text-sm font-bold text-orange-500">Work Process</p>
          <h2 className="text-3xl font-extrabold text-[#12345b]">We&apos;re Big On Trust & Safety</h2>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="mx-auto mb-8 flex h-16 w-44 items-center justify-center rounded-xl border-8 border-slate-200 bg-[#12345b] text-sm font-extrabold text-white shadow-xl">
            BB HOSPITALITY
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {["Identity Check", "Document Verification", "In-Person Interview", "Training Session"].map((step, index) => (
              <div key={step} className="rounded-lg border border-blue-100 bg-white p-6 text-center shadow-[10px_10px_0_rgba(37,99,235,0.15)]">
                <span className="mx-auto -mt-10 mb-4 flex size-14 items-center justify-center rounded-full border border-orange-100 bg-white text-sm font-extrabold text-[#12345b]">
                  0{index + 1}
                </span>
                <p className="text-sm font-extrabold text-[#12345b]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-orange-50 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-sm font-bold text-orange-500">Testimonial</p>
          <h2 className="mb-10 text-3xl font-extrabold text-[#12345b]">We Are Very Happy For<br />Client&apos;s Review</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {["Salim Shaikh", "Minal More", "Vishal Salve"].map((name, index) => (
              <article key={name} className="bg-white p-6 shadow-sm">
                <div className="mb-3 text-6xl font-black leading-none text-slate-300">&quot;</div>
                <p className="mb-5 text-sm leading-6 text-[#12345b]">
                  BB HOSPITALITY helped us with reliable staff on time. The team was professional, responsive, and the service quality was excellent.
                </p>
                <div className="mb-5 flex text-yellow-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
                <div className="flex items-center gap-3">
                  <div className="relative size-12 overflow-hidden rounded-full bg-blue-50">
                    <Image src={index === 1 ? "/Service_Card_2.png" : "/Service_Card_1.png"} alt={name} fill className="object-cover" />
                  </div>
                  <strong className="text-sm text-[#12345b]">{name}</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {[0, 1, 2, 3].map((dot) => <span key={dot} className={`size-2 rounded-full ${dot === 2 ? "bg-orange-500 ring-2 ring-orange-500/30" : "bg-slate-400"}`} />)}
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,0.16)] md:p-6">
          <div className="grid gap-5 md:grid-cols-[180px_1fr]">
            <div className="rounded bg-orange-50 p-3 text-sm font-semibold text-[#12345b]">
              {["Western Suburbs", "South Mumbai", "Central Mumbai", "Harbour Suburbs", "Notable Pocket Areas"].map((area, index) => (
                <div key={area} className={`rounded px-3 py-3 ${index === 0 ? "bg-orange-200" : ""}`}>{area}</div>
              ))}
            </div>
            <div className="grid gap-x-8 gap-y-4 text-xs font-bold text-[#12345b] sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((item) => <Link href="/services/maid" key={item} className="hover:text-orange-600">{item}</Link>)}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button className="h-9 rounded bg-orange-500 px-8 text-xs font-bold text-white hover:bg-orange-600">View all location</Button>
        </div>
      </section>

      <section className="px-4 pb-16">
        <h2 className="mx-auto mb-5 max-w-5xl text-2xl font-extrabold text-[#12345b]">Our Services</h2>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Elder Care", "elder-care", "/GettyImages-1226346559-1.webp"],
            ["Driver", "driver", "/GettyImages-1456829834.webp"],
            ["Nursing", "nursing", "/GettyImages-1724689200.webp"],
            ["Baby Care & Delivery Service", "baby-care-delivery-service", "/GettyImages-1350786822-1.webp"],
          ].map(([title, slug, image]) => (
            <Link href={`/services/${slug}`} key={title} className="overflow-hidden rounded-lg bg-[#12345b] shadow-sm">
              <div className="relative h-40">
                <Image src={image} alt={title} fill className="object-cover transition hover:scale-105" />
              </div>
              <h3 className="py-3 text-center text-sm font-extrabold text-white">{title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <Footer />

      <div className="fixed bottom-20 right-5 z-40 grid gap-3 md:bottom-5">
        <a href="#top" aria-label="Back to top" className="flex size-11 items-center justify-center rounded bg-orange-500 text-white shadow-lg">
          <ArrowUp className="size-5" />
        </a>
        <a href="https://wa.me/919076354999" aria-label="WhatsApp" className="flex size-12 items-center justify-center rounded-full bg-[#12345b] text-white shadow-lg">
          <MessageCircle className="size-6" />
        </a>
      </div>
    </main>
  );
}
