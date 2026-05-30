"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { logout } from "../login/actions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness, Clock, FileText, MapPin, Phone, UserRound, Users, X } from "lucide-react";

export type ServiceLead = {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  location: string;
  service: string;
  urgency: string;
  genderPreference?: string;
  hours?: string;
  message?: string;
  createdAt?: string | null;
};

export type JobLead = {
  _id: string;
  fullName: string;
  mobileNumber: string;
  category: string;
  maritalStatus: string;
  age?: number;
  religion: string;
  gender: string;
  passportAvailable: string;
  education: string;
  workingHours: string;
  homeAddress: string;
  preferredWorkLocation: string;
  expectedSalary?: number;
  salaryRange?: string;
  totalExperience?: number;
  aadhaarCardPath?: string;
  photoPath?: string;
  languagesKnown: string[];
  signature: string;
  applicationDate: string;
  createdAt?: string | null;
};

function formatDate(value?: string | null) {
  if (!value) return "New";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function StatCard({ label, value, Icon }: { label: string; value: string; Icon: typeof Users }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
        <span className="flex size-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
          <Icon className="size-5" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-black text-[#12345b]">{value}</p>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-sm font-bold text-slate-400">
      {text}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value?: string | number | null }) {
  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
      <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">{label}</p>
      <p className="mt-1 break-words text-sm font-bold text-[#12345b]">{value || "-"}</p>
    </div>
  );
}

