import type { Metadata } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
})

export const metadata: Metadata = {
  title: "Sunday Flowers — Local Flower Arranging Workshops",
  description: "Join an intimate flower arranging workshop in your neighborhood. All materials included. Leave with a beautiful bouquet.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
