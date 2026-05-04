import { NextResponse } from "next/server";

const messages = [
  { id: 1, name: "Ahmed Khan",    email: "ahmed@example.com",   subject: "E-Commerce Project",     message: "Hi Muhammad! I need a full-stack e-commerce solution for my clothing brand. Budget is flexible. Can we schedule a call?",               time: "2h ago",  read: false, tag: "Project",  tagColor: "#5b8dee" },
  { id: 2, name: "Sarah Johnson", email: "sarah@startup.io",    subject: "React Developer Needed", message: "We're a startup looking for a React developer for a 3-month contract. The project involves building a SaaS dashboard. Interested?",    time: "5h ago",  read: false, tag: "Job",      tagColor: "#9d6ff0" },
  { id: 3, name: "Ali Raza",      email: "ali@agency.pk",       subject: "Collaboration Offer",    message: "Hey! I run a digital agency and we're looking for a reliable developer to collaborate on client projects. Let's connect!",             time: "1d ago",  read: true,  tag: "Collab",   tagColor: "#2dd4a0" },
  { id: 4, name: "Emma Williams", email: "emma@techcorp.com",   subject: "Portfolio Feedback",     message: "Your portfolio is absolutely stunning! The animations and design are top-notch. I'd love to discuss a potential opportunity.",          time: "2d ago",  read: true,  tag: "Feedback", tagColor: "#f97316" },
  { id: 5, name: "Hassan Malik",  email: "hassan@freelance.pk", subject: "Next.js Consultation",   message: "I'm working on a Next.js project and running into some performance issues. Would you be available for a 1-hour paid consultation?",    time: "3d ago",  read: true,  tag: "Consult",  tagColor: "#38bdf8" },
  { id: 6, name: "Priya Sharma",  email: "priya@design.in",     subject: "UI/UX Collaboration",    message: "I'm a UI/UX designer looking for a developer to bring my designs to life. I have a fintech app design ready. Are you available?",      time: "4d ago",  read: true,  tag: "Collab",   tagColor: "#2dd4a0" },
  { id: 7, name: "David Chen",    email: "david@venture.com",   subject: "Investment Opportunity", message: "We're impressed by your work and would like to discuss a potential partnership for our upcoming tech venture. Please reach out!",       time: "5d ago",  read: true,  tag: "Business", tagColor: "#e879f9" },
];

export async function GET() {
  return NextResponse.json(messages);
}
