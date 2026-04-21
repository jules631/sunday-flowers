"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import { classes } from "@/lib/classes"
import Link from "next/link"

export default function WaitlistPage() {
  const { classId } = useParams<{ classId: string }>()
  const cls = classes.find((c) => c.id === classId)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (!cls) return null

  if (submitted) {
    return (
      <main className="max-w-md mx-auto px-6 py-24 text-center">
        <p className="text-2xl mb-3">Got it!</p>
        <p className="text-gray-500 mb-6">We&apos;ll email you at <strong>{email}</strong> if a spot opens up.</p>
        <Link href="/" className="text-sm text-rose-400 underline">← Back to classes</Link>
      </main>
    )
  }

  return (
    <main className="max-w-md mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-8 block">← Back</Link>
      <h1 className="text-3xl font-light mb-2">Join the Waitlist</h1>
      <p className="text-gray-500 mb-8">{cls.date} is sold out. Leave your email and we&apos;ll let you know if a spot opens up.</p>
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
          placeholder="your@email.com"
        />
        <button
          type="submit"
          className="w-full bg-rose-400 hover:bg-rose-500 text-white py-3 rounded-full text-sm transition-colors"
        >
          Notify me
        </button>
      </form>
    </main>
  )
}
