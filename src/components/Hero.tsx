import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentVerifyCard } from "./PaymentVerifyCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Ethiopia's Payment Infrastructure
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Ethiopia's Fastest{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">
                Payment Verification
              </span>{" "}
              Gateway
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg text-white/70"
            >
              HuluBirr lets any business accept bank transfers and verify payments
              automatically in under 20 seconds — no bank API needed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button size="lg" className="bg-gold-gradient text-white shadow-gold-glow hover:opacity-90">
                Start Integrating
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <PlayCircle className="mr-1 h-4 w-4" />
                See How it Works
              </Button>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-xs text-white/50">
              <span>Trusted by Ethiopian merchants</span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono">99.98% uptime</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PaymentVerifyCard />
          </div>
        </div>
      </div>
    </section>
  );
}
