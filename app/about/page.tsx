import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { OurValues } from "@/components/about/our-values"
import { MeetTheTeam } from "@/components/about/meet-the-team"

export const metadata: Metadata = {
  title: "About Us | Sale & Pepe Ristorante Italiano",
  description:
    "Discover the story behind Sale & Pepe, our passion for authentic Italian cuisine, and the team that brings the flavors of Italy to Ahmedabad.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <OurStory />
      <OurValues />
      <MeetTheTeam />
      <Footer />
    </main>
  )
}