function DetailModal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#12345b]/60 px-4 py-6 backdrop-blur-sm">
      <div className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white shadow-[0_28px_80px_rgba(15,23,42,0.35)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
          <h2 className="text-xl font-black text-[#12345b]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="flex size-9 items-center justify-center rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

function ServiceRequestCard({ lead, onOpen }: { lead: ServiceLead; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <UserRound className="size-4 text-orange-500" />
            <h3 className="font-black text-[#12345b]">{lead.name}</h3>
          </div>
          <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Phone className="size-3.5" />
            {lead.phone}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <MapPin className="size-3.5" />
            {lead.location}
          </p>
        </div>
        <Badge className="w-fit rounded-md bg-orange-50 text-orange-600 hover:bg-orange-50">
          {lead.urgency}
        </Badge>
      </div>
      <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
        <p><span className="text-slate-400">Service:</span> {lead.service}</p>
        <p><span className="text-slate-400">Gender:</span> {lead.genderPreference || "-"}</p>
        <p><span className="text-slate-400">Hours:</span> {lead.hours || "-"}</p>
        <p><span className="text-slate-400">Date:</span> {formatDate(lead.createdAt)}</p>
      </div>
      {lead.message ? <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm font-semibold text-slate-600">{lead.message}</p> : null}
    </button>
  );
}

function JobApplicationCard({ job, onOpen }: { job: JobLead; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="size-4 text-orange-500" />
            <h3 className="font-black text-[#12345b]">{job.fullName}</h3>
          </div>
          <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Phone className="size-3.5" />
            {job.mobileNumber}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <MapPin className="size-3.5" />
            {job.preferredWorkLocation}
          </p>
        </div>
        <Badge className="w-fit rounded-md bg-[#12345b] text-white hover:bg-[#12345b]">
          {job.category}
        </Badge>
      </div>
      <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
        <p><span className="text-slate-400">Gender:</span> {job.gender}</p>
        <p><span className="text-slate-400">Experience:</span> {job.totalExperience ?? 0} years</p>
        <p><span className="text-slate-400">Salary:</span> {job.expectedSalary ? `₹${job.expectedSalary}` : job.salaryRange || "-"}</p>
        <p><span className="text-slate-400">Date:</span> {formatDate(job.createdAt)}</p>
        <p><span className="text-slate-400">Education:</span> {job.education}</p>
        <p><span className="text-slate-400">Hours:</span> {job.workingHours}</p>
        <p><span className="text-slate-400">Religion:</span> {job.religion}</p>
        <p><span className="text-slate-400">Languages:</span> {job.languagesKnown?.join(", ") || "-"}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {job.aadhaarCardPath ? (
          <a href={job.aadhaarCardPath} target="_blank" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-1 rounded-md bg-orange-50 px-3 py-2 text-xs font-black text-orange-600">
            <FileText className="size-3.5" />
            Aadhaar
          </a>
        ) : null}
        {job.photoPath ? (
          <a href={job.photoPath} target="_blank" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-1 rounded-md bg-orange-50 px-3 py-2 text-xs font-black text-orange-600">
            <FileText className="size-3.5" />
            Photo
          </a>
        ) : null}
      </div>
    </button>
  );
}

export default function DashboardContent({
  serviceLeads,
  jobApplications,
}: {
  serviceLeads: ServiceLead[];
  jobApplications: JobLead[];
}) {
  const searchParams = useSearchParams();
  const [selectedServiceLead, setSelectedServiceLead] = useState<ServiceLead | null>(null);
  const [selectedJobLead, setSelectedJobLead] = useState<JobLead | null>(null);
  const activeTab = searchParams.get("tab") || "dashboard";
  const showDashboard = activeTab === "dashboard";
  const showServiceLeads = activeTab === "service";
  const showJobApplications = activeTab === "jobs";

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-7 p-4 font-sans md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[#12345b]">
            {showServiceLeads ? "Service Leads" : showJobApplications ? "Job Applications" : "Admin Dashboard"}
          </h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {showServiceLeads
              ? "Requests from the homepage/contact inquiry forms."
              : showJobApplications
                ? "Applications submitted from the Apply For A Job form."
                : "Manage service requests and job applications."}
          </p>
        </div>
        <Button variant="outline" onClick={() => logout()} className="w-fit rounded-lg border-slate-200 font-bold text-slate-600">
          Logout
        </Button>
      </div>

      {showDashboard ? (
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Service Requests" value={serviceLeads.length.toString()} Icon={Users} />
          <StatCard label="Job Applications" value={jobApplications.length.toString()} Icon={BriefcaseBusiness} />
          <StatCard label="Urgent Requests" value={serviceLeads.filter((lead) => lead.urgency === "Urgent Need").length.toString()} Icon={Clock} />
        </div>
      ) : null}

      {showDashboard ? (
        <div className="grid gap-4 md:grid-cols-2">
          <a href="/admin/dashboard?tab=service" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">Open Tab</p>
            <h2 className="mt-2 text-xl font-black text-[#12345b]">Service Leads</h2>
            <p className="mt-1 text-sm font-semibold text-slate-500">View all customer service requests.</p>
          </a>
          <a href="/admin/dashboard?tab=jobs" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">Open Tab</p>
            <h2 className="mt-2 text-xl font-black text-[#12345b]">Job Applications</h2>
            <p className="mt-1 text-sm font-semibold text-slate-500">View all candidate applications.</p>
          </a>
        </div>
      ) : null}

      {showServiceLeads ? (
      <section className="grid gap-4">
        <div>
          <h2 className="text-xl font-black text-[#12345b]">Service Form Requests</h2>
          <p className="text-sm font-semibold text-slate-500">Requests from the homepage/contact inquiry forms.</p>
        </div>
        {serviceLeads.length ? serviceLeads.map((lead) => (
          <ServiceRequestCard key={lead._id} lead={lead} onOpen={() => setSelectedServiceLead(lead)} />
        )) : <EmptyState text="No service requests yet." />}
      </section>
      ) : null}

      {showJobApplications ? (
      <section className="grid gap-4">
        <div>
          <h2 className="text-xl font-black text-[#12345b]">Job Applications</h2>
          <p className="text-sm font-semibold text-slate-500">Applications submitted from the Apply For A Job form.</p>
        </div>
        {jobApplications.length ? jobApplications.map((job) => (
          <JobApplicationCard key={job._id} job={job} onOpen={() => setSelectedJobLead(job)} />
        )) : <EmptyState text="No job applications yet." />}
      </section>
      ) : null}

      {selectedServiceLead ? (
        <DetailModal title={`Service Request - ${selectedServiceLead.name}`} onClose={() => setSelectedServiceLead(null)}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <DetailRow label="Name" value={selectedServiceLead.name} />
            <DetailRow label="Phone" value={selectedServiceLead.phone} />
            <DetailRow label="Email" value={selectedServiceLead.email} />
            <DetailRow label="Location" value={selectedServiceLead.location} />
            <DetailRow label="Service" value={selectedServiceLead.service} />
            <DetailRow label="Urgency" value={selectedServiceLead.urgency} />
            <DetailRow label="Gender Preference" value={selectedServiceLead.genderPreference} />
            <DetailRow label="Hours Needed" value={selectedServiceLead.hours} />
            <DetailRow label="Submitted Date" value={formatDate(selectedServiceLead.createdAt)} />
            <div className="sm:col-span-2 lg:col-span-3">
              <DetailRow label="Message" value={selectedServiceLead.message} />
            </div>
          </div>
        </DetailModal>
      ) : null}

      {selectedJobLead ? (
        <DetailModal title={`Job Application - ${selectedJobLead.fullName}`} onClose={() => setSelectedJobLead(null)}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <DetailRow label="Full Name" value={selectedJobLead.fullName} />
            <DetailRow label="Mobile Number" value={selectedJobLead.mobileNumber} />
            <DetailRow label="Category" value={selectedJobLead.category} />
            <DetailRow label="Marital Status" value={selectedJobLead.maritalStatus} />
            <DetailRow label="Age" value={selectedJobLead.age} />
            <DetailRow label="Religion" value={selectedJobLead.religion} />
            <DetailRow label="Gender" value={selectedJobLead.gender} />
            <DetailRow label="Passport Available" value={selectedJobLead.passportAvailable} />
            <DetailRow label="Education" value={selectedJobLead.education} />
            <DetailRow label="Working Hours" value={selectedJobLead.workingHours} />
            <DetailRow label="Preferred Work Location" value={selectedJobLead.preferredWorkLocation} />
            <DetailRow label="Expected Salary" value={selectedJobLead.expectedSalary ? `₹${selectedJobLead.expectedSalary}` : selectedJobLead.salaryRange} />
            <DetailRow label="Total Experience" value={`${selectedJobLead.totalExperience ?? 0} years`} />
            <DetailRow label="Languages Known" value={selectedJobLead.languagesKnown?.join(", ")} />
            <DetailRow label="Signature" value={selectedJobLead.signature} />
            <DetailRow label="Application Date" value={selectedJobLead.applicationDate} />
            <DetailRow label="Submitted Date" value={formatDate(selectedJobLead.createdAt)} />
            <div className="sm:col-span-2 lg:col-span-3">
              <DetailRow label="Home Address" value={selectedJobLead.homeAddress} />
            </div>
            <div className="flex flex-wrap gap-2 sm:col-span-2 lg:col-span-3">
              {selectedJobLead.aadhaarCardPath ? (
                <a href={selectedJobLead.aadhaarCardPath} target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-orange-50 px-4 py-2 text-sm font-black text-orange-600">
                  <FileText className="size-4" />
                  View Aadhaar
                </a>
              ) : null}
              {selectedJobLead.photoPath ? (
                <a href={selectedJobLead.photoPath} target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-orange-50 px-4 py-2 text-sm font-black text-orange-600">
                  <FileText className="size-4" />
                  View Photo
                </a>
              ) : null}
            </div>
          </div>
        </DetailModal>
      ) : null}
    </div>
  );
}
