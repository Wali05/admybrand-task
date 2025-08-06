"use client"

import { useState } from "react"
import NavbarDemo from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import PricingSection from "@/components/sections/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FAQSection from "@/components/sections/FAQSection"
import BlogResourcesSection from "@/components/sections/BlogResourcesSection"
import ContactForm from "@/components/sections/ContactForm"
import Footer from "@/components/sections/Footer"
import Preloader from "@/components/ui/Preloader"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  const handlePreloaderComplete = () => {
    setShowPreloader(false)
  }

  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800">
      <NavbarDemo />
      <main>
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <TestimonialsSection />
        <FAQSection />
        <section id="resources">
          <BlogResourcesSection />
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
