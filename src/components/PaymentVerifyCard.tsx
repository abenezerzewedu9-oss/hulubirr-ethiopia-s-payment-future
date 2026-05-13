import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, Loader2, Building2, ArrowRight } from "lucide-react";

export function PaymentVerifyCard() {
  const [stage, setStage] = useState<"pending" | "verified">("pending");

  useEffect(() => {
    setStage("pending");
    const t = setTimeout(() => setStage("verified"), 2200);
    const interval = setInterval(() => {
      setStage("pending");
      setTimeout(() => setStage("verified"), 2200);
    }, 4500);
    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md">
      {/* glow */}
      <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/20 to-transparent blur-3xl" />

      <div className="relative rounded-2xl border border-border bg-card/90 p-1 backdrop-blur-xl shadow-card-soft">
        <div className="rounded-[14px] bg-gradient-to-br from-secondary/60 to-card p-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <span className="font-mono">live verification</span>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Amount</div>
              <div className="mt-1 text-3xl font-bold text-navy">
                ETB <span className="tabular-nums">2,450</span>
                <span className="text-base font-medium text-muted-foreground">.00</span>
              </div>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-left text-sm">
            <div className="rounded-lg bg-secondary/60 p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">From</div>
              <div className="mt-1 font-medium text-navy">CBE • ****4218</div>
            </div>
            <div className="rounded-lg bg-secondary/60 p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Ref</div>
              <div className="mt-1 font-mono text-navy">HB-9182</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
              <span>Status</span>
              <span className="font-mono">{stage === "pending" ? "00:14" : "00:18"}</span>
            </div>
            <AnimatePresence mode="wait">
              {stage === "pending" ? (
                <motion.div
                  key="pending"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-3 rounded-xl border border-amber-300/60 bg-amber-50 px-4 py-3 text-left"
                >
                  <Loader2 className="h-5 w-5 animate-spin text-amber-600" />
                  <div>
                    <div className="text-sm font-semibold text-amber-700">Pending</div>
                    <div className="text-xs text-amber-700/70">Listening for bank SMS…</div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="verified"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-emerald-300/60 bg-emerald-50 px-4 py-3 text-left"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 animate-pulse-ring">
                    <Check className="h-5 w-5 text-white" strokeWidth={3} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-emerald-700">Verified</div>
                    <div className="text-xs text-emerald-700/70">Webhook delivered • 18.4s</div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-emerald-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 -bottom-6 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-card-soft sm:block"
      >
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Today</div>
        <div className="text-lg font-bold text-navy">ETB 184,920</div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 -top-6 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-card-soft sm:block"
      >
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Avg verify</div>
        <div className="text-lg font-bold text-primary">17.2s</div>
      </motion.div>
    </div>
  );
}
