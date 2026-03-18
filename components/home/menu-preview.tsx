"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const menuHighlights = [
  {
    name: "Wood-Fired Pizza Margherita",
    description:
      "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
    price: "695",
    image: "/images/pizza-hero.jpg",
    category: "Pizza",
  },
  {
    name: "Truffle Tagliatelle",
    description:
      "Handmade pasta with porcini mushrooms, black truffle, and parmesan cream",
    price: "895",
    image: "/images/pasta-dish.jpg",
    category: "Pasta",
  },
  {
    name: "Classic Tiramisu",
    description:
      "Espresso-soaked ladyfingers, mascarpone cream, cocoa dusting",
    price: "425",
    image: "/images/tiramisu.jpg",
    category: "Dessert",
  },
]

export function MenuPreview() {
  return (
    <section className="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Signature Dishes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Discover our chef&apos;s selection of authentic Italian dishes,
            crafted with the finest ingredients and timeless recipes
          </p>
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuHighlights.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs tracking-wider uppercase rounded-sm">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-primary font-medium">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/menu">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary/90"
            >
              Explore Full Menu
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
