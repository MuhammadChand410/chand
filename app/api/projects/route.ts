import { NextResponse } from "next/server";

const projects = [
  { id: 1, name: "E-Commerce Platform",   tech: "Next.js / PostgreSQL / Stripe", status: "Live",        prog: 100, date: "Jan 2025", icon: "🛒", color: "#5b8dee", desc: "Full-stack e-commerce with real-time inventory and Stripe payments." },
  { id: 2, name: "AI Chat Application",   tech: "React / OpenAI / WebSocket",    status: "Live",        prog: 100, date: "Dec 2024", icon: "🤖", color: "#9d6ff0", desc: "Real-time AI chat with GPT-4 streaming and conversation history."   },
  { id: 3, name: "Task Management SaaS",  tech: "Next.js / Prisma / Redis",      status: "In Progress", prog: 65,  date: "Ongoing",  icon: "📋", color: "#2dd4a0", desc: "Collaborative Kanban tool with time tracking and team analytics."   },
  { id: 4, name: "DevOps Dashboard",      tech: "React / Docker / AWS",          status: "Live",        prog: 100, date: "Nov 2024", icon: "📊", color: "#38bdf8", desc: "Cloud infrastructure monitoring with auto-alerts and metrics."      },
  { id: 5, name: "Mobile Banking App",    tech: "React Native / Node.js / JWT",  status: "Live",        prog: 100, date: "Oct 2024", icon: "💳", color: "#f97316", desc: "Secure banking app with biometric auth and budget tracking."        },
  { id: 6, name: "Social Analytics Tool", tech: "Next.js / D3.js / REST API",   status: "Live",        prog: 100, date: "Sep 2024", icon: "📈", color: "#e879f9", desc: "Analytics platform tracking social media performance."             },
  { id: 7, name: "Portfolio v2",          tech: "Next.js / TypeScript",          status: "Live",        prog: 100, date: "Aug 2024", icon: "🎨", color: "#2dd4a0", desc: "This portfolio — built with Next.js, animations, and dark mode."   },
  { id: 8, name: "Blog CMS",             tech: "Next.js / MDX / Vercel",        status: "Planning",    prog: 10,  date: "Q2 2025",  icon: "✍️", color: "#fbbf24", desc: "Personal blog with MDX, syntax highlighting, and SEO."            },
];

export async function GET() {
  return NextResponse.json(projects);
}
