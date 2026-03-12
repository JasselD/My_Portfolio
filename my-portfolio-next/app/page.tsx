"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { HeroSection } from "../components/sections/hero-section"
import { AboutSection } from "../components/sections/about-section"
import { ExperienceSection } from "../components/sections/experience-section"
import { ProjectsSection } from "../components/sections/projects-section"
import { FunFactsSection } from "../components/sections/fun-facts-section"
import { Footer } from "../components/sections/footer"
import { SectionProgress } from "../components/section-progress"
import { Header } from "../components/header"

const sections = ["Home", "About", "Experience", "Projects", "Fun Facts"]

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const scrollToSection = useCallback((index: number) => {
    const element = sectionRefs.current[index]
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          )
          if (index !== -1) {
            setCurrentSection(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header 
        sections={sections} 
        currentSection={currentSection} 
        onNavigate={scrollToSection}
      />
      
      <section ref={setSectionRef(0)} id="home">
        <HeroSection />
      </section>
      
      <section ref={setSectionRef(1)} id="about">
        <AboutSection />
      </section>
      
      <section ref={setSectionRef(2)} id="experience">
        <ExperienceSection />
      </section>
      
      <section ref={setSectionRef(3)} id="projects">
        <ProjectsSection />
      </section>
      
      <section ref={setSectionRef(4)} id="fun-facts">
        <FunFactsSection />
      </section>
      
      <Footer />
      
      <SectionProgress sections={sections} currentSection={currentSection} />
    </main>
  )
}
