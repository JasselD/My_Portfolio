"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "R&D Project for NZ telecommunications provider",
    company: "2degrees New Zealand Limited",
    period: "July 2025 - Present",
    description: "Researching and developing GreenLoop, a gamified employee sustainability engagement platform for 2degrees. Built with Next.js 14, TypeScript, and PostgreSQL, featuring Microsoft 365 SSO, action tracking, and ESG reporting dashboards.",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Microsoft 365 SSO", "ESG Reporting", "Gamification", "AWS", "Agile/Scrum"],
  },
  {
    title: "AI Hackathon",
    company: "AUT University & SheSharp",
    period: "Aug 2025",
    description: "Built an AI-powered employment guidance platform in a 6-person agile team, using Next.js, TypeScript, and Tailwind CSS. Architected an agentic AI pipeline with n8n and ElevenLabs for real-time voice interaction, delivering CV generation, cover letter drafting, interview prep, and job simulation.",
    skills: ["ElevenLabs Conversational AI", "Agentic AI", "Next.js", "React", "Typescript", "Tailwind CSS", "Agile"],
  },
  {
    title: "UMSA Committee-Cultural & Public Relations Officer",
    company: "Union of Malaysian Students in Auckland ",
    period: "Dec 2023 - Oct 2025",
    description: "Led cultural events celebrating Malaysian heritage including Hari Raya and Malaysia Day celebrations. Transitioned into a PR role managing external outreach, brand representation, and community engagement, while building partnerships with local businesses to grow the club's presence across Auckland.",
    skills: ["Event Planning", "Public Relations", "Community Engagement", "Partnership Management", "Leadership"],
  },
  {
    title: "Head of Preparation & Technical Team",
    company: "Auckland Bersatu Games",
    period: "Dec 2023 - August 2024",
    description: "Led the technical operations for a multi-university Malaysian sports event across 6 NZ contingents, overseeing equipment sourcing, venue setup, and on-ground logistics. Managed a department team, delegated tasks to meet tight timelines, and negotiated directly with venues to secure bookings and budget-saving discounts.",
    skills: ["Event Management", "Team Leadership", "Logistics", "Vendor Negotiation"],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-widest uppercase mb-2 text-center">
            My Journey
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
            Experience
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <ScrollReveal
              key={exp.title}
              delay={index * 0.15}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-2"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                />

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
