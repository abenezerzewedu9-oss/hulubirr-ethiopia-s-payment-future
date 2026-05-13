import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-green-gradient py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to accept payments the Ethiopian way?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
          Join 50,000+ businesses already using HuluBirr to verify payments in real time.
        </p>
        <div className="mt-9 flex justify-center">
          <Button size="lg" className="bg-gold-gradient px-8 text-base text-white shadow-gold-glow hover:opacity-90">
            Create Free Account <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
