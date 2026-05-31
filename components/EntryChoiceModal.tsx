"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function EntryChoiceModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setIsOpen(true));
  }, []);

  const close = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#12345b]/70 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-5">
      <div className="relative w-full max-w-[430px] rounded-2xl border border-white/80 bg-white px-5 pb-5 pt-10 shadow-[0_34px_90px_rgba(18,52,91,0.42)] sm:px-7 sm:pb-6 sm:pt-11">
        <button
          type="button"
          onClick={close}
          aria-label="Close popup"
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
        >
          <X className="size-7 stroke-[3]" />
        </button>

        <h2 className="mx-auto max-w-sm text-center text-2xl font-extrabold leading-tight text-[#12345b] sm:text-[1.8rem]">
          What Do You Want To Do?
        </h2>

        <div className="mx-auto mt-5 grid max-w-[330px] gap-4">
          <Link
            href="/#booking"
            onClick={close}
            className="group block text-center"
          >
            <div className="relative h-[138px] overflow-hidden rounded-xl border border-slate-100 bg-slate-50 shadow-[0_12px_30px_rgba(18,52,91,0.14)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_42px_rgba(18,52,91,0.2)] sm:h-[150px]">
              <Image
                src="/images/👨‍👩‍👧‍👦 Happy Family (Main Hero Image).jpeg"
                alt="Hire candidate"
                fill
                className="object-cover object-center transition duration-300 group-hover:scale-105"
                sizes="405px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex min-h-16 items-end justify-center bg-gradient-to-t from-[#12345b] via-[#12345b]/80 to-transparent px-3 pb-2.5">
                <p className="text-lg font-extrabold leading-5 text-white sm:text-xl">
                  I Want To Hire
                  <br />
                  Candidate
                </p>
              </div>
            </div>
            <p className="mt-2 text-lg font-extrabold leading-tight text-[#12345b] sm:text-xl">
              मुझे लोग काम पे रखना है
            </p>
          </Link>

          <Link
            href="/apply-job"
            onClick={close}
            className="group block text-center"
          >
            <div className="relative h-[138px] overflow-hidden rounded-xl border border-slate-100 bg-slate-50 shadow-[0_12px_30px_rgba(18,52,91,0.14)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_42px_rgba(18,52,91,0.2)] sm:h-[150px]">
              <Image
                src="/images/👨‍💼 Office Boy.jpeg"
                alt="Apply for a job"
                fill
                className="object-cover object-center transition duration-300 group-hover:scale-105"
                sizes="405px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex min-h-16 items-end justify-center bg-gradient-to-t from-[#12345b] via-[#12345b]/80 to-transparent px-3 pb-2.5">
                <p className="text-lg font-extrabold leading-5 text-white sm:text-xl">
                  I Want A Job
                </p>
              </div>
            </div>
            <p className="mt-2 text-lg font-extrabold leading-tight text-[#12345b] sm:text-xl">
              मुझे नौकरी चाहिए
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
