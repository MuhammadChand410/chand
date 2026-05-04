# Muhammad Chand — Portfolio v2.0

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 — Portfolio
Open http://localhost:3000/admin — Admin Dashboard

---

## 🔑 Google OAuth Setup (for Contact Form)

1. Go to: https://console.cloud.google.com
2. Create a new project → APIs & Services → Credentials
3. Create OAuth 2.0 Client ID → Web Application
4. Add Authorized redirect URI: http://localhost:3000/api/auth/callback/google
5. Copy Client ID and Client Secret
6. Edit `.env.local`:

```env
GOOGLE_CLIENT_ID=paste_your_client_id_here
GOOGLE_CLIENT_SECRET=paste_your_client_secret_here
NEXTAUTH_SECRET=any_random_long_string_here
NEXTAUTH_URL=http://localhost:3000
```

7. Restart dev server: `npm run dev`

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              ← Portfolio (Landing Page)
│   ├── admin/page.tsx        ← Admin Dashboard (/admin)
│   ├── api/auth/[...nextauth]/route.ts  ← Google OAuth
│   ├── globals.css           ← Theme & animations
│   └── layout.tsx
├── components/
│   ├── Header.tsx            ← Nav + Dark/Light toggle
│   ├── Hero.tsx              ← Landing with particle canvas
│   ├── About.tsx
│   ├── Skills.tsx            ← Animated progress bars
│   ├── Projects.tsx          ← Project cards
│   ├── Contact.tsx           ← Form + Google OAuth step
│   └── Footer.tsx
└── context/
    └── ThemeContext.tsx      ← Dark/Light state
```

## 🎨 Theme
- Dark: Deep Navy Blue + Blue/Purple neon accents
- Light: Pearl White + Professional blue
- Toggle: Header mein moon/sun button

## 🌐 URLs
- Portfolio: http://localhost:3000
- Admin Dashboard: http://localhost:3000/admin
