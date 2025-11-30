import { Navigation } from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { StatsSection } from "@/components/StatsSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
