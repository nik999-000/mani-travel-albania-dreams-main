import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Trips", href: "#trips" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#booking" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-md" : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("#hero")} className="flex items-center">
          <img src="/manitravel-removebg-preview.png" alt="Mani Travel Logo" className="h-10 md:h-12 w-auto object-contain" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                scrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] hover:text-white/80"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo("#booking")} className="btn-primary-travel !px-6 !py-2.5 !text-sm !rounded-xl">
            Book Now
          </button>
        </div>

        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left py-3 text-base font-medium text-foreground border-b border-border/50 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <button onClick={() => scrollTo("#booking")} className="btn-primary-travel !py-3 mt-2 text-center rounded-xl">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
