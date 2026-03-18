"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={'fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/30 backdrop-blur-md shadow-lg '}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start ">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Sale & Pepe Logo"
                  width={180}
                  height={60} // 👈 approx aspect ratio maintain karo
                  className="object-cover mx-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group"
                >
                  <span
                    className={`text-sm tracking-wider uppercase transition-colors duration-300 ${pathname === link.href
                      ? "text-white"
                      : " text-black font-semibold hover:text-white"
                      }`}
                  >
                    {link.label}
                  </span>

                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: pathname === link.href ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+917990494482"
                className="flex items-center gap-2 text-black font-semibold hover:text-white transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 79904 94482</span>
              </a>

              <Link href="/contact#reservation">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-2 font-semibold py-1 bg-primary text-primary-foreground text-[12px] font-medium tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-primary/90"
                >
                  Reserve Table
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-3xl tracking-wider transition-colors duration-300 ${pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link href="/contact#reservation">
                  <button className="px-8 py-4 bg-primary text-primary-foreground text-lg font-medium tracking-wider uppercase rounded-sm">
                    Reserve Table
                  </button>
                </Link>
              </motion.div>

              <motion.a
                href="tel:+917990494482"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 text-muted-foreground mt-4"
              >
                <Phone className="w-5 h-5" />
                <span>+91 79904 94482</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}