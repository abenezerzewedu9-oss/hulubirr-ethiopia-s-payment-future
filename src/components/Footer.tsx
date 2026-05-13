import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  { title: "Product", links: ["Features", "Dashboard", "Pricing"] },
  { title: "Developers", links: ["Documentation", "API Reference", "Webhooks", "Status"] },
  { title: "Company", links: ["Careers", "Blog", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Compliance"] },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="text-white"><Logo /></div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Ethiopia's payment infrastructure. Fast. Verified. Built for Ethiopia.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50">{c.title}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-white/70 transition hover:text-white">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="text-xs text-white/50">© {new Date().getFullYear()} HuluBirr. All rights reserved.</div>
          <div className="text-xs text-white/60">
            Made in Ethiopia <span aria-label="Ethiopia">🇪🇹</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
