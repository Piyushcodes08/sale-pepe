"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/chef-cooking.jpg"
          alt="Chef cooking"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Experience Excellence
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Reserve Your Table for an Unforgettable Evening
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether it&apos;s a romantic dinner for two, a family celebration,
              or a corporate gathering, we promise an experience that delights
              all your senses.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us at</p>
                  <a
                    href="tel:+917990494482"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    +91 79904 94482
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit us at</p>
                  <p className="text-foreground font-medium">
                    Times Square Arcade, Thaltej, Ahmedabad
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Open daily</p>
                  <p className="text-foreground font-medium">
                    12:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#reservation">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary/90 w-full sm:w-auto"
                >
                  Reserve Now
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-foreground/30 text-foreground font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:border-primary hover:text-primary w-full sm:w-auto"
                >
                  Get Directions
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Catering Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-8 lg:p-10"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Catering Services
            </p>
            <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
              We Bring the Italian Experience to Your Venue
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From intimate gatherings to grand celebrations, our catering
              services bring the authentic Sale & Pepe experience to your
              location. Let us create a memorable culinary journey for your
              guests.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Corporate Events
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Private Parties
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Wedding Receptions
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Special Occasions
              </li>
            </ul>
            <Link href="/contact#catering">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-primary text-primary font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground w-full"
              >
                Request Catering
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
