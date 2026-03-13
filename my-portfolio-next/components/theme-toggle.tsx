"use client"

import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Wait until we have a resolved theme so the first click toggles correctly
  // (resolvedTheme can be undefined on first client render while next-themes hydrates)
  if (!mounted || resolvedTheme === undefined) {
    return (
      <button className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted overflow-hidden">
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-border shadow-lg transition-all hover:scale-105 active:scale-95"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sky background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark
            ? "linear-gradient(to bottom, #0f172a, #1e1b4b, #312e81)"
            : "linear-gradient(to bottom, #fef3c7, #fcd34d, #f97316)",
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Stars (visible in dark mode) */}
      <AnimatePresence>
        {isDark && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${15 + ((i % 2) * 25)}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0.5, 1, 0.5], scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  opacity: { repeat: Infinity, duration: 2, delay: i * 0.2 },
                  scale: { duration: 0.3 },
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Sun */}
      <motion.div
        className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-300 shadow-lg"
        animate={{
          y: isDark ? 40 : 6,
          x: 2,
          scale: isDark ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Sun rays */}
        {!isDark && (
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-1.5 bg-amber-400 rounded-full left-1/2 -translate-x-1/2 -top-2"
                style={{ transform: `rotate(${i * 45}deg) translateY(-6px)` }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Moon */}
      <motion.div
        className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-200"
        animate={{
          y: isDark ? 8 : -40,
          x: 16,
          scale: isDark ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Moon craters */}
        <div className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300 top-0.5 left-0.5" />
        <div className="absolute w-1 h-1 rounded-full bg-slate-300 bottom-1 right-0.5" />
      </motion.div>

      {/* Clouds/Wisps */}
      <motion.div
        className="absolute bottom-0.5 left-0 right-0"
        animate={{
          opacity: isDark ? 0 : 1,
        }}
      >
        <div className="flex justify-center gap-0.5">
          <div className="w-2 h-1 sm:w-2.5 sm:h-1.5 rounded-full bg-white/60" />
          <div className="w-3 h-1 sm:w-3 sm:h-1.5 rounded-full bg-white/80" />
          <div className="w-2 h-1 sm:w-2.5 sm:h-1.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </button>
  )
}
