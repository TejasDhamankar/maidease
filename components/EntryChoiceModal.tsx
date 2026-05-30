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
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#12345b]/65 px-3 py-4 backdrop-blur-[2px] sm:px-4 sm:py-5">
      <div className="relative max-h-[88vh] w-full max-w-[430px] overflow-y-auto rounded-xl border border-white/70 bg-white px-4 pb-5 pt-11 shadow-[0_28px_80px_rgba(18,52,91,0.35)] sm:px-7 sm:pb-6 sm:pt-12">
        <button
          type="button"
          onClick={close}
          aria-label="Close popup"
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
        >
          <X className="size-7 stroke-[3.5]" />
        </button>

        <h2 className="mx-auto max-w-xs text-center text-[1.65rem] font-extrabold leading-tight text-[#12345b] sm:text-[2rem]">
          What Do You Want To Do?
        </h2>

        <div className="mx-auto mt-6 grid max-w-[330px] gap-4 sm:mt-7 sm:gap-5">
          <Link
            href="/#booking"
            onClick={close}
            className="group block text-center"
          >
            <div className="relative h-[142px] overflow-hidden rounded-xl border border-slate-100 bg-slate-100 shadow-[0_12px_30px_rgba(18,52,91,0.12)] sm:h-[155px]">
              <Image
                src="/Why_Choose_Us.png"
                alt="Hire candidate"
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="405px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex min-h-20 items-end justify-center bg-gradient-to-t from-[#12345b] via-[#12345b]/75 to-transparent px-4 pb-4">
                <p className="text-xl font-extrabold leading-6 text-white sm:text-2xl">
                  I Want To Hire
                  <br />
                  Candidate
                </p>
              </div>
            </div>
            <p className="mt-3 text-lg font-extrabold text-[#12345b] sm:text-2xl">
              मुझे लोग काम पे रखना है
            </p>
          </Link>

          <Link
            href="/apply-job"
            onClick={close}
            className="group block text-center"
          >
            <div className="relative h-[142px] overflow-hidden rounded-xl border border-slate-100 bg-slate-100 shadow-[0_12px_30px_rgba(18,52,91,0.12)] sm:h-[155px]">
              <Image
                src="/Service_Card_2.png"
                alt="Apply for a job"
                fill
                className="object-cover object-top transition duration-300 group-hover:scale-105"
                sizes="405px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex min-h-20 items-end justify-center bg-gradient-to-t from-[#12345b] via-[#12345b]/75 to-transparent px-4 pb-4">
                <p className="text-xl font-extrabold leading-6 text-white sm:text-2xl">
                  I Want A Job
                </p>
              </div>
            </div>
            <p className="mt-3 text-lg font-extrabold text-[#12345b] sm:text-2xl">
              मुझे नौकरी चाहिए
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
