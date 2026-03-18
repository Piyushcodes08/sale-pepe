"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Phone } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-16 lg:py-24 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Visit Our Restaurant
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Located in the heart of Thaltej, Ahmedabad, we&apos;re easy to find
            and always ready to welcome you
          </p>
        </motion.div>

        {/* Map and Info */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative aspect-[16/9] lg:aspect-auto lg:h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4!2d72.51!3d23.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThaltej%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sale & Pepe Location"
              className="absolute inset-0 grayscale contrast-125"
            />
            {/* Overlay for styling */}
            <div className="absolute inset-0 pointer-events-none border border-border rounded-lg" />
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Address Card */}
            <div className="bg-card border border-border rounded-lg p-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    Address
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Times Square Arcade,
                    <br />
                    Thaltej, Ahmedabad,
                    <br />
                    Gujarat 380059, India
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=Times+Square+Arcade+Thaltej+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary/90"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </motion.button>
              </a>
              <a href="tel:+917990494482">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-foreground/30 text-foreground font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.button>
              </a>
            </div>

            {/* Parking Info */}
            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Parking:</span>{" "}
                Complimentary valet parking available for all guests.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
