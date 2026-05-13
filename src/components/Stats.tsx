import { motion } from "framer-motion";

const stats = [
  { value: "200M+", label: "Volume Processed" },
  { value: "25M+", label: "Transactions" },
  { value: "190M+", label: "API Calls" },
  { value: "12K+", label: "Registered Users" },
];

export function Stats() {
  return (
    <section className="bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="px-6 py-10 text-center first:border-l-0"
            >
              <div className="text-4xl font-bold text-navy sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
