import { NextResponse } from "next/server";

const skillGroups = [
  { cat: "Frontend", icon: "🎨", color: "#5b8dee", skills: [{ name: "React / Next.js", pct: 90, icon: "⚛️" },{ name: "TypeScript", pct: 85, icon: "🔷" },{ name: "Tailwind CSS", pct: 92, icon: "🎨" },{ name: "HTML / CSS", pct: 95, icon: "🌐" }] },
  { cat: "Backend",  icon: "⚙️", color: "#2dd4a0", skills: [{ name: "Node.js / Express", pct: 80, icon: "🟢" },{ name: "PostgreSQL", pct: 75, icon: "🐘" },{ name: "MongoDB", pct: 78, icon: "🍃" },{ name: "GraphQL", pct: 65, icon: "🔗" }] },
  { cat: "DevOps & Tools", icon: "🛠️", color: "#f97316", skills: [{ name: "AWS / Vercel", pct: 70, icon: "☁️" },{ name: "Docker", pct: 65, icon: "🐳" },{ name: "Git / GitHub", pct: 88, icon: "🔄" },{ name: "Linux", pct: 72, icon: "🐧" }] },
];

const techStack = ["React.js","Next.js","MongoDB","Redis","Tailwind","HTML/CSS","GraphQL","REST API","Git","Figma","Python","Linux","Vercel","Stripe"];

const certs = [
  { name: "AWS Cloud Practitioner",  issuer: "Amazon Web Services", date: "2024", icon: "☁️", color: "#f97316" },
  { name: "Meta Frontend Developer", issuer: "Meta / Coursera",     date: "2023", icon: "⚛️", color: "#5b8dee" },
  { name: "Google UX Design",        issuer: "Google / Coursera",   date: "2023", icon: "🎨", color: "#2dd4a0" },
  { name: "Node.js Application Dev", issuer: "OpenJS Foundation",   date: "2024", icon: "🟢", color: "#9d6ff0" },
];

export async function GET() {
  return NextResponse.json({ skillGroups, techStack, certs });
}
