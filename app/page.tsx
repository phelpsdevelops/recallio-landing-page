import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import {
  FeaturePreviewSection,
  HowItWorksSection,
  UseCasesSection,
  ValuePropositionSection,
} from "@/app/components/Sections";
import { WaitlistForm } from "@/app/components/WaitlistForm";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <ValuePropositionSection />
        <HowItWorksSection />
        <UseCasesSection />
        <FeaturePreviewSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}


