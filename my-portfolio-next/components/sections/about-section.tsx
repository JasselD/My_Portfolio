"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { GraduationCap, Shield, Code2, MapPin } from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Bachelor of Computer and Information Sciences from Auckland University of Technology",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Passionate about building scalable applications with modern technologies and a solid foundation",
  },
  {
    icon: Shield,
    title: "Network and Cybersecurity",
    description: "Specialized in security practices, threat analysis, system administration and network security",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in Auckland, New Zealand - Open to remote opportunities",
  },
]

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-widest uppercase mb-2 text-center">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative max-w-sm mx-auto md:max-w-none">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center overflow-hidden">
                  <Image
                    src="/me.JPG"
                    alt="Photo of me"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-muted-foreground leading-relaxed">
                {"I'm a fresh graduate with a deep passion for technology and problem-solving. My journey in tech started with curiosity about how the computer works, which evolved into a dual focus on Software Development and Cybersecurity."}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                At AUT, I developed strong foundations in programming, system design, and security practices. I believe in writing structured, maintainable code while keeping security at the forefront of every project.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                {"When I'm not coding, you'll find me exploring the latest tech trends, watching tech reviews, or testing out open-source projects."}
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <motion.div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
