"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Baby,
  BadgeCheck,
  Bike,
  CalendarDays,
  ChevronDown,
  Clock3,
  Clipboard,
  BriefcaseBusiness,
  Building2,
  CarFront,
  CookingPot,
  Gauge,
  HandHeart,
  HeartPulse,
  Hospital,
  MessageCircle,
  Mars,
  PackageCheck,
  Search,
  ShieldCheck,
  SprayCan,
  Star,
  Venus,
  User,
  MapPin,
  Clock,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import LocationInput from "@/components/LocationInput";
import { inquiryServices } from "@/lib/inquiry";

const services = [
  // ... (rest of services)

  { title: "Maid", slug: "maid", icon: SprayCan, color: "text-emerald-700", bg: "bg-emerald-50", description: "Daily cleaning and home help." },
  { title: "Cook", slug: "cook", icon: CookingPot, color: "text-amber-700", bg: "bg-amber-50", description: "Fresh meals and kitchen support." },
  { title: "Baby Care & Delivery Service", displayTitle: "Baby Care", slug: "baby-care-delivery-service", icon: Baby, color: "text-orange-700", bg: "bg-orange-50", description: "Japa, childcare, and newborn care." },
  { title: "Patient Care", slug: "patient-care", icon: Hospital, color: "text-sky-700", bg: "bg-sky-50", description: "Recovery and daily patient support." },
  { title: "Elder Care", slug: "elder-care", icon: HandHeart, color: "text-teal-700", bg: "bg-teal-50", description: "Compassionate senior assistance." },
  { title: "Driver", slug: "driver", icon: CarFront, color: "text-indigo-700", bg: "bg-indigo-50", description: "Personal and office drivers." },
  { title: "Nursing", slug: "nursing", icon: HeartPulse, color: "text-rose-700", bg: "bg-rose-50", description: "Home nursing care support." },
  { title: "Delivery Boy", slug: "delivery", icon: PackageCheck, color: "text-orange-700", bg: "bg-orange-50", description: "Errands and delivery staffing." },
  { title: "Security Guard", slug: "security-guard", icon: ShieldCheck, color: "text-cyan-700", bg: "bg-cyan-50", description: "Day, night, and site security." },
  { title: "Housekeeping", slug: "housekeeping", icon: Building2, color: "text-slate-700", bg: "bg-slate-50", description: "Office and home housekeeping." },
  { title: "Office Support", slug: "office-support", icon: BriefcaseBusiness, color: "text-violet-700", bg: "bg-violet-50", description: "Office boys and support staff." },
];

