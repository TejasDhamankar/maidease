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
    <main className="min-h-screen bg-white pt-24 text-gray-900 lg:pt-[96px]">
      <section className="relative flex min-h-[130px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#12345b_0%,#0f6f9f_55%,#ff6b00_140%)] md:min-h-[155px]">
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/15 to-transparent" />
        <div className="absolute left-8 top-6 hidden h-10 w-10 rounded-full border border-white/15 md:block" />
        <div className="absolute bottom-6 right-12 hidden h-14 w-14 rounded-full border border-orange-200/25 md:block" />
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Our Services
          </h1>
          <p className="mt-3 inline-flex rounded-full bg-white/12 px-3 py-1 text-xs font-semibold backdrop-blur">
            Home &gt;&gt; Services
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            SERVICES WE PROVIDE
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Hire Verified Home & Hospitality Staff
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-normal leading-relaxed text-gray-600">
            Choose from BB HOSPITALITY&apos;s professional service categories.
            Every service opens a dedicated detail page with hiring guidance,
            benefits, checklist, FAQs, and location coverage.
          </p>
        </div>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_45px_rgba(18,52,91,0.16)]"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-2xl font-semibold tracking-tight leading-tight text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-5 flex-1 text-sm font-normal leading-relaxed text-gray-600">
                  {service.summary}
                </p>
                <span className="mt-auto inline-flex h-10 w-fit items-center rounded bg-gradient-to-r from-orange-500 to-orange-600 px-5 text-sm font-bold text-white">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />

      <div className="fixed bottom-20 right-5 z-40 grid gap-3 md:bottom-5">
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
    </main>
  );
}
