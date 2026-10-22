# Rajarshi Chakraborty — Portfolio v2

Personal portfolio of **Rajarshi Chakraborty**, Full-Stack TypeScript Developer & AI Engineer.
Built on the [portfolio-template](https://github.com/ElomariHana/portfolio-template) structure with every section from v1 and an Aceternity-inspired design system.

**Live:** https://rajarshis-portfolio.vercel.app

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion · Base UI / Radix · Content Collections (MDX) · Recharts

## Pages

| Route | Contents |
| --- | --- |
| `/` | Spotlight hero, tech marquee, about bento (bio, contact, journey, code card, gallery), experience, education, project carousel, GitHub activity, IEEE publication, LeetCode / DSA, hire-me lamp |
| `/about` | Bio, grouped skills, experience & education timelines, research |
| `/projects` | Filterable project grid, 3D project folder |
| `/projects/case-studies` | Deep-dive project write-ups with architecture diagrams |
| `/blog` | Live Hashnode articles (RSS, hourly) + optional MDX posts in `content/` |
| `/contact` | Contact channels and message form |

Press **Ctrl / ⌘ + K** anywhere for the command palette.

## Structure

```
app/                      routes, API handlers (contact, GitHub, LeetCode)
src/components/aceternity premium primitives: Spotlight, FlipWords, TextGenerateEffect,
                          MovingBorder, GlowCard, Card3D, BentoGrid, InfiniteMovingCards,
                          TracingTimeline, Lamp, Meteors, Section
src/components/home       home page sections
src/components/about      about page sections
src/components/projects   project grid, card, filter
src/components/layout     Navbar, Footer, PageHeader, ThemeProvider
src/config/portfolio.ts   profile, experience, education
src/data/                 résumé, projects, journey, DSA data
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Copy `.env.example` to `.env.local` and fill in the keys used by the contact and GitHub API routes.
