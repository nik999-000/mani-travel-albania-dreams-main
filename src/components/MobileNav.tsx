import { Home, Map, Image, MessageSquare, Calendar } from "lucide-react";

const items = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Map, label: "Trips", href: "#trips" },
  { icon: Image, label: "Gallery", href: "#gallery" },
  { icon: MessageSquare, label: "About", href: "#about" },
  { icon: Calendar, label: "Book", href: "#booking" },
];

const MobileNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-nav border-t border-border/30">
    <div className="flex justify-around items-center h-16 px-2">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-0.5 text-foreground/70 hover:text-primary active:text-primary transition-colors min-w-[50px]"
        >
          <item.icon size={20} />
          <span className="text-[10px] font-semibold">{item.label}</span>
        </button>
      ))}
    </div>
  </nav>
);

export default MobileNav;
