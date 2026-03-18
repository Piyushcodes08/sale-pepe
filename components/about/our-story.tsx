"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/chef-cooking.jpg"
                alt="Our Chef at Work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Est. 2009
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              From Italy with Love
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sale & Pepe was born from a simple dream: to bring the authentic
                taste of Italy to Ahmedabad. What started as a passion project
                has blossomed into one of the city&apos;s most beloved Italian
                dining destinations.
              </p>
              <p>
                Our name, &quot;Salt & Pepper&quot; in Italian, represents the
                foundation of great cooking - simple ingredients, prepared with
                care and expertise. We believe that the best dishes come from
                respecting tradition while embracing innovation.
              </p>
              <p>
                Every pasta is handmade, every pizza is fired in our traditional
                wood-burning oven, and every dish is crafted with the same love
                and attention that Italian nonnas have passed down through
                generations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20 lg:mt-32">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Tradition Meets Excellence
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We source the finest ingredients, from imported Italian San
                Marzano tomatoes to locally grown fresh herbs. Our commitment to
                quality means we never compromise on what goes into your plate.
              </p>
              <p>
                Our chefs, trained in traditional Italian culinary arts, bring
                decades of experience to every dish. They understand that great
                Italian cuisine is not just about recipes - it&apos;s about
                heart, passion, and the joy of sharing good food.
              </p>
              <p>
                At Sale & Pepe, we don&apos;t just serve meals - we create
                experiences. Whether it&apos;s a romantic dinner for two, a
                family celebration, or a business gathering, we ensure every
                visit is memorable.
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/gallery/wood-oven.jpg"
                alt="Traditional Wood-fired Oven"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
