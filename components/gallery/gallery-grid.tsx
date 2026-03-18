"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryCategories = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "ambiance", label: "Ambiance" },
  { id: "cafe", label: "Cafe" },
]

const galleryImages = [
  {
    id: 1,
    src: "/images/pizza-hero.jpg",
    alt: "Wood-fired Margherita Pizza",
    category: "food",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/images/pasta-dish.jpg",
    alt: "Truffle Tagliatelle",
    category: "food",
    span: "",
  },
  {
    id: 3,
    src: "/images/gallery/cafe-counter.jpg",
    alt: "Cafe Counter",
    category: "cafe",
    span: "",
  },
  {
    id: 4,
    src: "/images/restaurant-interior.jpg",
    alt: "Restaurant Interior",
    category: "ambiance",
    span: "md:col-span-2",
  },
  {
    id: 5,
    src: "/images/tiramisu.jpg",
    alt: "Classic Tiramisu",
    category: "food",
    span: "",
  },
  {
    id: 6,
    src: "/images/gallery/bruschetta.jpg",
    alt: "Bruschetta al Pomodoro",
    category: "food",
    span: "",
  },
  {
    id: 7,
    src: "/images/gallery/dining-setup.jpg",
    alt: "Romantic Dining Setup",
    category: "ambiance",
    span: "md:col-span-2",
  },
  {
    id: 8,
    src: "/images/gallery/risotto.jpg",
    alt: "Saffron Risotto",
    category: "food",
    span: "",
  },
  {
    id: 9,
    src: "/images/chef-cooking.jpg",
    alt: "Chef in Action",
    category: "ambiance",
    span: "",
  },
  {
    id: 10,
    src: "/images/gallery/wood-oven.jpg",
    alt: "Traditional Wood-fired Oven",
    category: "ambiance",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 11,
    src: "/images/gallery/antipasti.jpg",
    alt: "Antipasti Selection",
    category: "food",
    span: "",
  },
  {
    id: 12,
    src: "/images/hero-restaurant.jpg",
    alt: "Evening Ambiance",
    category: "ambiance",
    span: "",
  },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const handlePrevious = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    )
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    setSelectedImage(filteredImages[prevIndex].id)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    )
    const nextIndex =
      currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(filteredImages[nextIndex].id)
  }

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12"
        >
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 lg:px-6 py-2 lg:py-3 text-sm tracking-wider uppercase transition-all duration-300 rounded-sm ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${image.span}`}
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-foreground font-serif text-lg text-center px-4">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300 z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6">
                <p className="text-foreground font-serif text-xl text-center">
                  {selectedImageData.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
