import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Building2,
  Car,
  ChefHat,
  HeartHandshake,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import Footer from "@/components/Footer";

type RateRow = {
  service: string;
  details?: string;
  charge: string;
};

type RateSection = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  accent: string;
  rows: RateRow[];
  note?: string;
};

const rateSections: RateSection[] = [
  {
    id: "cooking",
    title: "Cook / Cooking Maid",
    description: "Monthly cooking support based on family size and meal frequency.",
    Icon: ChefHat,
    accent: "bg-amber-100 text-amber-700",
    rows: [
      { service: "1-2 Members", details: "1 Time Cooking", charge: "Rs. 4,500" },
      { service: "1-2 Members", details: "2 Time Cooking", charge: "Rs. 6,500" },
      { service: "3-4 Members", details: "1 Time Cooking", charge: "Rs. 7,000" },
      { service: "3-4 Members", details: "2 Time Cooking", charge: "Rs. 10,000" },
      { service: "5-6 Members", details: "Full Cooking", charge: "Rs. 15,000" },
      { service: "Special Food / Guests", details: "Extra Charges", charge: "Rs. 2,000" },
    ],
  },
  {
    id: "maid",
    title: "Maid / House Cleaning",
    description: "Domestic cleaning and household support charged monthly.",
    Icon: Sparkles,
    accent: "bg-sky-100 text-sky-700",
    rows: [
      { service: "Utensils Cleaning", charge: "Rs. 2,500" },
      { service: "Sweeping & Mopping", charge: "Rs. 3,500" },
      { service: "Bathroom Cleaning", charge: "Rs. 2,000" },
      { service: "Dusting", charge: "Rs. 2,500" },
      { service: "12 Hours Maid", charge: "Rs. 20,000" },
      { service: "24 Hours Live-In Maid", charge: "Rs. 25,000" },
    ],
  },
  {
    id: "baby-care",
    title: "Baby Care & Delivery",
    description: "Japa maid, baby-care, massage, and post-delivery family support.",
    Icon: Baby,
    accent: "bg-orange-100 text-orange-700",
    rows: [
      { service: "Day Shift Japa Maid", details: "12 HRS, 1-6 Months", charge: "Rs. 25,000" },
      { service: "Night Shift Japa Maid", details: "12 HRS, 1-6 Months", charge: "Rs. 30,000" },
      { service: "24-Hour Japa Maid", details: "1-6 Months", charge: "Rs. 45,000" },
      { service: "12-Hour Baby Care", charge: "Rs. 22,000" },
      { service: "24-Hour Baby Care", charge: "Rs. 40,000" },
      { service: "Experienced Newborn Baby Care", charge: "Rs. 50,000" },
      { service: "Baby Massage Only", charge: "Rs. 8,000/month" },
      { service: "Baby Massage + Bath", charge: "Rs. 10,000/month" },
      { service: "Baby Massage + Mother Care", charge: "Rs. 18,000/month" },
    ],
    note: "If twins, the amount will be twice.",
  },
  {
    id: "elder-care",
    title: "Elder Care",
    description: "Dedicated attendant support for senior care at home.",
    Icon: HeartHandshake,
    accent: "bg-emerald-100 text-emerald-700",
    rows: [
      { service: "12 Hours Elder Care", charge: "Rs. 18,000" },
      { service: "24 Hours Elder Care", charge: "Rs. 30,000" },
    ],
  },
  {
    id: "nursing",
    title: "Nursing",
    description: "Home nursing and medical support visits.",
    Icon: Stethoscope,
    accent: "bg-indigo-100 text-indigo-700",
    rows: [
      { service: "Home Nurse", details: "12 Hours", charge: "Rs. 30,000" },
      { service: "24-Hour Nurse", charge: "Rs. 40,000" },
      { service: "Injection / Dressing Visit", details: "Per visit", charge: "Rs. 1,500" },
    ],
  },
  {
    id: "driver",
    title: "Driver",
    description: "Monthly driver salary guidance by driver type.",
    Icon: Car,
    accent: "bg-orange-100 text-orange-700",
    rows: [
      { service: "Personal Driver", charge: "Rs. 15,000" },
      { service: "Office Driver", charge: "Rs. 18,000" },
      { service: "Car Driver", charge: "Rs. 16,000" },
      { service: "Commercial Driver", charge: "Rs. 20,000" },
      { service: "Bus Driver", charge: "As per requirement" },
      { service: "Truck Driver", charge: "As per requirement" },
    ],
  },
  {
    id: "patient-care",
    title: "Bedridden / Patient Care",
    description: "Caregiver support for patients who need regular assistance.",
    Icon: UserRoundCheck,
    accent: "bg-cyan-100 text-cyan-700",
    rows: [
      { service: "12-Hour Patient Care", charge: "Rs. 28,000" },
      { service: "24-Hour Patient Care", charge: "Rs. 50,000" },
      { service: "ICU Trained Caregiver", charge: "Rs. 65,000" },
    ],
  },
  {
    id: "security",
    title: "Security Guard",
    description: "Security guard staffing for day, night, and full-day coverage.",
    Icon: ShieldCheck,
    accent: "bg-violet-100 text-violet-700",
    rows: [
      { service: "Day Shift Guard", charge: "Rs. 20,000" },
      { service: "Night Shift Guard", charge: "Rs. 22,000" },
      { service: "24-Hour Security Guard", charge: "Rs. 40,000" },
      { service: "Ex-Army Officer", details: "With arms / without arms", charge: "Rs. 60,000/month" },
    ],
  },
  {
    id: "housekeeping",
    title: "House Keeping",
    description: "Office, commercial, and support staff pricing.",
    Icon: Building2,
    accent: "bg-lime-100 text-lime-700",
    rows: [
      { service: "Office Housekeeping Staff", charge: "Rs. 18,000" },
      { service: "Commercial Cleaning Staff", charge: "Rs. 22,000" },
      { service: "Deep Cleaning Team", charge: "Rs. 15,000/service" },
      { service: "Office Boy", charge: "Rs. 18,000" },
      { service: "Reception Support", charge: "Rs. 25,000" },
      { service: "Helper / Peon", charge: "Rs. 20,000" },
    ],
  },
];

