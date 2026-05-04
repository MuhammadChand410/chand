import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Muhammad Chand | Full Stack Web Developer",
  description: "Welcome to my portfolio. I build fast, modern web apps with React, Next.js, and Node.js.",
  alternates: { canonical: "https://muhammadchand.dev" },
};

// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
