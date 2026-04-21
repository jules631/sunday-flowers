"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { classes } from "@/lib/classes"
import Link from "next/link"

export default function BookPage() {
  const { classId } = useParams<{ classId: string }>()
  const router = useRouter()
  const cls = classes.find((c) => c.id === classId)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [seats, setSeats] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  if (!cls) {
    return (
      <main className="max-w-md mx-auto px-6 py-16 text-center">
        <p className="text-gray-500">Class not found.</p>
        <Link href="/" className="text-rose-400 underline mt-4 block">← Back to classes</Link>
      </main>
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ classId: cls!.id, name, email, seats }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || "Something went wrong. Please try again.")
      setLoading(false)
      return
    }

    router.push(data.url)
  }

  const total = cls.price * seats

  return (
    <main className="max-w-md mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-8 block">← Back</Link>

      <h1 className="text-3xl font-light mb-2">Book Your Spot</h1>
      <p className="text-gray-500 mb-8">{cls.date} · {cls.time}</p>

      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-8 text-sm text-gray-600">
        <p className="font-medium text-gray-900 mb-1">{cls.location}</p>
        <p>{cls.address}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Your name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Email address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="jane@email.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Number of spots</label>
          <select
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "spot" : "spots"}</option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="pt-2">
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>${cls.price} × {seats} spot{seats > 1 ? "s" : ""}</span>
            <span className="font-medium text-gray-900">${total}</span>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-400 hover:bg-rose-500 disabled:opacity-50 text-white py-3 rounded-full text-sm transition-colors"
          >
            {loading ? "Redirecting to payment..." : `Pay $${total} →`}
          </button>
          <p className="text-xs text-gray-400 text-center mt-3">Secure payment via Stripe. Full refund if cancelled 48h before class.</p>
        </div>
      </form>
    </main>
  )
}
