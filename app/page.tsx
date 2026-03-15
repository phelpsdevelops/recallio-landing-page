import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { HowItWorksSection } from "@/app/components/Sections";
import { WaitlistForm } from "@/app/components/WaitlistForm";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorksSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}


