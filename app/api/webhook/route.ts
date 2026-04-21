import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { addBooking, bookingExists } from "@/lib/bookings"
import { Resend } from "resend"
import { classes } from "@/lib/classes"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get("stripe-signature")!

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object
    const { classId, name, email, seats } = session.metadata!

    if (bookingExists(session.id)) {
      return NextResponse.json({ ok: true })
    }

    addBooking({
      id: crypto.randomUUID(),
      classId,
      name,
      email,
      seats: Number(seats),
      stripeSessionId: session.id,
      amountPaid: session.amount_total! / 100,
      createdAt: new Date().toISOString(),
    })

    const cls = classes.find((c) => c.id === classId)

    await resend.emails.send({
      from: "Sunday Flowers <hello@sundayflowers.co>",
      to: email,
      subject: `You're booked! ${cls?.date}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; color: #2c2c2c;">
          <h1 style="font-weight: 300; font-size: 28px; margin-bottom: 8px;">See you Sunday! 🌸</h1>
          <p style="color: #666;">Hi ${name}, your spot is confirmed.</p>

          <div style="background: #faf9f6; border-radius: 12px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 8px; font-weight: 500;">${cls?.date}</p>
            <p style="margin: 0 0 4px; color: #666;">${cls?.time}</p>
            <p style="margin: 0 0 4px; color: #666;">${cls?.location}</p>
            <p style="margin: 0; color: #666;">${cls?.address}</p>
          </div>

          <p style="color: #666; line-height: 1.6;">
            <strong>What to bring:</strong> Just yourself! All flowers, tools, and vases are included.
            Wear something you don't mind getting a little wet.
          </p>

          <p style="color: #666; line-height: 1.6;">
            <strong>Cancellations:</strong> Full refund if you cancel at least 48 hours before the class.
          </p>

          <p style="color: #999; font-size: 13px; margin-top: 32px;">
            Questions? Reply to this email or reach us at hello@sundayflowers.co
          </p>
        </div>
      `,
    })
  }

  return NextResponse.json({ ok: true })
}
