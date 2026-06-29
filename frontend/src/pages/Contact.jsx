import React, { useState } from "react";
import { Mail, Phone, Clock, MapPin, Send, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

const SERVICES = [
  "Garage Epoxy Flooring",
  "Warehouse Epoxy Flooring",
  "Workshop Epoxy Flooring",
  "Industrial Epoxy Flooring",
  "Commercial Kitchen Epoxy",
  "Metallic & Marble Epoxy",
  "Premium Flake Epoxy",
  "Concrete Grinding & Sealing",
  "Self-Levelling & Repairs",
  "Other / General Inquiry",
];

const inputCls = (err) =>
  `w-full rounded-lg border px-4 py-2.5 text-sm bg-white text-gray-900 placeholder-gray-300 outline-none transition-all duration-150 ${
    err
      ? "border-[#A11717] ring-1 ring-[#A11717]/20"
      : "border-gray-200 focus:border-[#A11717] focus:ring-2 focus:ring-[#A11717]/10"
  }`;

function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
        {label}{required && <span className="text-[#A11717] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <span className="flex items-center gap-1 text-[11px] text-[#A11717]">
          <AlertCircle size={10} />{error}
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", serviceType: "", area: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Required";
    else if (!/^\+?[0-9\s\-]{8,15}$/.test(form.phone.replace(/\s+/g, ""))) e.phone = "Enter a valid number";
    if (!form.serviceType) e.serviceType = "Please select a service";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", serviceType: "", area: "", message: "" });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 md:py-16">

        {/* Header */}
        <div className="mb-8 text-center flex flex-col items-center">
          <p className="text-[10px] font-bold tracking-[.2em] uppercase text-[#A11717] mb-3">Contact Us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
            Request a Free Quote
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            Our Sydney estimators will visit your site and deliver a fixed-price proposal — no obligation.
          </p>
        </div>

        {/* ── Two column grid layout inside a unified card ── */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden grid md:grid-cols-10 divide-y md:divide-y-0 md:divide-x divide-gray-100">

          {/* LEFT: Info box + Map stack */}
          <div className="md:col-span-4 flex flex-col">

            {/* Info box header */}
            <div className="bg-[#A11717] px-5 py-3.5">
              <p className="text-white/60 text-[9px] font-semibold tracking-[.2em] uppercase mb-0.5">Head Showroom</p>
              <p className="text-white font-semibold text-sm">Sydney Epoxy Floors</p>
            </div>

            {/* 2x2 grid of contact details */}
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 border-b border-gray-100">
              <InfoCell icon={MapPin} label="Address">
                <span className="text-gray-700 text-xs leading-relaxed">6 Giffard Street<br />Silverwater NSW 2128</span>
              </InfoCell>

              <InfoCell icon={Phone} label="Phone">
                <a href="tel:1300037699" className="text-[#A11717] font-semibold text-xs hover:underline">
                  1300 037 699
                </a>
                <span className="text-gray-400 text-[10px]">Toll-free · Sydney</span>
              </InfoCell>

              <InfoCell icon={Mail} label="Email">
                <a href="mailto:info@sydneyepoxyfloors.com.au" className="text-gray-700 text-xs hover:text-[#A11717] transition-colors break-all">
                  info@sydneyepoxyfloors.com.au
                </a>
              </InfoCell>

              <InfoCell icon={Clock} label="Hours">
                <div className="space-y-0.5">
                  {[["Mon–Fri", "8am – 5pm"], ["Saturday", "9am – 2pm"], ["Sunday", "Closed"]].map(([d, t]) => (
                    <div key={d} className="flex justify-between gap-3 text-[10px]">
                      <span className="text-gray-400">{d}</span>
                      <span className={t === "Closed" ? "text-gray-300" : "text-gray-700 font-medium"}>{t}</span>
                    </div>
                  ))}
                </div>
              </InfoCell>
            </div>

            {/* Map box */}
            <div className="flex-1 min-h-[300px] flex">
              <iframe
                title="Showroom map"
                src="https://maps.google.com/maps?q=6%20Giffard%20Street%20Silverwater%20NSW%202128&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[300px] border-0 grayscale contrast-110"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="md:col-span-6 bg-white p-7 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8 max-w-md mx-auto">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle2 size={26} className="text-green-500" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Quote Request Received</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-7">
                  Thanks, <span className="text-gray-700 font-medium">{form.name}</span>. Our team will be in touch within 24 hours.
                </p>
                <div className="w-full border-t border-gray-100 pt-5 mb-7 space-y-2.5 text-left">
                  {[["Service", form.serviceType], form.area ? ["Area", `${form.area} sqm`] : null, ["Email", form.email], ["Phone", form.phone]]
                    .filter(Boolean).map(([k, v]) => (
                      <div key={k} className="flex gap-6 text-sm">
                        <span className="text-gray-400 w-16 shrink-0">{k}</span>
                        <span className="text-gray-700">{v}</span>
                      </div>
                    ))}
                </div>
                <button onClick={handleReset}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#A11717] hover:opacity-70 transition-opacity cursor-pointer">
                  Submit another request <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-6 pb-5 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-800 mb-0.5">Send an Estimate Request</h2>
                  <p className="text-xs text-gray-400">Fields marked <span className="text-[#A11717]">*</span> are required.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-6">
                  <div className="sm:col-span-2">
                    <Field label="Full Name" required error={errors.name}>
                      <input type="text" value={form.name} onChange={set("name")} placeholder="John Doe" className={inputCls(errors.name)} />
                    </Field>
                  </div>

                  <Field label="Email Address" required error={errors.email}>
                    <input type="email" value={form.email} onChange={set("email")} placeholder="john@example.com" className={inputCls(errors.email)} />
                  </Field>

                  <Field label="Phone Number" required error={errors.phone}>
                    <input type="text" value={form.phone} onChange={set("phone")} placeholder="0412 345 678" className={inputCls(errors.phone)} />
                  </Field>

                  <Field label="Epoxy Service" required error={errors.serviceType}>
                    <select value={form.serviceType} onChange={set("serviceType")} className={inputCls(errors.serviceType) + " cursor-pointer appearance-none bg-white"}>
                      <option value="">— Select a service —</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>

                  <Field label="Floor Area (sqm)">
                    <input type="number" value={form.area} onChange={set("area")} placeholder="e.g. 50" min="1" className={inputCls(false)} />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Project Details">
                      <textarea value={form.message} onChange={set("message")} rows={3}
                        placeholder="Floor condition, finish preference, timeline…"
                        className={inputCls(false) + " resize-none"} />
                    </Field>
                  </div>
                </div>

                <button type="submit" disabled={submitting}
                  className="inline-flex items-center gap-2.5 bg-[#A11717] hover:bg-[#8f1414] disabled:opacity-60 text-white text-sm font-semibold px-7 py-2.5 rounded-full transition-colors duration-200 cursor-pointer">
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>Request Free Quote <Send size={13} /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

function InfoCell({ icon: Icon, label, children }) {
  return (
    <div className="px-5 py-4 flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <Icon size={11} className="text-[#A11717]" strokeWidth={2.5} />
        <span className="text-[9px] font-bold tracking-[.18em] uppercase text-gray-400">{label}</span>
      </div>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
}
