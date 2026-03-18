import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ReservationForm } from "@/components/contact/reservation-form"
import { CateringSection } from "@/components/contact/catering-section"
import { MapSection } from "@/components/contact/map-section"

export const metadata: Metadata = {
  title: "Contact & Reservations | Sale & Pepe Ristorante Italiano",
  description:
    "Reserve your table at Sale & Pepe Italian restaurant in Ahmedabad. Contact us for reservations, catering inquiries, or any questions.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ReservationForm />
      <CateringSection />
      <MapSection />
      <Footer />
    </main>
  )
}
