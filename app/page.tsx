import Link from "next/link"
import Image from "next/image"
import { classes } from "@/lib/classes"
import { getBookedSeats } from "@/lib/bookings"
import BloomingFlower from "@/components/BloomingFlower"

export const dynamic = "force-dynamic"

const testimonials = [
  {
    quote: "I've never arranged flowers in my life. I left with something I was genuinely proud of — and so did everyone else in the class.",
    name: "Maya R.",
    detail: "Attended May 2025",
  },
  {
    quote: "The perfect Sunday morning. Small group, great energy, and the florist really took time with each person. Already booked my next one.",
    name: "Danielle S.",
    detail: "Attended April 2025",
  },
  {
    quote: "Bought two spots as a birthday gift for my best friend. She said it was the best gift she's gotten in years.",
    name: "Chris T.",
    detail: "Gift purchaser",
  },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/4612197/pexels-photo-4612197.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Woman arranging flowers at a workshop"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <BloomingFlower />
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 9vw, 6rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.0,
              letterSpacing: "0.01em",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Sunday Flowers
          </h1>
          <p className="text-white/85 text-base max-w-sm leading-relaxed mb-8" style={{ fontFamily: "var(--font-jost)" }}>
            Intimate flower arranging workshops in Brooklyn. All materials included.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="#classes"
              className="bg-white text-gray-900 text-sm px-6 py-3 rounded-full hover:bg-rose-50 transition-colors"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Book a class
            </a>
            <Link
              href="#gift"
              className="border border-white text-white text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Give as a gift →
            </Link>
          </div>
        </div>
      </section>

      {/* ── What you'll make ── */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/4466585/pexels-photo-4466585.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Beautiful bouquet at florist workshop"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-rose-400 mb-4" style={{ fontFamily: "var(--font-jost)" }}>What you'll make</p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
            }}
          >
            A bouquet you made with your own hands
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "var(--font-jost)" }}>
            Each class is guided by a local florist who walks you through choosing stems, building structure, and finishing with a wrap. No experience needed — just curiosity.
          </p>
          <div className="space-y-3">
            {[
              "Fresh seasonal blooms sourced locally",
              "All tools and vases provided",
              "Take your arrangement home",
              "Max 12 people per class",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-600" style={{ fontFamily: "var(--font-jost)" }}>
                <span className="text-rose-300">✦</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Classes ── */}
      <section id="classes" className="bg-[#f5f2ed] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-rose-400 mb-2 text-center" style={{ fontFamily: "var(--font-jost)" }}>Brooklyn, New York</p>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Upcoming Classes
          </h2>
          <div className="space-y-5">
            {classes.map((cls) => {
              const booked = getBookedSeats(cls.id)
              const spotsLeft = cls.totalSpots - booked
              const isFull = spotsLeft <= 0

              return (
                <div key={cls.id} className="border border-gray-200 rounded-2xl p-6 bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-gray-900" style={{ fontFamily: "var(--font-jost)" }}>{cls.date}</p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-jost)" }}>{cls.time} · {cls.location}</p>
                    </div>
                    <span className="text-xl font-light text-gray-900" style={{ fontFamily: "var(--font-cormorant)" }}>${cls.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "var(--font-jost)" }}>{cls.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isFull ? "text-red-400" : spotsLeft <= 3 ? "text-amber-500 font-medium" : "text-green-600"}`} style={{ fontFamily: "var(--font-jost)" }}>
                      {isFull ? "Sold out" : spotsLeft <= 3 ? `⚡ Only ${spotsLeft} spot${spotsLeft === 1 ? "" : "s"} left` : `${spotsLeft} spots available`}
                    </span>
                    {isFull ? (
                      <Link href={`/waitlist/${cls.id}`} className="text-sm underline underline-offset-4 text-gray-500 hover:text-gray-800" style={{ fontFamily: "var(--font-jost)" }}>
                        Join waitlist
                      </Link>
                    ) : (
                      <Link href={`/book/${cls.id}`} className="bg-rose-400 hover:bg-rose-500 text-white text-sm px-5 py-2 rounded-full transition-colors" style={{ fontFamily: "var(--font-jost)" }}>
                        Book your spot →
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Gift section ── */}
      <section id="gift" className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-widest uppercase text-rose-400 mb-4" style={{ fontFamily: "var(--font-jost)" }}>Give the gift of flowers</p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
            }}
          >
            The best gifts are experiences
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8" style={{ fontFamily: "var(--font-jost)" }}>
            A Sunday Flowers class makes a perfect gift for birthdays, anniversaries, Mother&apos;s Day, or anyone who deserves a beautiful morning. Book any number of spots and share the confirmation email.
          </p>
          <a
            href="#classes"
            className="inline-block bg-gray-900 hover:bg-gray-700 text-white text-sm px-7 py-3 rounded-full transition-colors"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Buy a gift spot →
          </a>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/5894099/pexels-photo-5894099.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Person arranging a flower bouquet"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#f5f2ed] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            What people are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6">
                <p className="text-gray-600 leading-relaxed mb-4 text-sm" style={{ fontFamily: "var(--font-jost)" }}>&ldquo;{t.quote}&rdquo;</p>
                <p className="font-medium text-gray-900 text-sm" style={{ fontFamily: "var(--font-jost)" }}>{t.name}</p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-jost)" }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner CTA ── */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-widest uppercase text-rose-400 mb-4" style={{ fontFamily: "var(--font-jost)" }}>Are you a flower shop?</p>
        <h2
          className="mb-4"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          Host a workshop with us
        </h2>
        <p className="text-gray-500 leading-relaxed mb-8" style={{ fontFamily: "var(--font-jost)" }}>
          We fill your class. You teach it. We handle all the marketing, booking, and payment. You earn guaranteed revenue every Sunday — with zero marketing effort.
        </p>
        <Link
          href="/partner"
          className="inline-block border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-sm px-7 py-3 rounded-full transition-colors"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          See how it works →
        </Link>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400" style={{ fontFamily: "var(--font-jost)" }}>
        <p>Questions? <a href="mailto:hello@sundayflowers.co" className="underline underline-offset-2">hello@sundayflowers.co</a> · <a href="https://instagram.com/sundayflowersnyc" className="underline underline-offset-2">@sundayflowersnyc</a></p>
        <p className="mt-1">© {new Date().getFullYear()} Sunday Flowers · Brooklyn, NY · Photos by <a href="https://pexels.com" className="underline underline-offset-2">Pexels</a></p>
      </footer>
    </main>
  )
}
