"use client"

import { motion } from "framer-motion"
import { Award, Heart, Leaf, Users, Flame, Star } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "Every dish is prepared with love and dedication to the art of Italian cuisine.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We use only the finest, freshest ingredients sourced from trusted suppliers.",
  },
  {
    icon: Flame,
    title: "Traditional Methods",
    description:
      "Our wood-fired oven and time-honored techniques ensure authentic flavors.",
  },
  {
    icon: Users,
    title: "Hospitality",
    description:
      "We treat every guest like family, ensuring a warm and memorable experience.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Award-winning quality recognized by food critics and loyal customers alike.",
  },
  {
    icon: Star,
    title: "Consistency",
    description:
      "The same exceptional quality and taste, every single time you visit us.",
  },
]

const achievements = [
  { number: "15+", label: "Years of Excellence" },
  { number: "5x", label: "Food Award Winner" },
  { number: "50K+", label: "Happy Customers" },
  { number: "100+", label: "Menu Items" },
]

export function OurValues() {
  return (
    <section className="py-20 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Our Values
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            What Drives Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These core values guide everything we do, from the kitchen to your
            table
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-lg p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-4xl lg:text-5xl text-primary mb-2">
                  {item.number}
                </p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
