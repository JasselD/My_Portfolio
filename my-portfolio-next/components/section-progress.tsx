"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SectionProgressProps {
  sections: string[]
  currentSection: number
}

function EmojiIcon({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center text-2xl sm:text-3xl md:text-4xl ${className ?? ""}`}
      role="img"
      aria-label="rocket"
    >
      🚀
    </span>
  )
}

function BreadIcon({ className, isActive }: { className?: string; isActive: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <ellipse 
        cx="16" 
        cy="16" 
        rx="12" 
        ry="8" 
        className={isActive ? "text-amber-600" : "text-muted-foreground/30"}
        fill="currentColor" 
      />
      <ellipse 
        cx="16" 
        cy="14" 
        rx="10" 
        ry="6" 
        className={isActive ? "text-amber-400" : "text-muted-foreground/20"}
        fill="currentColor" 
      />
      <ellipse 
        cx="16" 
        cy="12" 
        rx="8" 
        ry="4" 
        className={isActive ? "text-amber-300" : "text-muted-foreground/10"}
        fill="currentColor" 
      />
    </svg>
  )
}

export function SectionProgress({ sections, currentSection }: SectionProgressProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const totalSections = sections.length

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsAnimating(true)
    const timeout = setTimeout(() => setIsAnimating(false), 500)
    return () => clearTimeout(timeout)
  }, [currentSection])

  if (!mounted) return null

  const progressPosition = totalSections > 1 ? (currentSection / (totalSections - 1)) * 100 : 0

  return (
    <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
      <div className="bg-card/95 backdrop-blur-md border-2 border-border rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-xl">
        <div className="relative w-48 sm:w-72 h-10 sm:h-12 flex items-center">
          {/* Progress track */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-1.5 bg-muted rounded-full" />
          
          {/* Filled progress */}
          <motion.div 
            className="absolute left-4 top-1/2 -translate-y-1/2 h-1.5 bg-primary/30 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `calc(${progressPosition}% - 16px)` }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          />
          
          {/* Bread icons */}
          {sections.map((section, index) => {
            const position = (index / (totalSections - 1)) * 100
            return (
              <div
                key={section}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
                style={{ left: `calc(${position}% * 0.85 + 7.5%)` }}
                title={section}
              >
                <BreadIcon 
                  className="w-5 h-5 sm:w-7 sm:h-7 transition-transform hover:scale-110" 
                  isActive={index <= currentSection}
                />
              </div>
            )
          })}

          {/* Emoji */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
            animate={{
              left: `calc(${progressPosition}% * 0.85 + 7.5%)`,
              rotate: isAnimating ? [0, -15, 15, -15, 0] : 0,
              y: isAnimating ? [0, -4, 0, -4, 0] : 0,
            }}
            transition={{
              left: { type: "spring", stiffness: 80, damping: 12 },
              rotate: { duration: 0.6 },
              y: { duration: 0.6 },
            }}
          >
            <EmojiIcon className="drop-shadow-lg" />
          </motion.div>
        </div>
        
        {/* Section label */}
        <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-0.5 font-medium tracking-wide">
          {sections[currentSection]}
        </p>
      </div>
    </div>
  )
}

