"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Award, Utensils, Coffee } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "Award Winning",
    description: "5-time Food Awards Winner",
  },
  {
    icon: Utensils,
    title: "Authentic Recipes",
    description: "Traditional Italian cuisine",
  },
  {
    icon: Coffee,
    title: "Cafe Style",
    description: "Burgers, Pizza & More",
  },
]

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Restaurant Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 lg:-right-12 bg-card border border-border p-6 rounded-lg shadow-2xl"
            >
              <p className="font-serif text-5xl text-primary">15+</p>
              <p className="text-sm text-muted-foreground mt-1">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              A Taste of Italy in the Heart of Ahmedabad
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Since our inception, Sale & Pepe has been dedicated to bringing
              the authentic flavors of Italy to Ahmedabad. Our chefs, trained in
              the traditional Italian culinary arts, craft each dish with
              passion and precision.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From handmade pastas to wood-fired pizzas, every meal tells a
              story of tradition, quality ingredients, and the warmth of Italian
              hospitality.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-primary text-primary font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Discover Our Story
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
