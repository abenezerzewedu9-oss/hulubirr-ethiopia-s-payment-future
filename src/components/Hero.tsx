import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentVerifyCard } from "./PaymentVerifyCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Light brand gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 12% 20%, oklch(0.93 0.08 55 / 0.55), transparent 60%), radial-gradient(60% 60% at 90% 30%, oklch(0.9 0.08 156 / 0.45), transparent 60%), linear-gradient(180deg, oklch(0.985 0.01 80), oklch(0.97 0.02 156))",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-navy backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Ethiopia's Payment Infrastructure
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-navy sm:text-5xl lg:text-6xl"
        >
          Ethiopia's Fastest{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Payment Verification
          </span>{" "}
          Gateway
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          HuluBirr lets any business accept bank transfers and verify payments automatically in
          under 20 seconds — no bank API needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Button size="lg" className="rounded-full bg-navy px-6 text-white hover:bg-navy/90">
            Start Integrating
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-navy/20 bg-card/60 px-6 text-navy backdrop-blur hover:bg-card"
          >
            <PlayCircle className="mr-1 h-4 w-4" />
            See How it Works
          </Button>
        </motion.div>

        {/* Floating live verification card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto mt-16 flex justify-center"
        >
          <PaymentVerifyCard />
        </motion.div>
      </div>
    </section>
  );
}
