"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="smooth-scroll">
      <Header />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
