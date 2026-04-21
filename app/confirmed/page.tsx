import Link from "next/link"

export default function ConfirmedPage() {
  return (
    <main className="max-w-md mx-auto px-6 py-24 text-center">
      <div className="text-5xl mb-6">🌸</div>
      <h1 className="text-3xl font-light mb-3">You&apos;re booked!</h1>
      <p className="text-gray-500 leading-relaxed mb-8">
        Check your email for all the details. We can&apos;t wait to see what you create.
      </p>
      <Link href="/" className="text-sm text-rose-400 underline underline-offset-4">
        ← Back to Sunday Flowers
      </Link>
    </main>
  )
}
