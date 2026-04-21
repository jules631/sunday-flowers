import { getBookings } from "@/lib/bookings"
import { classes } from "@/lib/classes"

export const dynamic = "force-dynamic"

const JONATHAN_CUT = 0.28

export default function AdminPage() {
  const bookings = getBookings()

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-light mb-2">Admin</h1>
      <p className="text-gray-400 text-sm mb-10">Sunday Flowers · Internal dashboard</p>

      {classes.map((cls) => {
        const classBookings = bookings.filter((b) => b.classId === cls.id)
        const totalSeats = classBookings.reduce((s, b) => s + b.seats, 0)
        const totalRevenue = classBookings.reduce((s, b) => s + b.amountPaid, 0)
        const myEarnings = totalRevenue * JONATHAN_CUT
        const shopEarnings = totalRevenue * (1 - JONATHAN_CUT)
        const spotsLeft = cls.totalSpots - totalSeats

        return (
          <section key={cls.id} className="mb-12">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-medium text-gray-900">{cls.date}</h2>
                <p className="text-sm text-gray-500">{cls.location}</p>
              </div>
              <span className={`text-sm px-3 py-1 rounded-full ${spotsLeft > 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-400"}`}>
                {spotsLeft > 0 ? `${spotsLeft} spots left` : "Sold out"}
              </span>
            </div>

            {/* Revenue summary */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: "Total revenue", value: `$${totalRevenue.toFixed(2)}` },
                { label: "Your cut (28%)", value: `$${myEarnings.toFixed(2)}` },
                { label: "Shop cut (72%)", value: `$${shopEarnings.toFixed(2)}` },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <p className="text-lg font-light">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Bookings table */}
            {classBookings.length === 0 ? (
              <p className="text-sm text-gray-400 italic">No bookings yet.</p>
            ) : (
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left text-xs text-gray-400 uppercase tracking-wide">
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3 text-center">Seats</th>
                      <th className="px-4 py-3 text-right">Paid</th>
                      <th className="px-4 py-3 text-right">Booked</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {classBookings.map((b) => (
                      <tr key={b.id} className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-900">{b.name}</td>
                        <td className="px-4 py-3 text-gray-500">{b.email}</td>
                        <td className="px-4 py-3 text-center text-gray-700">{b.seats}</td>
                        <td className="px-4 py-3 text-right text-gray-700">${b.amountPaid.toFixed(2)}</td>
                        <td className="px-4 py-3 text-right text-gray-400">
                          {new Date(b.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )
      })}
    </main>
  )
}
