import { motion } from "framer-motion";
import { Send, Radio, Webhook } from "lucide-react";

const steps = [
  {
    icon: Send,
    title: "Customer pays via CBE, Awash, or Dashen",
    desc: "They transfer to your account with a unique reference code attached to the order.",
    n: "01",
  },
  {
    icon: Radio,
    title: "HuluBirr detects the payment instantly",
    desc: "Our SMS listener catches the bank alert the moment it arrives — no polling, no delays.",
    n: "02",
  },
  {
    icon: Webhook,
    title: "Your dashboard updates automatically",
    desc: "A webhook fires, the order is confirmed, and your team moves on. Zero manual reconciliation.",
    n: "03",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            How it works
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Verify any Ethiopian bank payment in under{" "}
            <span className="text-primary">20 seconds</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card-soft transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/60">
                {s.n}
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-gradient text-white shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
