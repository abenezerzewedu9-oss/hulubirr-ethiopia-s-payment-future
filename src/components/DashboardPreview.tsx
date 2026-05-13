import { motion } from "framer-motion";
import { LayoutDashboard, Wallet, Users, ArrowUpRight, CheckCircle2, Search, Bell, Settings } from "lucide-react";

const txs = [
  { id: "HB-9182", name: "Selam Tadesse", amount: "ETB 2,450", bank: "CBE" },
  { id: "HB-9181", name: "Abebe Bikila", amount: "ETB 850", bank: "Awash" },
  { id: "HB-9180", name: "Hanna Girma", amount: "ETB 12,400", bank: "Dashen" },
  { id: "HB-9179", name: "Yonas Mulu", amount: "ETB 600", bank: "Telebirr" },
];

const bars = [40, 65, 50, 80, 72, 95, 88, 60, 78, 92, 70, 85];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Dashboard
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            A dashboard built for serious merchants
          </h2>
          <p className="mt-4 text-muted-foreground">
            Track every birr in real time. Designed for operators who actually run the business.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <div className="relative rounded-3xl border border-white/10 bg-navy p-2 shadow-glow">
            {/* glow */}
            <div className="pointer-events-none absolute -inset-12 -z-10 rounded-[3rem] bg-gold-gradient opacity-10 blur-3xl" />

            <div className="grid grid-cols-12 gap-2 overflow-hidden rounded-2xl bg-[oklch(0.13_0.04_260)]">
              {/* Sidebar */}
              <aside className="col-span-3 hidden border-r border-white/5 p-4 md:block">
                <div className="flex items-center gap-2 text-white">
                  <span className="h-7 w-7 rounded-md bg-gold-gradient" />
                  <span className="text-sm font-bold">HuluBirr</span>
                </div>
                <nav className="mt-6 space-y-1 text-sm">
                  {[
                    { icon: LayoutDashboard, label: "Overview", active: true },
                    { icon: Wallet, label: "Transactions" },
                    { icon: Users, label: "Customers" },
                    { icon: Bell, label: "Webhooks" },
                    { icon: Settings, label: "Settings" },
                  ].map((n) => (
                    <div
                      key={n.label}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                        n.active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5"
                      }`}
                    >
                      <n.icon className="h-4 w-4" />
                      {n.label}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Main */}
              <div className="col-span-12 p-4 md:col-span-9 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/50">Welcome back</div>
                    <div className="text-lg font-semibold text-white">Today's overview</div>
                  </div>
                  <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 sm:flex">
                    <Search className="h-3.5 w-3.5" /> Search transactions
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { l: "Today's volume", v: "ETB 184,920", d: "+12.4%" },
                    { l: "Transactions", v: "342", d: "+8.1%" },
                    { l: "Active payers", v: "1,284", d: "+3.2%" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <div className="text-[11px] uppercase tracking-wider text-white/40">{s.l}</div>
                      <div className="mt-1 text-lg font-bold text-white sm:text-xl">{s.v}</div>
                      <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-emerald-400">
                        <ArrowUpRight className="h-3 w-3" /> {s.d}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-white">Daily revenue</div>
                    <div className="text-[11px] text-white/40">Last 12 days</div>
                  </div>
                  <div className="mt-4 flex h-32 items-end gap-2">
                    {bars.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.04 }}
                        className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/40 to-emerald-300"
                      />
                    ))}
                  </div>
                </div>

                {/* Tx list */}
                <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.03]">
                  <div className="flex items-center justify-between border-b border-white/5 p-4">
                    <div className="text-sm font-medium text-white">Recent transactions</div>
                    <div className="text-[11px] text-white/40">View all</div>
                  </div>
                  <ul className="divide-y divide-white/5">
                    {txs.map((t) => (
                      <li key={t.id} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-white">{t.name}</div>
                            <div className="text-[11px] text-white/40">
                              {t.id} • {t.bank}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-white">{t.amount}</span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                            <CheckCircle2 className="h-3 w-3" /> Verified
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
