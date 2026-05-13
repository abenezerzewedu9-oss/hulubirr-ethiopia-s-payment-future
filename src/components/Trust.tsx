import { motion } from "framer-motion";
import { Network, GitBranch, Zap } from "lucide-react";

const items = [
  {
    icon: Network,
    title: "No Bank API Needed",
    desc: "Works with the Ethiopian banking infrastructure that already exists. Skip the integrations queue.",
  },
  {
    icon: GitBranch,
    title: "Open Source Core",
    desc: "Transparent, community-driven, auditable. Inspect every line of the verification engine.",
  },
  {
    icon: Zap,
    title: "Real-Time Webhooks",
    desc: "Your system knows the moment a payment is confirmed — no polling, no waiting, no manual checks.",
  },
];

export function Trust() {
  return (
    <section id="about" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Why HuluBirr
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Why Ethiopian businesses choose HuluBirr
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-card-soft"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-gradient text-white">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-navy">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
