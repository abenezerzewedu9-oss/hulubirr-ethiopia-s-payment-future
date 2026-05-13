import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, Loader2, Building2, ArrowRight } from "lucide-react";

export function PaymentVerifyCard() {
  const [stage, setStage] = useState<"pending" | "verified">("pending");

  useEffect(() => {
    const cycle = () => {
      setStage("pending");
      const t = setTimeout(() => setStage("verified"), 2200);
      return t;
    };
    let t = cycle();
    const interval = setInterval(() => {
      clearTimeout(t);
      t = cycle();
    }, 4500);
    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-md"
    >
      {/* glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gold-gradient opacity-20 blur-3xl" />

      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl shadow-glow">
        <div className="rounded-[14px] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6">
          <div className="flex items-center justify-between text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
              <span className="h-2 w-2 rounded-full bg-green-400/80" />
            </div>
            <span className="font-mono">live verification</span>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-white/50">Amount</div>
              <div className="mt-1 text-3xl font-bold text-white">
                ETB <span className="tabular-nums">2,450</span>
                <span className="text-base font-medium text-white/60">.00</span>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <Building2 className="h-6 w-6 text-white/80" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-white/5 p-3">
              <div className="text-[10px] uppercase tracking-wider text-white/40">From</div>
              <div className="mt-1 font-medium text-white">CBE • ****4218</div>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <div className="text-[10px] uppercase tracking-wider text-white/40">Ref</div>
              <div className="mt-1 font-mono text-white">HB-9182</div>
            </div>
          </div>

          {/* Status */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-wider text-white/50">
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
                  className="flex items-center gap-3 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3"
                >
                  <Loader2 className="h-5 w-5 animate-spin text-amber-300" />
                  <div>
                    <div className="text-sm font-semibold text-amber-200">Pending</div>
                    <div className="text-xs text-amber-200/70">Listening for bank SMS…</div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="verified"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 animate-pulse-ring">
                    <Check className="h-5 w-5 text-emerald-950" strokeWidth={3} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-emerald-200">Verified</div>
                    <div className="text-xs text-emerald-200/70">Webhook delivered • 18.4s</div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-emerald-200/70" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* floating side cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 -bottom-6 hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl sm:block"
      >
        <div className="text-[10px] uppercase tracking-wider text-white/50">Today</div>
        <div className="text-lg font-bold text-white">ETB 184,920</div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 -top-6 hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl sm:block"
      >
        <div className="text-[10px] uppercase tracking-wider text-white/50">Avg verify</div>
        <div className="text-lg font-bold text-white">17.2s</div>
      </motion.div>
    </motion.div>
  );
}
