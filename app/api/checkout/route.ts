import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { classes } from "@/lib/classes"
import { getBookedSeats } from "@/lib/bookings"

export async function POST(req: NextRequest) {
  const { classId, name, email, seats } = await req.json()

  const cls = classes.find((c) => c.id === classId)
  if (!cls) return NextResponse.json({ error: "Class not found" }, { status: 404 })

  const booked = getBookedSeats(classId)
  const spotsLeft = cls.totalSpots - booked
  if (seats > spotsLeft) {
    return NextResponse.json({ error: `Only ${spotsLeft} spot${spotsLeft === 1 ? "" : "s"} left` }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Sunday Flowers Workshop — ${cls.date}`,
            description: `${cls.time} · ${cls.location} · ${seats} spot${seats > 1 ? "s" : ""}`,
          },
          unit_amount: cls.price * 100,
        },
        quantity: seats,
      },
    ],
    mode: "payment",
    customer_email: email,
    metadata: { classId, name, email, seats: String(seats) },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/confirmed?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/book/${classId}`,
  })

  return NextResponse.json({ url: session.url })
}
