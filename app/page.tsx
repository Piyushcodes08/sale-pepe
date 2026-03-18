import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { MenuPreview } from "@/components/home/menu-preview"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <MenuPreview />
      <GalleryPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