const benefits = [
  {
    title: "Quick & Easy",
    image: "/images/Maid Service.jpeg",
    text: "No waiting for interviews. Search, view profiles, shortlist, and book faster.",
  },
  {
    title: "High Quality",
    image: "/images/🧹 Housekeeping Staff.jpeg",
    text: "Trained hospitality staff for homes, apartments, offices, and care needs.",
  },
  {
    title: "Safe & Reliable",
    image: "/images/👨‍👩‍👧‍👦 Happy Family (Main Hero Image).jpeg",
    text: "Identity checks, document verification, and guided onboarding for every candidate.",
  },
  {
    title: "Free Replacement",
    image: "/images/👨‍💼 Office Boy.jpeg",
    text: "If a staff member leaves within the service window, we help you replace them.",
  },
  {
    title: "Multiple Options",
    image: "/images/👶 Babysitter.jpeg",
    text: "Review multiple profiles and select the candidate that fits your home best.",
  },
  {
    title: "Service First",
    image: "/images/🩺 Patient Care.jpeg",
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
  const [step, setStep] = useState(1);
  const [service, setService] = useState("Maid");
  const [urgency, setUrgency] = useState("Urgent Need");
  const [genderPreference, setGenderPreference] = useState("Female");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [hours, setHours] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const urgencyOptions = [
    { label: "Urgent Need", Icon: Gauge, desc: "Immediate assistance" },
    { label: "Needed Later", Icon: Clock3, desc: "Plan for next few days" },
    { label: "I'm Just Planning", Icon: Clipboard, desc: "Exploring options" },
  ];
  const genderOptions = [
    { label: "Male", Icon: Mars },
    { label: "Female", Icon: Venus },
  ];

  const goNext = () => {
    setError("");
    setSuccess("");
    if (step === 1 && (!service || !urgency)) {
      setError("Please select service and requirement timing.");
      return;
    }
    if (step === 2 && !genderPreference) {
      setError("Please select preferred gender.");
      return;
    }
    setStep((current) => Math.min(current + 1, 3));
  };

  const goPrevious = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!phone || !name || !location || !hours) {
      setError("Please fill mobile number, name, location, and required hours.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10 digit mobile number.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          location,
          service,
          urgency,
          genderPreference,
          hours,
          message,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit inquiry");

      setSuccess("Requirement submitted. Our team will contact you shortly.");
      setName("");
      setPhone("");
      setLocation("");
      setHours("");
      setMessage("");
      setService("Maid");
      setUrgency("Urgent Need");
      setGenderPreference("Female");
      setStep(1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <form
      id="booking"
      onSubmit={handleSubmit}
      className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200/60 bg-[#fcfcfd] p-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 w-full bg-slate-100">
        <motion.div
          initial={{ width: "33.33%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-full bg-orange-500"
        />
      </div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait" custom={step}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Choose your service
                </h2>
                <p className="mt-2 text-slate-500">Tell us what you need help with today.</p>
              </div>

              <div className="space-y-4">
                <div className="group relative">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Select Category
                  </label>
                  <div className="relative">
                    <select
                      value={service}
                      onChange={(event) => setService(event.target.value)}
                      className="h-14 w-full appearance-none rounded-xl border border-slate-200 bg-white px-12 text-base font-medium text-slate-900 outline-none transition-all focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5"
                    >
                      {inquiryServices.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <Bike className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-orange-500" />
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div className="grid gap-3">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    How urgent is this?
                  </label>
                  {urgencyOptions.map(({ label, Icon, desc }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setUrgency(label)}
                      className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                        urgency === label
                          ? "border-orange-500 bg-orange-50/30 ring-4 ring-orange-500/5"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className={`flex size-10 items-center justify-center rounded-lg ${
                        urgency === label ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-500"
                      }`}>
                        <Icon className="size-5" />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-semibold ${urgency === label ? "text-slate-900" : "text-slate-700"}`}>
                          {label}
                        </p>
                        <p className="text-xs text-slate-400">{desc}</p>
                      </div>
                      <div className={`size-5 rounded-full border-2 transition-all ${
                        urgency === label ? "border-orange-500 bg-orange-500" : "border-slate-200 bg-transparent"
                      }`}>
                        {urgency === label && (
                          <div className="m-auto size-1.5 rounded-full bg-white mt-1" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  type="button"
                  onClick={goNext}
                  className="h-12 w-full rounded-xl bg-orange-500 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600 hover:shadow-orange-500/30 active:scale-[0.98] sm:w-32"
                >
                  Next step
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Gender Preference
                </h2>
                <p className="mt-2 text-slate-500">Do you have a specific preference?</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {genderOptions.map(({ label, Icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setGenderPreference(label)}
                    className={`group relative flex flex-col items-center gap-4 rounded-2xl border p-8 transition-all duration-200 ${
                      genderPreference === label
                        ? "border-orange-500 bg-orange-50/30 ring-4 ring-orange-500/5"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                    }`}
                  >
                    <div className={`flex size-16 items-center justify-center rounded-2xl transition-all ${
                      genderPreference === label ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                    }`}>
                      <Icon className="size-8" />
                    </div>
                    <span className={`text-base font-semibold ${
                      genderPreference === label ? "text-slate-900" : "text-slate-600"
                    }`}>
                      {label}
                    </span>
                    {genderPreference === label && (
                      <motion.div
                        layoutId="active-gender"
                        className="absolute top-3 right-3"
                      >
                        <BadgeCheck className="size-5 text-orange-500" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-between">
                <Button
                  type="button"
                  onClick={goPrevious}
                  variant="outline"
                  className="h-12 w-full rounded-xl border-slate-200 font-semibold text-slate-600 hover:bg-slate-50 sm:w-32"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={goNext}
                  className="h-12 w-full rounded-xl bg-orange-500 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600 sm:w-32"
                >
                  Next step
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Contact Details
                </h2>
                <p className="mt-2 text-slate-500">We'll get back to you with the best matches.</p>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                    <div className="flex h-12 w-full items-center rounded-xl border border-slate-200 bg-white pl-12 pr-4 overflow-hidden focus-within:border-orange-500/50 focus-within:ring-4 focus-within:ring-orange-500/5">
                      <span className="mr-2 text-xs font-bold text-slate-400">+91</span>
                      <input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))}
                        className="w-full text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                        placeholder="Mobile Number"
                        inputMode="numeric"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400 z-10" />
                  <LocationInput
                    value={location}
                    onChange={setLocation}
                    placeholder="Where do you need the service?"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5"
                  />
                </div>

                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                  <input
                    value={hours}
                    onChange={(event) => setHours(event.target.value)}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5"
                    placeholder="Daily working hours required?"
                  />
                </div>

                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="min-h-24 w-full rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5"
                  placeholder="Any specific requirements or instructions?"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                <Button
                  type="button"
                  onClick={goPrevious}
                  variant="outline"
                  className="h-12 w-full rounded-xl border-slate-200 font-semibold text-slate-600 hover:bg-slate-50 sm:w-32"
                >
                  Back
                </Button>
                <Button
                  disabled={loading}
                  className="group h-12 w-full rounded-xl bg-slate-900 font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 sm:w-48"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="size-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Submit Requirement
                      <Send className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Messages */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="border-t border-red-100 bg-red-50/50 p-4 text-center text-sm font-medium text-red-600"
          >
            {error}
          </motion.div>
        )}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="border-t border-emerald-100 bg-emerald-50/50 p-4 text-center text-sm font-medium text-emerald-700"
          >
            {success}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-24 text-gray-900 lg:pt-[96px]">
      <section className="bg-gradient-to-b from-[#12345b] via-[#0f6f9f] to-orange-50 px-4 py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_1.08fr]">
          <div className="text-center md:pr-6">
            <h1 className="mb-5 text-3xl font-bold tracking-tight text-white underline decoration-white/80 underline-offset-4 md:text-4xl">
              Why Choose Us
            </h1>
            <div className="relative mx-auto aspect-square w-full max-w-[400px] overflow-hidden rounded-xl bg-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <Image src="/images/👨‍👩‍👧‍👦 Happy Family (Main Hero Image).jpeg" alt="BB HOSPITALITY verified staff" fill className="object-contain object-center" priority />
            </div>
            <p className="mt-5 text-xl font-semibold text-gray-900">
              Trained By Experts, Candidates
            </p>
          </div>
          <BookingCard />
        </div>
      </section>

      <section id="services" className="bg-gradient-to-b from-white via-slate-50 to-white px-4 py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-orange-500 md:text-5xl">
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
                <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${item.bg} ring-1 ring-slate-200/70`}>
                  <Icon className={`size-6 stroke-[2.1] ${item.color}`} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-lg font-semibold tracking-tight leading-6 text-gray-900">
                    {item.displayTitle ?? item.title}
                  </span>
                  <span className="mt-2 min-h-10 text-sm font-normal leading-relaxed text-gray-600">
                    {item.description}
                  </span>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-orange-500 transition group-hover:text-orange-600">
                    View Details
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services">
          <Button className="h-10 rounded bg-gradient-to-r from-orange-500 to-orange-600 px-8 font-semibold text-white hover:from-orange-600 hover:to-orange-700">
            View More
          </Button>
          </Link>
        </div>
      </section>

      <section id="why-choose-us" className="px-4 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl bg-slate-50">
            <Image src="/images/👨‍💼 Office Boy.jpeg" alt="Choosing trained hospitality staff" fill className="object-contain" />
          </div>
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">Why Choose Us</h2>
            <p className="mb-3 text-sm font-semibold leading-relaxed text-gray-700">Do you know what is our utmost priority?</p>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              Ensuring availability 24/7 and prioritizing safety are our paramount concerns. With a compassionate team committed to serving you, BB HOSPITALITY makes hiring maids, cooks, caregivers, and hospitality staff simpler, faster, and more reliable.
            </p>
            <Button className="h-10 rounded bg-gradient-to-r from-orange-500 to-orange-600 px-6 font-semibold text-white hover:from-orange-600 hover:to-orange-700">
              Read More
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-8 md:pb-28">
        <div className="relative mx-auto grid max-w-5xl items-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-950 via-[#12345b] to-orange-500 p-8 text-white shadow-xl md:min-h-[300px] md:grid-cols-[1fr_360px] md:p-12">
          <div className="relative z-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">Verified Staffing</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Professional support for every home and workplace</h2>
            <p className="max-w-xl text-sm font-normal leading-relaxed text-blue-50">
              Tell us your requirement and we will help you choose reliable staff for the right timing, location, and budget.
            </p>
            <Button asChild className="mt-6 h-11 rounded bg-white px-6 font-semibold text-gray-900 hover:bg-orange-50">
              <Link href="#booking">Post Your Requirement</Link>
            </Button>
          </div>
          <div className="relative z-10 mx-auto mt-8 aspect-square w-72 max-w-full overflow-hidden rounded-[2rem] bg-white/10 md:absolute md:bottom-[-34px] md:right-10 md:mt-0 md:w-[330px]">
            <Image src="/images/Maid Service.jpeg" alt="BB HOSPITALITY home staffing support" fill className="rounded-[2rem] object-contain object-center shadow-2xl ring-4 ring-white/15" />
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-orange-500">How It Work?</h2>
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
              <span className="absolute left-1/2 top-10 ml-5 flex size-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900">{title as string}</h3>
              <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-orange-500" />
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">{text as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">Why Use BB HOSPITALITY?</h2>
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <article key={item.title} className="grid grid-cols-[130px_1fr] items-center overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition hover:-translate-y-1">
              <div className="relative aspect-square h-full min-h-32 overflow-hidden rounded-r-[60px] bg-slate-50">
                <Image src={item.image} alt={item.title} fill className="object-contain" />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fffaf7] px-4 py-16">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold text-orange-500">Work Process</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">We&apos;re Big On Trust & Safety</h2>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="mx-auto mb-8 flex h-16 w-44 items-center justify-center rounded-xl border-8 border-slate-200 bg-gray-900 text-sm font-semibold text-white shadow-xl">
            BB HOSPITALITY
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {["Identity Check", "Document Verification", "In-Person Interview", "Training Session"].map((step, index) => (
              <div key={step} className="rounded-lg border border-blue-100 bg-white p-6 text-center shadow-[10px_10px_0_rgba(37,99,235,0.15)]">
                <span className="mx-auto -mt-10 mb-4 flex size-14 items-center justify-center rounded-full border border-orange-100 bg-white text-sm font-semibold text-gray-900">
                  0{index + 1}
                </span>
                <p className="text-sm font-semibold text-gray-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-orange-50 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-sm font-semibold text-orange-500">Testimonial</p>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900">We Are Very Happy For<br />Client&apos;s Review</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {["Salim Shaikh", "Minal More", "Vishal Salve"].map((name, index) => (
              <article key={name} className="bg-white p-6 shadow-sm">
                <div className="mb-3 text-6xl font-black leading-none text-slate-300">&quot;</div>
                <p className="mb-5 text-sm leading-relaxed text-gray-700">
                  BB HOSPITALITY helped us with reliable staff on time. The team was professional, responsive, and the service quality was excellent.
                </p>
                <div className="mb-5 flex text-yellow-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
                <div className="flex items-center gap-3">
                  <div className="relative size-12 overflow-hidden rounded-full bg-blue-50">
                    <Image src={`https://randomuser.me/api/portraits/${index === 1 ? 'women' : 'men'}/${index + 10}.jpg`} alt={name} fill className="object-cover" />
                  </div>
                  <strong className="text-sm text-gray-900">{name}</strong>
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
            <div className="rounded bg-orange-50 p-3 text-sm font-semibold text-gray-900">
              {["Western Suburbs", "South Mumbai", "Central Mumbai", "Harbour Suburbs", "Notable Pocket Areas"].map((area, index) => (
                <div key={area} className={`rounded px-3 py-3 ${index === 0 ? "bg-orange-200" : ""}`}>{area}</div>
              ))}
            </div>
            <div className="grid gap-x-8 gap-y-4 text-xs font-semibold text-gray-900 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((item) => <Link href="/services/maid" key={item} className="hover:text-orange-600">{item}</Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <h2 className="mx-auto mb-5 max-w-5xl text-2xl font-bold tracking-tight text-gray-900">Our Services</h2>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Elder Care", "elder-care", "/images/👴 Elder Care.jpeg"],
            ["Driver", "driver", "/images/🚗 Driver.jpeg"],
            ["Nursing", "nursing", "/images/🩺 Patient Care.jpeg"],
            ["Baby Care & Delivery Service", "baby-care-delivery-service", "/images/🤱 Japa Maid-Mother Care.jpeg"],
          ].map(([title, slug, image]) => (
            <Link href={`/services/${slug}`} key={title} className="overflow-hidden rounded-lg bg-gray-900 shadow-sm">
              <div className="relative aspect-square bg-white">
                <Image src={image} alt={title} fill className="object-contain transition hover:scale-105" />
              </div>
              <h3 className="py-3 text-center text-sm font-semibold text-white">{title}</h3>
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
