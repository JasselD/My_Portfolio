## Intro

This repository contains the source code for my personal portfolio website, built to showcase my projects, experience, and skills as a software developer and cybersecurity enthusiast. It is deployed as a modern, responsive single-page application using Next.js and Tailwind CSS.

## Features

- **Responsive layout**: Optimized for desktop, tablet, and mobile devices with thoughtful spacing and typography.
- **Hero section**: Concise introduction, call-to-action, and visual design that reflects my personality and interests.
- **About & experience**: Sections highlighting my background, education, and relevant professional/academic experience.
- **Projects gallery**: Curated list of projects with tech stack tags and links to GitHub repositories (and live demos where available).
- **Fun interactions**: Micro-animations and interactive components (e.g. progress/duck components, section transitions) to make the site feel alive.
- **Dark / light mode**: Theme toggle with system preference support.
- **Accessibility-minded**: Semantic HTML, keyboard-focusable controls, and visually hidden labels for icons and links.

## Technologies

- **Framework**: Next.js (App Router)
- **Language**: TypeScript + React
- **Styling**: Tailwind CSS, custom utility components
- **Animations**: Framer Motion
- **UI primitives**: Radix UI–based components, Lucide icons
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## The Process

- **Design & planning**: Sketched the layout and content structure (hero, about, experience, projects, extras) before touching code, focusing on clarity and hierarchy.
- **Scaffolding**: Bootstrapped a new Next.js project and set up the basic app layout, fonts, global styles, and theming.
- **Component-driven building**: Implemented each section (`hero-section`, `about-section`, `experience-section`, `projects-section`, etc.) as reusable, isolated components.
- **Polish & interactivity**: Layered in animations, scroll reveals, progress/duck elements, and small UI flourishes to improve perceived quality without hurting performance.
- **Optimization & deployment**: Cleaned up unused dependencies, fixed TypeScript issues, ensured production builds were clean, and deployed to Vercel.

## What I Learned

- How to structure a modern Next.js App Router project for a content-heavy single-page site.
- Practical patterns for combining Tailwind CSS, Radix UI primitives, and Framer Motion without making the codebase hard to maintain.
- Handling deployment nuances on Vercel (lockfiles, build settings, project root configuration).
- Balancing aesthetics, performance, and accessibility in a real-world portfolio project.

## How It Can Be Improved

- **Content depth**: Add more detailed write-ups for each project (problem statement, constraints, architecture, and key learnings).
- **Blog or notes**: Introduce a simple blog/notes section for longer-form technical writing and case studies.
- **More accessibility testing**: Run automated and manual audits (e.g. Lighthouse, screen reader passes) and address remaining issues.
- **Localization**: Support multiple languages if needed in the future.
- **CMS integration**: Move projects and experience data into a headless CMS or structured content source to make updates easier without code changes.

