import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery | Sale & Pepe Ristorante Italiano",
  description:
    "Explore our gallery showcasing the ambiance, dishes, and experiences at Sale & Pepe Italian restaurant in Ahmedabad.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </main>
  )
}
