"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "/images/pizza-hero.jpg",
    alt: "Wood-fired pizza",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/pasta-dish.jpg",
    alt: "Fresh pasta",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/tiramisu.jpg",
    alt: "Tiramisu dessert",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/restaurant-interior.jpg",
    alt: "Restaurant interior",
    span: "col-span-2 row-span-1",
  },
]

export function GalleryPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
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
            Gallery
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            A Feast for the Eyes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Experience the artistry of Italian cuisine through our visual
            journey of flavors, ambiance, and culinary craftsmanship
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg group ${image.span}`}
            >
              <div className="relative aspect-square w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-foreground font-serif text-lg">
                    {image.alt}
                  </span>
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
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-primary text-primary font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              View Full Gallery
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
