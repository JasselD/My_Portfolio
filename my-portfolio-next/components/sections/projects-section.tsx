"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { ExternalLink, Github, Globe, Terminal } from "lucide-react"

const projects = [
  {
    title: "BlackJack Game",
    description:
      "Command-line Blackjack game in Java implementing core rules, dealer AI, bust detection, and payout calculation. Designed with clean, reusable OOP components and clear separation of concerns.",
    image: "🃏",
    tags: ["Java", "OOP", "CLI", "Game Logic"],
    github: "https://github.com/JasselD/BlackJack",
    icon: Terminal,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "LectureSync.AI",
    description:
      "Full-stack web app that turns lecture audio into study materials (transcripts, summaries, quizzes) plus a note-focused AI chat assistant. Integrates multiple OpenAI models with a production-ready Next.js + PostgreSQL architecture.",
    image: "🎧",
    tags: ["Next.js", "React", "PostgreSQL", "OpenAI"],
    github: "https://github.com/ali-sultani-dev/LectureSync_AI",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/20",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-widest uppercase mb-2 text-center">
            What I Built
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-balance">
            Projects
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A selection of projects that showcase my skills in software development
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
                whileHover={{ y: -5 }}
              >
                {/* Project image/icon area */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <motion.div
                    className="text-7xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.image}
                  </motion.div>
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm">
                    <project.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
