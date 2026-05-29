import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUp, CheckCircle2, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import {
  getServiceBySlug,
  serviceCategories,
  serviceLocations,
} from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | BB HOSPITALITY",
    };
  }

  return {
    title: `${service.title} In Mumbai | BB HOSPITALITY`,
    description: service.summary,
  };
}

const locationTabs = [
  "Western Suburbs",
  "South Mumbai",
  "Central Mumbai",
  "Harbour Suburbs",
  "Notable Pocket Areas",
];

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = serviceCategories
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white pt-24 text-blue-950 lg:pt-[96px]">
      <section className="relative flex min-h-[288px] items-center justify-center overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute left-[12%] top-[45%] hidden text-5xl font-light text-white md:block">
          +
        </div>
        <div className="absolute right-[13%] top-[24%] hidden text-5xl font-light text-white md:block">
          +
        </div>
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            {service.title}
          </h1>
          <div className="mt-4 text-base font-bold">
            <Link href="/" className="hover:text-sky-200">
              Home
            </Link>{" "}
            &gt;&gt;{" "}
            <Link href="/services" className="hover:text-sky-200">
              Services
            </Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-16">
        <section className="grid items-start gap-10 lg:grid-cols-[420px_1fr]">
          <div className="relative mx-auto h-[460px] w-full max-w-[420px] overflow-hidden rounded-full bg-blue-50">
            <Image
              src={service.image}
              alt={service.introTitle}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-blue-950">
              {service.introTitle}
            </h2>
            <div className="space-y-4 text-[15px] font-medium leading-8 text-slate-700">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 space-y-9 text-[15px] font-medium leading-8 text-slate-700">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-blue-950">
              Why Choose BB HOSPITALITY For {service.title} In Mumbai?
            </h2>
            <p>
              Professional {service.label.toLowerCase()} support is no longer a
              luxury for busy homes and businesses. It is a dependable way to
              save time, reduce stress, and keep daily responsibilities
              organized. BB HOSPITALITY combines profile screening, clear duty
              planning, and customer-first coordination so each client can hire
              with confidence.
            </p>
            <p className="mt-4">
              Our team helps you compare requirements, timing, experience,
              location, and pricing so the final selection is practical for your
              home or workplace. We keep the process simple while maintaining
              professional standards at every step.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-blue-950">
              Full-Time Vs Part-Time {service.label} In Mumbai
            </h2>
            <p>
              Full-time support is useful when your household or office needs
              consistent help across the day, including morning and evening
              routines. Part-time support works well when you only need focused
              assistance for specific hours or selected duties.
            </p>
            <p className="mt-4">
              BB HOSPITALITY helps you decide the right option by reviewing duty
              scope, family size, work intensity, shift timings, weekly offs,
              and budget expectations.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-extrabold text-blue-950">
              {service.title} Offered By BB HOSPITALITY
            </h2>
            <p>
              BB HOSPITALITY provides a practical service plan designed to help
              you manage your home or business more efficiently:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6">
              {service.includes.map((item) => (
                <li key={item}>
                  <strong className="text-blue-950">{item}:</strong> Support
                  can be discussed and assigned according to your requirement,
                  timing, and candidate skill set.
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-blue-950">
              Why You Should Hire From A Professional Service Agency Like Us
            </h2>
            <p>
              Hiring through a professional agency brings structure to the
              process. Candidates are reviewed, expectations are documented, and
              replacement support is easier to coordinate. This helps families
              and companies avoid confusion and focus on quality, safety, and
              continuity.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-extrabold text-blue-950">
              How Much Do You Have To Pay To Hire {service.label} In Mumbai?
            </h2>
            <p>
              Pricing depends on duty type, working hours, stay-in or shift
              preference, location, experience level, and urgency. BB
              HOSPITALITY explains the cost structure clearly before you confirm
              so you understand monthly salary, agency terms, replacement
              support, and other service conditions.
            </p>
          </div>
        </section>

        <section className="mt-9 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-xl font-extrabold text-blue-950">
              Checklist For Choosing {service.title} For Your Home:
            </h2>
            <ul className="space-y-3 text-[15px] font-medium text-slate-700">
              {service.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-xl font-extrabold text-blue-950">
              Service Benefits:
            </h2>
            <ul className="space-y-3 text-[15px] font-medium text-slate-700">
              {service.benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-extrabold text-blue-950">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm open:border-blue-200 open:bg-blue-50/30"
              >
                <summary className="cursor-pointer text-base font-extrabold text-blue-950">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,0.16)] md:p-6">
            <div className="grid gap-5 md:grid-cols-[200px_1fr]">
              <aside className="rounded bg-sky-100 p-3 text-sm font-semibold text-blue-950">
                {locationTabs.map((area, index) => (
                  <div
                    key={area}
                    className={`rounded px-3 py-3 ${
                      index === 0 ? "bg-sky-300" : ""
                    }`}
                  >
                    {area}
                  </div>
                ))}
              </aside>
              <div className="grid gap-x-8 gap-y-5 text-sm font-extrabold text-blue-700 sm:grid-cols-2 lg:grid-cols-3">
                {serviceLocations.map((item) => (
                  <Link
                    href={`/services/${service.slug}`}
                    key={item}
                    className="hover:text-orange-600"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/services"
              className="inline-flex h-10 items-center rounded bg-orange-500 px-8 text-xs font-extrabold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              View all location
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-3xl font-extrabold text-blue-950">
            Other Services
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group overflow-hidden rounded-lg bg-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="py-3 text-center text-lg font-extrabold text-white">
                  {item.label}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </article>

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
