import { motion } from "framer-motion";
import { Zap, Landmark, LineChart, ShieldCheck, Code2, Smartphone } from "lucide-react";

const features = [
  { icon: Zap, title: "Under 20 Second Verification", desc: "Real-time SMS detection means payments confirm faster than your customer can refresh." },
  { icon: Landmark, title: "All Major Ethiopian Banks", desc: "CBE, Awash, Dashen, Telebirr and more — one integration covers them all." },
  { icon: LineChart, title: "Real-Time Merchant Dashboard", desc: "Track revenue, transactions and active payers as they happen, not at end of day." },
  { icon: ShieldCheck, title: "Fraud Detection Built-In", desc: "TxRef deduplication, amount matching and risk scoring on every transaction." },
  { icon: Code2, title: "Simple REST API", desc: "Clean docs, predictable JSON, webhooks. Integrate in hours, not weeks." },
  { icon: Smartphone, title: "Works on any device", desc: "Mobile-first dashboards. Built so your operations team can run from a phone." },
];

const banks = [
  { src: "/logos/cbe.png", name: "CBE" },
  { src: "/logos/awash.png", name: "Awash" },
  { src: "/logos/dashen.png", name: "Dashen" },
  { src: "/logos/telebirr.png", name: "Telebirr" },
  { src: "/logos/bank5.png", name: "Bank" },
  { src: "/logos/bank6.png", name: "Bank" },
  { src: "/logos/bank7.png", name: "Bank" },
  { src: "/logos/bank8.png", name: "Bank" },
  { src: "/logos/bank9.png", name: "Bank" },
];

export function Features() {
  return (
    <section className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Features
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Everything you need to accept payments in Ethiopia
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-card-soft"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Supported banks & wallets
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 grayscale opacity-80">
            {banks.map((b, i) => (
              <img key={i} src={b.src} alt={b.name} className="h-10 w-auto object-contain" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
