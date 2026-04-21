import fs from "fs"
import path from "path"

export type Booking = {
  id: string
  classId: string
  name: string
  email: string
  seats: number
  stripeSessionId: string
  amountPaid: number
  createdAt: string
}

const DB_PATH = path.join(process.cwd(), "data", "bookings.json")

function ensureDb() {
  const dir = path.dirname(DB_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, "[]")
}

export function getBookings(): Booking[] {
  ensureDb()
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"))
}

export function getBookingsByClass(classId: string): Booking[] {
  return getBookings().filter((b) => b.classId === classId)
}

export function getBookedSeats(classId: string): number {
  return getBookingsByClass(classId).reduce((sum, b) => sum + b.seats, 0)
}

export function addBooking(booking: Booking) {
  ensureDb()
  const bookings = getBookings()
  bookings.push(booking)
  fs.writeFileSync(DB_PATH, JSON.stringify(bookings, null, 2))
}

export function bookingExists(stripeSessionId: string): boolean {
  return getBookings().some((b) => b.stripeSessionId === stripeSessionId)
}
