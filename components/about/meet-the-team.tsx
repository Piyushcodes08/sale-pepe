"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Marco Rossi",
    role: "Executive Chef",
    description:
      "Trained in Naples, Marco brings 20 years of culinary expertise to every dish.",
    image: "/images/chef-cooking.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Head Barista",
    description:
      "Our coffee expert crafts the perfect brew to complement your cafe experience.",
    image: "/images/gallery/cafe-counter.jpg",
  },
  {
    name: "Raj Patel",
    role: "Restaurant Manager",
    description:
      "Ensuring every guest receives the warm hospitality that Sale & Pepe is known for.",
    image: "/images/gallery/dining-setup.jpg",
  },
]

export function MeetTheTeam() {
  return (
    <section className="py-20 lg:py-32 bg-background">
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
            Our Team
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Meet the Artisans
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The passionate individuals who bring the Sale & Pepe experience to
            life
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm tracking-wider uppercase mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to be part of our team? We&apos;re always looking for
            passionate individuals.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-primary text-primary font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
