"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Times Square Arcade, Thaltej", "Ahmedabad, Gujarat 380059", "India"],
    href: "https://maps.google.com/?q=Times+Square+Arcade+Thaltej+Ahmedabad",
    linkText: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 79904 94482", "+91 79123 45678"],
    href: "tel:+917990494482",
    linkText: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@salepepe.in", "reservations@salepepe.in"],
    href: "mailto:info@salepepe.in",
    linkText: "Send Email",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: [
      "Mon - Thu: 12:00 PM - 11:00 PM",
      "Fri - Sat: 12:00 PM - 12:00 AM",
      "Sunday: 12:00 PM - 11:00 PM",
    ],
  },
]

export function ContactInfo() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 lg:p-8 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4">
                {item.title}
              </h3>
              <div className="space-y-1 mb-4">
                {item.lines.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {line}
                  </p>
                ))}
              </div>
              {item.href && (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-primary text-sm hover:underline"
                >
                  {item.linkText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
