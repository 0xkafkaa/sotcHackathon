"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Github className="h-6 w-6" />
            <span className="font-bold text-xl">SOTC Hackathon</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/#why-participate" className="text-muted-foreground hover:text-foreground transition-colors">
            Why Participate
          </Link>
          <Link href="/#themes" className="text-muted-foreground hover:text-foreground transition-colors">
            Themes
          </Link>
          <Link href="/#goal" className="text-muted-foreground hover:text-foreground transition-colors">
            Goals
          </Link>
          <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About SOTC
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/#register">Register Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              href="/#why-participate"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Why Participate
            </Link>
            <Link
              href="/#themes"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Themes
            </Link>
            <Link
              href="/#goal"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Goals
            </Link>
            <Link
              href="/#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              About SOTC
            </Link>
            <Button asChild className="w-full mt-2">
              <Link href="/#register" onClick={toggleMenu}>
                Register Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

