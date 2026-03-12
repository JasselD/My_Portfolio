"use client"

import { TypingAnimation } from "@/components/typing-animation"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const roles = [
    "Software Developer",
    "Network and Cybersecurity",
    "Problem Solver",
    "Vibe Coder :)",
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <ScrollReveal>
          <p className="text-muted-foreground text-sm md:text-base mb-4 tracking-widest uppercase">
            Welcome to my portfolio
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            {"Hi, I'm "}
            <span className="text-primary">Jassel Doong</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12">
            <TypingAnimation texts={roles} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Fresh graduate from Auckland University of Technology with a passion for 
            building secure, elegant software solutions. Double Majoring in Software Development 
            and Cybersecurity.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="https://github.com/JasselD"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:doongjassel48@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <motion.div
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2"
                animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Scroll down</p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
