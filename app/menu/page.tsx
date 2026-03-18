import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuContent } from "@/components/menu/menu-content"

export const metadata: Metadata = {
  title: "Menu | Sale & Pepe Ristorante Italiano",
  description:
    "Explore our authentic Italian menu featuring wood-fired pizzas, handcrafted pastas, and delicious desserts at Sale & Pepe Ahmedabad.",
}

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <MenuHero />
      <MenuContent />
      <Footer />
    </main>
  )
}
