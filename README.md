# Ali Shandhor — Portfolio Website

A modern, developer-style portfolio built with **Next.js 14** and **Tailwind CSS**. Features a dark theme, interactive terminal, smooth animations, and a fully responsive layout optimized for recruiters.

---

## 🚀 Features

- **Hero Section** — Typewriter role animation, gradient name, CTA buttons
- **Interactive Terminal** — Linux-style terminal with 8 commands (`help`, `about`, `skills`, `projects`, `experience`, `contact`, `resume`, `clear`)
- **About** — Background, education card, stats, awards
- **Skills** — Categorized tech stack with hover effects
- **Experience** — Timeline layout with bullet points and tech pills
- **Projects** — Clean cards with GitHub links
- **Contact** — Form (opens mail client) + social links
- **Responsive** — Mobile-first, works on all screen sizes
- **SEO** — Meta tags, Open Graph, Twitter Card

---

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Terminal.js
│   ├── About.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
├── data/
│   └── resume.js          ← All your resume content lives here
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public/
│   └── Ali_Shandhor_Resume.pdf   ← Drop your resume PDF here
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Add Your Resume PDF

Place your resume PDF in the `public/` folder named exactly:

```
public/Ali_Shandhor_Resume.pdf
```

This enables the download button in the Hero and Contact sections, and the `resume` terminal command.

---

## ✏️ Customization

All content is centralized in **`data/resume.js`**. Edit that file to update:

- Personal info (name, email, GitHub, LinkedIn links)
- Education
- Work experience
- Projects
- Skills
- Terminal command responses

### Update your real social links:

```js
// data/resume.js
export const personalInfo = {
  github: "https://github.com/alishandhor",
  linkedin: "https://www.linkedin.com/in/ali-shandhor-204a6a271",
  website: "https://ali-shandhor.com",
  // ...
};
```

---

## ☁️ Deploy on Vercel (Recommended)

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project root
vercel

# Follow the prompts:
# - Link to existing project? No
# - What's your project name? ali-shandhor-portfolio
# - Which directory is your code in? ./
# - Override settings? No

# For production deployment:
vercel --prod
```

### Option 2: Vercel Dashboard (Easiest)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **"Deploy"**
6. Your site is live at `https://your-project.vercel.app`

### Option 3: GitHub Integration (Auto-deploy)

After connecting to Vercel via dashboard, every `git push` to `main` automatically redeploys your site.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
# Vercel deploys automatically
```

### Custom Domain (Optional)

In your Vercel project dashboard:
1. Go to **Settings → Domains**
2. Add your domain (e.g., `alishandhor.dev`)
3. Update DNS records as instructed

---

## 🧱 Build for Production

```bash
npm run build
npm run start
```

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14 | Framework |
| React | 18 | UI Library |
| Tailwind CSS | 3 | Styling |
| JetBrains Mono | — | Terminal font |
| Syne | — | Display headings |
| DM Sans | — | Body text |

---

## 🎨 Design Tokens

Colors are defined in `tailwind.config.js`:

```js
colors: {
  bg: "#0a0a0f",        // Page background
  surface: "#111118",   // Elevated surface
  card: "#16161f",      // Card backgrounds
  accent: "#7c6aff",    // Purple accent
  green: "#39ff7a",     // Status green
  text: "#e8e8f0",      // Primary text
  "text-dim": "#8888aa" // Secondary text
}
```

---

## 📝 License

MIT — free to use and adapt for your own portfolio.
