# Dr4cule.github.io 🦇

My personal website — blog, projects, portfolio, minigames, a private contact form, and a guestbook. Built with [Astro](https://astro.build) + Tailwind CSS, with a frosted **glassmorphism** theme and dark/light mode. Deploys automatically to GitHub Pages.

**Live:** https://dr4cule.github.io

---

## ✨ Features

- 🎨 Dual themes — white & gold (light) / red & black (dark) — with an Apple-style liquid-glass look (remembers your choice, no flash on load or navigation)
- 📝 Markdown blog with tags, reading time, RSS feed
- 🚀 Filterable projects / portfolio grid
- ✉️ Private contact form (messages go straight to your email)
- 💬 Optional blog comments (Giscus)
- ⌨️ Command palette (press <kbd>Ctrl/⌘</kbd> + <kbd>K</kbd>), scroll progress bar, custom cursor glow, and a hidden cheat code 😉
- ⚡ Fast, fully static, great Lighthouse scores

---

## 🛠️ Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # build the production site into dist/
npm run preview  # preview the production build locally
```

---

## ✏️ Make it yours

**Everything personal lives in one file: [`src/config.ts`](src/config.ts).** Open it and edit your name, tagline, bio, social links, skills, and projects. Search the file for `TODO` to find the few things you need to paste in.

- **Blog posts** → add Markdown files in `src/content/blog/`. Copy an existing post for the frontmatter format.
- **Project covers** → drop images in `public/projects/` and point a project's `image` field at them (e.g. `/projects/cool.png`).
- **Accent color** → change the single `accent` value in `src/config.ts` to recolor the whole site.

### 1. Contact form (private messages) — optional

The contact form uses [Web3Forms](https://web3forms.com) (free, no server needed):

1. Go to https://web3forms.com, enter the email you want messages delivered to, and copy your **Access Key**.
2. Paste it into `web3forms.accessKey` in `src/config.ts`.

Until you add a key, the form shows a friendly "not configured yet" notice instead of breaking.

### 2. Blog comments — optional

Blog posts can have comments via [Giscus](https://giscus.app) (free, backed by GitHub Discussions):

1. Push this repo to GitHub and make it **public**.
2. Enable Discussions: repo → **Settings → General → Features → ✅ Discussions**.
3. Install the Giscus app: https://github.com/apps/giscus (grant it access to this repo).
4. Go to https://giscus.app, enter `Dr4cule/Dr4cule.github.io`, pick a Discussion category, and copy the generated `data-repo-id` and `data-category-id`.
5. Paste those into the `giscus` block in `src/config.ts`.

Until configured, posts show a small "comments aren't wired up yet" notice instead of breaking.

---

## 🚀 Deploying

This repo includes a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds and deploys on every push to `main`.

**One-time setup:** In your repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

Then just:

```bash
git add .
git commit -m "Build my website"
git push
```

The Action will build the site and publish it to https://dr4cule.github.io within a minute or two. Check the **Actions** tab for progress.

---

## 📁 Project structure

```
src/
├── config.ts            ← edit this to personalize everything
├── layouts/             ← page shell, theme system, SEO
├── components/          ← nav, footer, cards, command palette
├── content/blog/        ← your blog posts (Markdown)
├── pages/               ← routes (home, about, projects, blog, contact, 404)
└── styles/global.css    ← glass theme + CSS variables
```

Built with 🏴‍☠️ and Astro.
