import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Sparkles, Users, ShieldCheck, Wallet, Zap, Globe2 } from "lucide-react";

export const Route = createFileRoute("/mobile-wallet")({
  head: () => ({
    meta: [
      { title: "Upcoming Mobile Wallet — HuluBirr" },
      { name: "description", content: "A mobile wallet built for Ethiopia's new generation. Coming after our National Bank licensing." },
      { property: "og:title", content: "Upcoming Mobile Wallet — HuluBirr" },
      { property: "og:description", content: "Built for the 70% of Ethiopia under 30." },
    ],
  }),
  component: MobileWallet,
});

const stats = [
  { v: "70%", l: "Population under 30" },
  { v: "~19", l: "Median age" },
  { v: "130M+", l: "Total population" },
  { v: "40%", l: "Under 15 years old" },
];

function MobileWallet() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <Sparkles className="h-3.5 w-3.5" /> Coming soon
              </div>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                A Mobile Wallet for{" "}
                <span className="bg-gold-gradient bg-clip-text text-transparent">
                  Ethiopia's New Generation
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/70">
                We're building a wallet for the country we actually live in — fast, mobile-first,
                designed for students, gig workers, freelancers and small merchants. Send, receive,
                save and pay in birr from one app.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="bg-gold-gradient text-white shadow-gold-glow hover:opacity-90">
                  Join the Waitlist
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  Read the Vision
                </Button>
              </div>
            </div>

            {/* Phone mock */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -inset-10 rounded-[3rem] bg-gold-gradient opacity-25 blur-3xl" />
                <div className="relative h-[560px] w-[280px] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 shadow-glow backdrop-blur-xl">
                  <div className="h-full w-full overflow-hidden rounded-[2rem] bg-navy p-5">
                    <div className="flex items-center justify-between text-[10px] text-white/60">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <span className="h-1 w-1 rounded-full bg-white/60" />
                        <span className="h-1 w-1 rounded-full bg-white/60" />
                        <span className="h-1 w-1 rounded-full bg-white/60" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-[11px] text-white/50">Total balance</div>
                      <div className="mt-1 text-3xl font-bold text-white">ETB 8,420<span className="text-base text-white/60">.00</span></div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[Wallet, Zap, Smartphone].map((Icon, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-3 text-white/80">
                          <Icon className="h-4 w-4" />
                          <span className="text-[10px]">{["Send","Pay","Top up"][i]}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 text-[11px] uppercase tracking-wider text-white/40">Recent</div>
                    <div className="mt-2 space-y-2">
                      {[
                        { n: "Mom", a: "+ 1,500" },
                        { n: "Habesha Cafe", a: "− 120" },
                        { n: "Ride Addis", a: "− 85" },
                      ].map((r, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-xs">
                          <span className="text-white/80">{r.n}</span>
                          <span className={`font-mono ${r.a.startsWith("+") ? "text-emerald-300" : "text-white/70"}`}>{r.a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NBE Licensing */}
      <section className="relative bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 rounded-3xl border border-border bg-card p-8 shadow-card-soft lg:grid-cols-[auto_1fr] lg:p-12">
            <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
              <img src="/logos/nbe.png" alt="National Bank of Ethiopia" className="h-28 w-28 object-contain" />
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                Pending NBE Licensing
              </span>
            </div>
            <div>
              <h2 className="text-balance text-2xl font-bold text-navy sm:text-3xl">
                Operating under National Bank of Ethiopia oversight
              </h2>
              <p className="mt-4 text-muted-foreground">
                Once we receive our license from the National Bank of Ethiopia and become a fully
                regulated operator, HuluBirr Wallet will roll out nationwide — bringing modern,
                compliant, mobile-first money to every Ethiopian who wants it.
              </p>
              <p className="mt-3 text-muted-foreground">
                We're building this the right way: licensed, audited, and accountable to the regulators
                that protect Ethiopian consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why now (demographics) */}
      <section className="relative bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Users className="mr-1.5 h-3.5 w-3.5" /> Why now
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Built for the youngest country in Africa
            </h2>
            <p className="mt-4 text-muted-foreground">
              As of 2026, Ethiopia is one of the youngest populations on the continent. The wallet
              we're building reflects how this generation actually moves money — on a phone, in
              real time, without paperwork.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-card-soft"
              >
                <div className="text-4xl font-bold text-primary">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 text-sm text-muted-foreground lg:grid-cols-3">
            {[
              { icon: Users, t: "Built for digital natives", d: "Approximately 70–71% of Ethiopians are under 30. They expect financial tools that work like the apps they use every day." },
              { icon: Globe2, t: "Designed for mobile-first money", d: "Roughly 39–45% of the population is under 15 — by the time they earn, the wallet is the bank." },
              { icon: ShieldCheck, t: "Regulated and accountable", d: "Operating under the oversight of the National Bank of Ethiopia, with full KYC and consumer protection." },
            ].map((it) => (
              <div key={it.t} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold text-navy">{it.t}</div>
                <p className="mt-2">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-green-gradient py-20">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Be first in line</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Join the waitlist and we'll let you know the moment HuluBirr Wallet goes live in Ethiopia.
          </p>
          <div className="mt-7 flex justify-center">
            <Button size="lg" className="bg-gold-gradient px-8 text-white shadow-gold-glow hover:opacity-90">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
