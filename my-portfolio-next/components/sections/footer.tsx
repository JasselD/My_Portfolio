"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Auckland, NZ
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jassel Doong. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating social icons bottom-right */}
      <div className="hidden md:block fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
        <div className="flex items-center gap-3 bg-card/90 border border-border rounded-full px-3 py-2 shadow-lg backdrop-blur">
          <a
            href="https://github.com/JasselD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jassel-doong-8a6143288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:doongjassel48@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </>
  )
}
