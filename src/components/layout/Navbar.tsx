"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Menu, X, ArrowRight, ShieldCheck } from "lucide-react"

interface NavbarProps {
  onExploreClick?: () => void
  onGetStartedClick?: () => void
}

export function Navbar({ onExploreClick, onGetStartedClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Market Intelligence", href: "#market-intel" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Price Discovery", href: "#price-discovery" },
    { label: "Buyers", href: "#buyers" },
    { label: "FPOs", href: "#fpo-ecosystem" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="size-9 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-xs group-hover:bg-brand-primary-hover transition-colors">
            <TrendingUp className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-foreground flex items-center gap-1.5">
              Farmora
              <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-brand-primary-light text-brand-primary tracking-wider">
                Govt. Edition
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onExploreClick}
            className="text-muted-foreground hover:text-foreground text-sm font-medium"
          >
            Live Mandi Data
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={onGetStartedClick}
            className="font-medium"
          >
            Get Started
            <ArrowRight className="size-3.5 ml-1" />
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false)
                onExploreClick?.()
              }}
            >
              Live Mandi Data
            </Button>
            <Button
              variant="primary"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false)
                onGetStartedClick?.()
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
