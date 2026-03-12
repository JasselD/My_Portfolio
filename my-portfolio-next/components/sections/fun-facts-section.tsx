"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

const funFacts = [
  {
    emoji: "☕",
    fact: "Powered by approximately 500+ cups of Kopi O (black coffee) during university",
    color: "bg-amber-500/10 border-amber-500/20",
  },
  {
    emoji: "🎮",
    fact: "Debugged code for 6 hours only to find a missing semicolon",
    color: "bg-purple-500/10 border-purple-500/20",
  },
  {
    emoji: "💨",
    fact: "Perfume collector and I have a small collection of them (it's not small 🦧)",
    color: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    emoji: "🌏",
    fact: "Can say 'Hello World' in 10+ programming languages",
    color: "bg-blue-500/10 border-blue-500/20",
  },
  {
    emoji: "⛰️",
    fact: "Summited Mount Kinabalu to achieve Original Sabahan status",
    color: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    emoji: "🎵",
    fact: "Solely listens to oldies music especially the 70s to 00s",
    color: "bg-pink-500/10 border-pink-500/20",
  },
  {
    emoji: "🥩",
    fact: "Weekend steaks motivates me to push through the week",
    color: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    emoji: "🇲🇾",
    fact: "Proud Malaysian who thinks their cuisine is the best in the world!",
    color: "bg-green-500/10 border-green-500/20",
  },
]

export function FunFactsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-widest uppercase mb-2 text-center">
            Beyond the Code
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-balance">
            Fun Facts
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            {"A few interesting facts about me that didn't fit in the professional sections"}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {funFacts.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                className={`p-6 rounded-xl border ${item.color} backdrop-blur-sm h-full`}
                whileHover={{ 
                  scale: 1.02,
                  rotate: index % 2 === 0 ? 1 : -1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: index * 0.2,
                  }}
                >
                  {item.emoji}
                </motion.div>
                <p className="text-sm text-foreground leading-relaxed">
                  {item.fact}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {"Let's Connect!"}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
            </p>
            <motion.a
              href="mailto:doongjassel48@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello
              <span className="text-lg">👋</span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
