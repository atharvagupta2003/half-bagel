"use client";

const ITEMS = [
  "Brand Strategy",
  "Creative Direction",
  "Growth Marketing",
  "Sales Alignment",
  "Campaign Development",
  "Content Strategy",
  "Brand Identity",
  "Social Media",
  "Pop-Ups & Activations",
  "Creative Oversight",
];

export default function MarqueeSection() {
  // Double the array so the loop is seamless
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section className="relative py-5 bg-black overflow-hidden border-y border-white/5">
      {/* Left/right fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-tan uppercase mx-5">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-ember flex-shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
