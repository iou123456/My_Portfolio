# Technical Specification: Timsheldon Oure Portfolio

---

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Installation |
|-----------|---------|--------------|
| Button | CTAs, form submit, navigation | `npx shadcn add button` |
| Card | Project cards, experience cards, skill cards | `npx shadcn add card` |
| Input | Contact form inputs | `npx shadcn add input` |
| Textarea | Contact form message | `npx shadcn add textarea` |
| Badge | Tech stack tags, skill tags | `npx shadcn add badge` |
| Separator | Section dividers | `npx shadcn add separator` |
| Sheet | Mobile navigation drawer | `npx shadcn add sheet` |
| Scroll Area | Smooth scrolling containers | `npx shadcn add scroll-area` |

### Custom Components
| Component | Purpose | Location |
|-----------|---------|----------|
| Navigation | Fixed navbar with scroll effects | `src/components/Navigation.tsx` |
| MobileNav | Hamburger menu for mobile | `src/components/MobileNav.tsx` |
| HeroSection | Full-screen hero with animations | `src/sections/HeroSection.tsx` |
| AboutSection | About me with stats | `src/sections/AboutSection.tsx` |
| SkillsSection | Skills grid with categories | `src/sections/SkillsSection.tsx` |
| ExperienceSection | Timeline of work experience | `src/sections/ExperienceSection.tsx` |
| ProjectsSection | Project showcase grid | `src/sections/ProjectsSection.tsx` |
| EducationSection | Education card | `src/sections/EducationSection.tsx` |
| ContactSection | Contact form and info | `src/sections/ContactSection.tsx` |
| Footer | Site footer | `src/sections/Footer.tsx` |
| AnimatedCounter | Number counting animation | `src/components/AnimatedCounter.tsx` |
| GradientText | Text with gradient effect | `src/components/GradientText.tsx` |
| TimelineItem | Single timeline entry | `src/components/TimelineItem.tsx` |
| ProjectCard | Project display card | `src/components/ProjectCard.tsx` |
| SkillCard | Skill category card | `src/components/SkillCard.tsx` |

### Custom Hooks
| Hook | Purpose | Location |
|------|---------|----------|
| useScrollAnimation | Intersection Observer for scroll triggers | `src/hooks/useScrollAnimation.ts` |
| useMousePosition | Track mouse for parallax effects | `src/hooks/useMousePosition.ts` |
| useTypewriter | Typing animation effect | `src/hooks/useTypewriter.ts` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero gradient text shimmer | CSS + Framer Motion | Animated gradient background position | Medium |
| Hero subtitle typing effect | Custom hook (useTypewriter) | Character-by-character reveal with cursor | Medium |
| Contact pills stagger fade | Framer Motion | staggerChildren with fade + translateY | Low |
| Scroll indicator bounce | CSS Keyframes | Infinite bounce animation | Low |
| Background parallax on mouse | Custom hook + CSS | Transform based on mouse position | Medium |
| Section heading slide-in | Framer Motion | whileInView with x translate | Low |
| Paragraph stagger fade | Framer Motion | staggerChildren with opacity | Low |
| Stats counter animation | Custom component | requestAnimationFrame number interpolation | Medium |
| Skills cards stagger | Framer Motion | staggerChildren with scale + opacity | Low |
| Skill tag hover glow | CSS | box-shadow transition on hover | Low |
| Timeline line draw | Framer Motion | SVG path animation or height growth | Medium |
| Timeline card slide-in | Framer Motion | whileInView with x translate + stagger | Medium |
| Timeline dot pulse | CSS Keyframes | Scale pulse on viewport entry | Low |
| Project card hover zoom | CSS + Framer Motion | Image scale + overlay fade | Medium |
| Project tech tag glow | CSS | box-shadow on hover | Low |
| Contact form focus | CSS | Border color transition | Low |
| Social icon hover | CSS + Framer Motion | Scale up + glow effect | Low |
| Navigation scroll effect | React state + CSS | Background opacity on scroll | Low |
| Mobile menu slide | Framer Motion | Sheet component + custom animation | Medium |
| Button hover scale | CSS | transform: scale(1.05) | Low |
| Card hover lift | CSS | translateY + border color | Low |

---

## Animation Library Choices

### Primary: Framer Motion
- **Rationale**: Best React integration, declarative API, excellent performance
- **Use for**: All scroll-triggered animations, stagger effects, page transitions

### Secondary: CSS Animations/Keyframes
- **Rationale**: Zero JS overhead, perfect for simple infinite animations
- **Use for**: Hover states, loading spinners, bounce effects, pulse animations

### Custom Hooks
- **Rationale**: Reusable logic for complex animations
- **Use for**: Typewriter effect, mouse tracking, counter animation

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── (static assets)
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── MobileNav.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── GradientText.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillCard.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useMousePosition.ts
│   │   └── useTypewriter.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── components/ui/    (shadcn components)
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Dependencies

### Core (Auto-installed)
- React 18+
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### Animation
```bash
npm install framer-motion
```

### Icons
```bash
npm install lucide-react
```

### Fonts
- Inter (Google Fonts via CDN)

---

## Color Configuration (Tailwind)

```javascript
// tailwind.config.js extend colors
colors: {
  background: {
    primary: '#090909',
    secondary: '#111111',
    tertiary: '#2d2d2d',
  },
  accent: {
    blue: '#2d62ff',
    magenta: '#dd23bb',
    amber: '#f1a300',
    coral: '#e94040',
  },
  text: {
    primary: '#f1f5fb',
    secondary: '#cccccc',
    tertiary: '#949494',
  },
  border: {
    DEFAULT: '#1f1f1f',
    light: 'rgba(255, 255, 255, 0.14)',
  },
}
```

---

## Performance Considerations

1. **Animation Performance**
   - Use `transform` and `opacity` only
   - Add `will-change` to animated elements
   - Use `requestAnimationFrame` for custom animations

2. **Lazy Loading**
   - Sections below fold load on scroll
   - Images use lazy loading

3. **Reduced Motion**
   - Respect `prefers-reduced-motion` media query
   - Disable non-essential animations for accessibility

---

## Build Commands

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "Timsheldon Oure Portfolio"

# Install animation library
cd /mnt/okcomputer/output/app && npm install framer-motion

# Development
npm run dev

# Build for production
npm run build

# Deploy
# Deploy /mnt/okcomputer/output/app/dist
```

---
