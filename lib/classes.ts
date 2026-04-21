export type ClassSession = {
  id: string
  date: string
  time: string
  location: string
  address: string
  totalSpots: number
  price: number
  description: string
}

export const classes: ClassSession[] = [
  {
    id: "class-may-2025",
    date: "Sunday, May 4, 2025",
    time: "11:00 AM – 1:00 PM",
    location: "Bloom & Co Flower Shop",
    address: "123 Main St, Brooklyn, NY 11201",
    totalSpots: 12,
    price: 95,
    description: "Learn to create a stunning spring arrangement with seasonal blooms. All materials included — just bring yourself and leave with a beautiful bouquet.",
  },
  {
    id: "class-may-2025-2",
    date: "Sunday, May 18, 2025",
    time: "11:00 AM – 1:00 PM",
    location: "Bloom & Co Flower Shop",
    address: "123 Main St, Brooklyn, NY 11201",
    totalSpots: 12,
    price: 95,
    description: "A Mother's Day special workshop — arrange a lush pastel bouquet perfect for gifting or keeping. All materials included.",
  },
]
