import { motion } from "framer-motion";

const stats = [
  { value: "ETB 30B+", label: "Volume Processed" },
  { value: "100M+", label: "Transactions" },
  { value: "480M+", label: "API Calls" },
  { value: "50K+", label: "Registered Users" },
];

export function Stats() {
  return (
    <section className="relative bg-navy py-16 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-white/70">{s.label}</div>
              <div className="mt-1 text-[11px] text-white/40">In our first 4 months of operation</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
