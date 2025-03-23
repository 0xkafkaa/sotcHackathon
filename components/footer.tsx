import Link from "next/link"
import { Github, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Github className="h-6 w-6" />
              <span className="font-bold text-xl">SOTC Hackathon</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              A week-long FOSS-based hackathon to build impactful solutions and explore open-source technologies.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#why-participate"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Why Participate
                </Link>
              </li>
              <li>
                <Link href="/#themes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Themes & Challenges
                </Link>
              </li>
              <li>
                <Link href="/#goal" className="text-muted-foreground hover:text-foreground transition-colors">
                  Goals
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About SOTC
                </Link>
              </li>
              <li>
                <Link href="/#register" className="text-muted-foreground hover:text-foreground transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-muted-foreground">
              Dept of Computer Science,
              <br />
              Pondicherry University
              <br />
              Puducherry, India
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SOTC Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

