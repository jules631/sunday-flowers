import Link from "next/link"

export default function PartnerPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-10 block" style={{ fontFamily: "var(--font-jost)" }}>← Back</Link>

      <p className="text-xs tracking-widest uppercase text-rose-400 mb-4" style={{ fontFamily: "var(--font-jost)" }}>For flower shops</p>
      <h1
        className="mb-6"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 300,
          fontStyle: "italic",
          lineHeight: 1.05,
        }}
      >
        Host a Sunday Flowers workshop
      </h1>
      <p className="text-gray-500 leading-relaxed mb-14 text-lg" style={{ fontFamily: "var(--font-jost)" }}>
        We bring you 10–12 paying customers every Sunday morning. You teach, you supply the flowers — we handle everything else.
      </p>

      {/* The math */}
      <section className="mb-14">
        <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: "var(--font-jost)" }}>The numbers</h2>
        <div className="bg-[#f5f2ed] rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-6 mb-6">
            {[
              { label: "Per class revenue", value: "$1,140", sub: "12 attendees × $95" },
              { label: "Your cut (72%)", value: "$820", sub: "deposited after class" },
              { label: "Flower cost estimate", value: "~$300", sub: "$25/person wholesale" },
              { label: "Your net profit", value: "~$520", sub: "one Sunday morning" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-light mb-1" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>{s.value}</p>
                <p className="text-sm font-medium text-gray-700" style={{ fontFamily: "var(--font-jost)" }}>{s.label}</p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-jost)" }}>{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 border-t border-gray-200 pt-4" style={{ fontFamily: "var(--font-jost)" }}>
            2 workshops/month = ~$1,040 net. Plus every attendee is a new customer who now knows your shop.
          </p>
        </div>
      </section>

      {/* What each side does */}
      <section className="mb-14">
        <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: "var(--font-jost)" }}>Who does what</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white">
            <p className="font-medium text-gray-900 mb-4 text-sm" style={{ fontFamily: "var(--font-jost)" }}>Sunday Flowers handles</p>
            <ul className="space-y-2">
              {[
                "All marketing & promotion",
                "Ticket sales & payment processing",
                "Confirmation emails to attendees",
                "Instagram & event listings",
                "Customer support pre-class",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-500" style={{ fontFamily: "var(--font-jost)" }}>
                  <span className="text-rose-300 shrink-0">✦</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-rose-200 rounded-2xl p-6 bg-rose-50/30">
            <p className="font-medium text-gray-900 mb-4 text-sm" style={{ fontFamily: "var(--font-jost)" }}>Your shop handles</p>
            <ul className="space-y-2">
              {[
                "Teaching the 2-hour class",
                "Sourcing fresh seasonal flowers",
                "Providing the space & tools",
                "The expert florist touch",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-500" style={{ fontFamily: "var(--font-jost)" }}>
                  <span className="text-rose-400 shrink-0">✦</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why it's good for them */}
      <section className="mb-14">
        <h2 className="text-xs tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: "var(--font-jost)" }}>Why shops love it</h2>
        <div className="space-y-4">
          {[
            { title: "Guaranteed revenue, zero marketing", body: "Sunday mornings are often slow. We fill that dead time with a room of paying customers — you just show up and do what you do best." },
            { title: "12 new customers every class", body: "Every attendee walks into your shop for the first time. They see your space, meet you, and leave as loyal customers who tell their friends." },
            { title: "Zero risk", body: "We only list the class once you've confirmed the date. If we don't fill at least 8 seats, we cancel and you pay nothing." },
          ].map((item) => (
            <div key={item.title} className="border border-gray-100 rounded-xl p-5">
              <p className="font-medium text-gray-900 mb-1 text-sm" style={{ fontFamily: "var(--font-jost)" }}>{item.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-jost)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-2xl p-8 text-center">
        <h2
          className="text-white mb-3"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "2rem",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          Interested? Let&apos;s talk.
        </h2>
        <p className="text-gray-400 text-sm mb-6" style={{ fontFamily: "var(--font-jost)" }}>
          Send us a note and we&apos;ll follow up within 24 hours.
        </p>
        <a
          href="mailto:hello@sundayflowers.co?subject=I want to host a workshop"
          className="inline-block bg-rose-400 hover:bg-rose-500 text-white text-sm px-8 py-3 rounded-full transition-colors"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Email us to get started →
        </a>
      </section>

      <p className="text-center text-xs text-gray-400 mt-8" style={{ fontFamily: "var(--font-jost)" }}>
        <Link href="/" className="underline underline-offset-2">← Back to Sunday Flowers</Link>
      </p>
    </main>
  )
}
