"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BriefcaseBusiness, X, Wrench } from "lucide-react";

export default function EntryChoiceModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("bb-entry-choice-seen");
    if (!seen) {
      queueMicrotask(() => setIsOpen(true));
    }
  }, []);

  const close = () => {
    sessionStorage.setItem("bb-entry-choice-seen", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-blue-950/65 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-5 shadow-[0_30px_90px_rgba(15,23,42,0.35)] md:p-7">
        <button
          type="button"
          onClick={close}
          aria-label="Close popup"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-orange-300 hover:text-orange-600"
        >
          <X className="size-4" />
        </button>

        <div className="pr-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-orange-500">BB Hospitality</p>
          <h2 className="mt-3 text-2xl font-extrabold text-blue-950 md:text-3xl">
            How can we help you today?
          </h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
            Please choose one option to continue.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link
            href="/contact?intent=job"
            onClick={close}
            className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:shadow-lg"
          >
            <div className="flex size-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <BriefcaseBusiness className="size-6" />
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-blue-950">I am looking for a job</h3>
            <p className="mt-2 text-lg font-bold text-slate-700">मला नोकरी पाहिजे</p>
          </Link>

          <Link
            href="/#booking"
            onClick={close}
            className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg"
          >
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
              <Wrench className="size-6" />
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-blue-950">I am looking for services</h3>
            <p className="mt-2 text-lg font-bold text-slate-700">मला सेवा हवी आहे</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
