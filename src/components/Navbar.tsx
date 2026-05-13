import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Developers", href: "/#developers" },
  { label: "Dashboard", href: "/#dashboard" },
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:pt-5">
      <nav
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 rounded-full border border-border bg-card/80 px-3 pl-5 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-card-soft" : "shadow-sm"
        }`}
      >
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground transition hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button className="rounded-full bg-navy px-5 text-white hover:bg-navy/90">
            Get Started
          </Button>
        </div>
        <button
          className="rounded-full p-2 text-navy md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-border bg-card/95 p-3 shadow-card-soft backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-navy hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <Button className="mt-2 w-full rounded-full bg-navy text-white">Get Started</Button>
        </div>
      )}
    </header>
  );
}
