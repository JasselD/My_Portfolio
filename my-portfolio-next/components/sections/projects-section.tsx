"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { ExternalLink, Github, Lock, Globe, Terminal, Database } from "lucide-react"

const projects = [
  {
    title: "SecureChat",
    description: "End-to-end encrypted messaging application with real-time communication. Built with security-first approach using modern cryptographic standards.",
    image: "🔐",
    tags: ["React", "Node.js", "WebSocket", "Cryptography"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: Lock,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "VulnScanner",
    description: "Automated vulnerability scanning tool for web applications. Detects common security issues including XSS, SQL injection, and CSRF vulnerabilities.",
    image: "🛡️",
    tags: ["Python", "Security", "REST API", "Docker"],
    github: "https://github.com",
    icon: Terminal,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "CloudDash",
    description: "Full-stack dashboard for monitoring cloud infrastructure. Features real-time metrics, alerting system, and beautiful data visualizations.",
    image: "☁️",
    tags: ["Next.js", "TypeScript", "AWS", "Charts"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "DataFlow",
    description: "ETL pipeline management system with visual workflow builder. Enables non-technical users to create complex data transformations.",
    image: "📊",
    tags: ["Python", "PostgreSQL", "Redis", "React"],
    github: "https://github.com",
    icon: Database,
    color: "from-purple-500/20 to-pink-500/20",
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
            A selection of projects that showcase my skills in software development and cybersecurity
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
