/**
 * ════════════════════════════════════════════════════════════════════════
 *  EDIT ME — this is the one file you need to change to personalize the site.
 * ════════════════════════════════════════════════════════════════════════
 *  Everything below feeds the whole website: your name, bio, social links,
 *  projects, and the keys for the contact form + guestbook. Search for the
 *  word "TODO" to find the things you must fill in.
 */

export const site = {
  /** Your display name, shown in the nav, hero, and footer. */
  name: 'Dr4cule',
  /** Short handle (no @). */
  handle: 'dr4cule',
  /** One-line tagline under your name on the home page. */
  tagline: 'Automating life, one bot at a time. Anime enjoyer. 👒',
  /** A short bio paragraph for the home + about pages. */
  bio:
    "Hey, I'm Dr4cule — I love building things that automate the boring stuff, " +
    'from Discord bots and computer-vision toys to LLM tools that read my chats ' +
    'so I don’t have to. When I’m not coding, I’m almost certainly watching anime ' +
    '(One Piece supremacy 🏴‍☠️).',
  /** Used for SEO + the browser tab. */
  description:
    'Personal site of Dr4cule — developer, automation enthusiast, anime fan. Projects, portfolio, games and more.',
  /** Your live URL (used for SEO + RSS). Leave as-is for GitHub Pages. */
  url: 'https://dr4cule.github.io',
  /** Your avatar (downloaded from GitHub into /public). */
  avatar: '/avatar.png',
  /** City / vibe line shown on the about page. */
  location: 'The Grand Line 🌊',
  /** When you started your dev journey (shown on about). */
  since: 'April 2024',
};

/**
 * ── THEME COLORS ─────────────────────────────────────────────────────────
 * The site ships with TWO themes you toggle with the sun/moon button:
 *   • light  →  white & gold (elegant)
 *   • dark   →  red & black  (dramatic)
 * Each accent is "R G B" (space-separated). Tweak to taste.
 */
export const theme = {
  light: {
    accent: '184 134 11', // gold  (#B8860B-ish, rich)
    accentSoft: '212 175 55', // softer gold (#D4AF37)
  },
  dark: {
    accent: '225 29 42', // red   (#E11D2A)
    accentSoft: '248 113 113', // softer red
  },
};

/** Social / contact links. Leave a value empty ('') to hide that icon. */
export const socials = {
  github: 'https://github.com/Dr4cule',
  twitter: '',
  linkedin: '',
  email: '', // optional, shown on contact page
  discord: '',
  youtube: '',
};

/**
 * ── CONTACT FORM (private messages) ──────────────────────────────────────
 * Powered by Web3Forms — messages go straight to the email tied to this key.
 */
export const web3forms = {
  accessKey: 'cd6e913e-08e7-4fe0-a3c8-9465b6b5b948',
};

/**
 * ── GUESTBOOK + BLOG COMMENTS ────────────────────────────────────────────
 * Powered by Giscus (free, backed by GitHub Discussions). See README for the
 * 5-minute setup. Until repoId/categoryId are filled, the guestbook shows
 * setup instructions instead of crashing.
 */
export const giscus = {
  repo: 'Dr4cule/Dr4cule.github.io',
  repoId: '', // TODO: from giscus.app
  category: 'General',
  categoryId: '', // TODO: from giscus.app
};

/** Skills shown on the about page (pulled from your actual repos). */
export const skills = [
  'JavaScript', 'Python', 'TypeScript', 'C', 'Node.js',
  'Discord Bots', 'Computer Vision', 'LLMs / Ollama', 'Automation',
  'Mineflayer', 'Git', 'Linux',
];

/** A simple timeline / journey for the about page. */
export const timeline = [
  { year: '2026', title: 'Going all-in on automation & AI', body: 'Building LLM tools (ContextAI), CV toys (LazyScroll), and content generators (CobbleGen).' },
  { year: '2025', title: 'Lower-level + game dev dabbling', body: 'Wrote little programs and games in C just for the fun of it.' },
  { year: '2024', title: 'Started coding & shipping bots', body: 'Joined GitHub, built my first popular project — a Mineflayer ⇄ Discord bridge.' },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Emoji fallback "cover" if no image. */
  emoji?: string;
  image?: string;
  live?: string;
  repo?: string;
  stars?: number;
  featured?: boolean;
};

/**
 * Your projects — pulled from your GitHub (github.com/Dr4cule).
 * The ones marked `featured` appear on the home page.
 */
export const projects: Project[] = [
  {
    title: 'Mineflayer ⇄ Discord Bridge',
    description:
      'A Minecraft bot (Mineflayer) that bridges in-game chat to Discord, logs messages, and packs a bunch of handy features. My most-starred project.',
    tags: ['JavaScript', 'Mineflayer', 'Discord', 'Minecraft'],
    emoji: '⛏️',
    repo: 'https://github.com/Dr4cule/Mineflayer-Discord-bridge',
    stars: 9,
    featured: true,
  },
  {
    title: 'ContextAI',
    description:
      'An offline/cloud LLM wrapper that summarizes bulky chats and bots on command. Works with WhatsApp and Discord, powered by Ollama.',
    tags: ['JavaScript', 'Ollama', 'LLM', 'WhatsApp'],
    emoji: '🤖',
    repo: 'https://github.com/Dr4cule/ContextAI',
    featured: true,
  },
  {
    title: 'LazyScroll',
    description:
      'For the laziest of chads 🗿 — scroll your screen with hand gestures using computer vision and hand tracking. No mouse, no effort.',
    tags: ['JavaScript', 'Computer Vision', 'Hand Tracking'],
    emoji: '🖐️',
    repo: 'https://github.com/Dr4cule/LazyScroll',
    stars: 1,
    featured: true,
  },
  {
    title: 'CobbleGen',
    description:
      'A short-form content generator that automates the boring parts of making bite-sized videos.',
    tags: ['Python', 'Automation', 'Shortform'],
    emoji: '🎬',
    repo: 'https://github.com/Dr4cule/CobbleGen',
    stars: 1,
    featured: true,
  },
  {
    title: 'UnderTheTable',
    description:
      'A little game written in C, made right before an external chemistry lab exam because I felt funny.',
    tags: ['C', 'Game'],
    emoji: '🎮',
    repo: 'https://github.com/Dr4cule/UnderTheTable',
  },
  {
    title: 'TicketBookingC',
    description: 'A (gloriously messy) ticket-booking program written in C.',
    tags: ['C'],
    emoji: '🎫',
    repo: 'https://github.com/Dr4cule/TicketBookingC',
  },
  {
    title: 'Python Snippets',
    description: 'A collection of Python snippets from my early learning days.',
    tags: ['Python', 'Learning'],
    emoji: '🐍',
    repo: 'https://github.com/Dr4cule/Python-snippets',
  },
  {
    title: 'This Website',
    description:
      'The site you are looking at — Astro + Tailwind, dual white/gold & red/black themes with an Apple-style liquid-glass look, plus minigames.',
    tags: ['Astro', 'Tailwind', 'TypeScript'],
    emoji: '🪟',
    repo: 'https://github.com/Dr4cule/Dr4cule.github.io',
    live: 'https://dr4cule.github.io',
  },
];

/** Top nav links. */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
