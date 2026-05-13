import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

const request = `POST https://api.hulubirr.com/v1/payments

{
  "amount": 500,
  "order_id": "ORD-9182",
  "merchant_id": "your_merchant_id",
  "webhook_url": "https://yoursite.com/webhook"
}`;

const response = `{
  "payment_id": "pay_01HXZ4...",
  "ref_code": "HB-9182",
  "to_account": "1000234567890",
  "bank": "CBE",
  "expires_at": "2026-05-13T09:42:00Z",
  "status": "pending"
}`;

export function Developer() {
  return (
    <section id="developers" className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 bg-hero-gradient opacity-60" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">
              <Terminal className="h-3.5 w-3.5" /> Developers
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
              Built for developers.{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Loved by merchants.</span>
            </h2>
            <p className="mt-5 text-white/70">
              Predictable JSON, idempotent endpoints, signed webhooks, sandbox keys. Everything you'd
              expect from a modern payments API — built for Ethiopian rails.
            </p>
            <p className="mt-4 text-sm text-white/60">
              Get your API key in minutes. No paperwork.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" className="bg-gold-gradient text-white shadow-gold-glow hover:opacity-90">
                Read the Docs <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                View on GitHub
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <CodeBlock label="Request" code={request} accent="amber" />
            <CodeBlock label="Response" code={response} accent="emerald" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CodeBlock({ label, code, accent }: { label: string; code: string; accent: "amber" | "emerald" }) {
  const dot = accent === "amber" ? "bg-amber-400" : "bg-emerald-400";
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-glow">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className={`h-2 w-2 rounded-full ${dot}`} /> {label}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">json</span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
        <code className="font-mono text-emerald-100/90">{code}</code>
      </pre>
    </div>
  );
}
