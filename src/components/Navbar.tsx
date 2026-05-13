import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", to: "/" },
  { label: "How it Works", to: "/#how-it-works", hash: true },
  { label: "Developers", to: "/#developers", hash: true },
  { label: "Mobile Wallet", to: "/mobile-wallet" },
  { label: "About", to: "/#about", hash: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-white">
          <Logo />
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.hash ? (
              <a key={l.label} href={l.to.replace("/", "")} className="text-sm text-white/70 transition hover:text-white">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.to} className="text-sm text-white/70 transition hover:text-white">
                {l.label}
              </Link>
            )
          )}
        </div>
        <div className="hidden md:block">
          <Button className="bg-gold-gradient text-white shadow-gold-glow hover:opacity-90">
            Get Started
          </Button>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl">
          <div className="space-y-2 px-4 py-4">
            {links.map((l) => (
              <a key={l.label} href={l.to} onClick={() => setOpen(false)} className="block py-2 text-white/80">
                {l.label}
              </a>
            ))}
            <Button className="mt-2 w-full bg-gold-gradient text-white">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