export const metadata = {
  title: "Rate Card | BB HOSPITALITY",
  description: "BB HOSPITALITY home care and domestic services rate card.",
};

export default function RateCardPage() {
  const totalRows = rateSections.reduce((count, section) => count + section.rows.length, 0);

  return (
    <main className="min-h-screen bg-[#f7f9fc] pt-24 text-gray-900 lg:pt-[96px]">
      <section className="relative overflow-hidden bg-blue-950 px-4 py-16 text-white">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-white/5" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-sky-300">
              Updated Rate Card
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight leading-tight md:text-6xl">
              Home Care & Domestic Services
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-blue-100">
              Transparent pricing for domestic help, home care, drivers, security,
              housekeeping, and support staff.
            </p>
          </div>

          <div className="relative rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-wide text-sky-200">Quick Contact</p>
            <a href="tel:02247173377" className="mt-3 flex items-center gap-3 text-2xl font-bold">
              <Phone className="size-5 text-sky-300" />
              022 47173377
            </a>
            <a href="tel:+919076354999" className="mt-3 flex items-center gap-3 text-2xl font-bold">
              <Phone className="size-5 text-sky-300" />
              9076354999
            </a>
            <a href="mailto:info@bbhospitality.in" className="mt-3 flex items-center gap-3 text-sm font-semibold text-blue-100">
              <Mail className="size-4 text-sky-300" />
              info@bbhospitality.in
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Service Groups", rateSections.length.toString()],
            ["Rate Items", totalRows.toString()],
            ["Pricing Type", "Monthly / Visit"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-500">{label}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {rateSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              {section.title}
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-12">
          {rateSections.map((section) => {
            const Icon = section.Icon;

            return (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex gap-4">
                    <div className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${section.accent}`}>
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight leading-tight text-gray-900 md:text-3xl">
                        {section.title}
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-500">{section.rows.length} rates</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {section.rows.map((row) => (
                    <div
                      key={`${section.id}-${row.service}`}
                      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)]"
                    >
                      <div className="flex min-h-28 flex-col justify-between gap-5">
                        <div>
                          <h3 className="text-base font-semibold tracking-tight leading-6 text-gray-900">{row.service}</h3>
                          <p className="mt-2 text-sm font-normal leading-relaxed text-gray-600">{row.details ?? "Standard service"}</p>
                        </div>
                        <div className="flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                          <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Charge</span>
                          <span className="text-right text-xl font-bold text-orange-600">{row.charge}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {section.note ? (
                  <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-medium leading-relaxed text-amber-900">
                    Note: {section.note}
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg bg-blue-950 p-6 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)] md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-300">BB HOSPITALITY</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Need staff for your home or office?</h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-blue-100">
              Share your requirement and the team will help you choose the right service.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
            <a
              href="tel:02247173377"
              className="inline-flex h-11 items-center gap-2 rounded bg-white px-5 text-sm font-bold text-gray-900 transition hover:bg-sky-100"
            >
              <Phone className="size-4" />
              Call Landline
            </a>
            <a
              href="tel:+919076354999"
              className="inline-flex h-11 items-center gap-2 rounded bg-white px-5 text-sm font-bold text-gray-900 transition hover:bg-sky-100"
            >
              <Phone className="size-4" />
              Call Mobile
            </a>
            <a
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded bg-orange-500 px-5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
