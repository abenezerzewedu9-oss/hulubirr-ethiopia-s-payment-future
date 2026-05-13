import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Developer } from "@/components/Developer";
import { Trust } from "@/components/Trust";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HuluBirr — Ethiopia's Payment Infrastructure" },
      { name: "description", content: "Accept bank transfers and verify payments automatically in under 20 seconds. Built for Ethiopia. CBE, Awash, Dashen, Telebirr supported." },
      { property: "og:title", content: "HuluBirr — Ethiopia's Payment Infrastructure" },
      { property: "og:description", content: "Fast. Verified. Built for Ethiopia." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <DashboardPreview />
        <Developer />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
