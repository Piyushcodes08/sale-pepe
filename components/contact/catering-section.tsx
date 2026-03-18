"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Building2,
  PartyPopper,
  Heart,
  Utensils,
  Check,
  Phone,
  Mail,
} from "lucide-react"

const cateringServices = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Impress your clients and colleagues with authentic Italian cuisine.",
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    description: "From intimate gatherings to grand celebrations.",
  },
  {
    icon: Heart,
    title: "Wedding Receptions",
    description: "Make your special day even more memorable.",
  },
  {
    icon: Utensils,
    title: "Special Occasions",
    description: "Birthdays, anniversaries, and milestone celebrations.",
  },
]

export function CateringSection() {
  const [showForm, setShowForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="catering" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/gallery/antipasti.jpg"
                alt="Catering spread"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Catering Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              We Bring the Italian Experience to Your Venue
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Let our expert team transform your event with the flavors of
              Italy. From passed appetizers to full-service dining, we create
              unforgettable culinary experiences tailored to your needs.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {cateringServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <service.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {service.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {!showForm && !isSubmitted && (
              <motion.button
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary/90"
              >
                Request Catering
              </motion.button>
            )}

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Request Submitted!
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ll contact you within 24 hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {showForm && !isSubmitted && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-lg p-6 space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    placeholder="Event Date"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="number"
                    placeholder="Expected Guests"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your event..."
                  rows={3}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <div className="flex gap-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary/90"
                  >
                    Submit Request
                  </motion.button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-border text-muted-foreground font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:border-foreground hover:text-foreground"
                  >
                    Cancel
                  </button>
                </div>
              </motion.form>
            )}

            {/* Direct Contact */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a
                href="tel:+917990494482"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 79904 94482
              </a>
              <a
                href="mailto:catering@salepepe.in"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                catering@salepepe.in
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
