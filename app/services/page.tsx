import Image from "next/image";
import Link from "next/link";
import { ArrowUp, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { serviceCategories } from "@/lib/services";

export const metadata = {
  title: "Services | BB HOSPITALITY",
  description:
    "Explore BB HOSPITALITY services including maid, cook, baby care and delivery service, patient care, driver, nursing, housekeeping, security guard, and office support.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 text-blue-950 lg:pt-[96px]">
      <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden">
        <Image
          src="/GettyImages-1456829834.webp"
          alt="BB HOSPITALITY services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-base font-bold">Home &gt;&gt; Services</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
            SERVICES WE PROVIDE
          </span>
          <h2 className="text-3xl font-extrabold text-blue-950 md:text-4xl">
            Hire Verified Home & Hospitality Staff
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600">
            Choose from BB HOSPITALITY&apos;s professional service categories.
            Every service opens a dedicated detail page with hiring guidance,
            benefits, checklist, FAQs, and location coverage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,99,235,0.16)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-extrabold text-blue-950">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm font-medium leading-7 text-slate-600">
                  {service.summary}
                </p>
                <span className="inline-flex h-10 items-center rounded bg-gradient-to-r from-blue-600 to-blue-700 px-5 text-sm font-extrabold text-white">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />

      <div className="fixed bottom-5 right-5 z-40 grid gap-3">
        <a
          href="#top"
          aria-label="Back to top"
          className="flex size-11 items-center justify-center rounded bg-orange-500 text-white shadow-lg"
        >
          <ArrowUp className="size-5" />
        </a>
        <a
          href="https://wa.me/919076354999"
          aria-label="WhatsApp"
          className="flex size-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
        >
          <MessageCircle className="size-6" />
        </a>
      </div>
      <Link
        href="/#booking"
        className="fixed bottom-0 left-0 z-40 rounded-tr-md bg-orange-500 px-4 py-2 text-xs font-extrabold text-white shadow-lg"
      >
        Post Your Requirement
      </Link>
    </main>
  );
}
