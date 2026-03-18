"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, User, Phone, MessageSquare, Check } from "lucide-react"

export function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    setIsSubmitted(true)
    // In production, this would send to an API or WhatsApp
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <section id="reservation" className="py-16 lg:py-24 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-card border border-border rounded-lg p-12"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="font-serif text-3xl text-foreground mb-4">
              Reservation Request Received!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for choosing Sale & Pepe. We will confirm your
              reservation shortly via phone or email.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-primary hover:underline"
            >
              Make another reservation
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="reservation" className="py-16 lg:py-24 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Reservations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Book Your Table
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Reserve your spot for an unforgettable Italian dining experience.
              For immediate assistance or large group bookings, please call us
              directly.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Quick Reservation
                  </p>
                  <a
                    href="tel:+917990494482"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    +91 79904 94482
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Reservation Hours
                  </p>
                  <p className="text-foreground font-medium">
                    10:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-6 lg:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="">Select time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guests & Occasion */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="10+">10+ Guests</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="occasion"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Occasion
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="date">Date Night</option>
                    <option value="celebration">Celebration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Special Requests
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any dietary requirements or special requests..."
                    className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary/90"
              >
                Book Your Table
              </motion.button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our reservation policy.
                We will confirm your booking within 2 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
