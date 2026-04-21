import { Mail, Phone, MapPin } from "lucide-react";

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => (
  <footer className="section-padding bg-secondary/30 pb-28 md:pb-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <div>
          <img src="/manitravel-removebg-preview.png" alt="Mani Travel Logo" className="h-12 w-auto object-contain mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your gateway to the most beautiful destinations in Albania. Curated experiences since 2014.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "Trips", "Gallery", "About", "Contact"].map((l) => (
              <button
                key={l}
                onClick={() => document.querySelector(`#${l.toLowerCase() === "home" ? "hero" : l.toLowerCase() === "contact" ? "booking" : l.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:Zefmani18@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={16} /> Zefmani18@gmail.com
            </a>
            <a href="tel:+355683627190" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={16} /> +355 68 362 7190
            </a>
            <a href="https://maps.app.goo.gl/vMLB2BBYDxxxUoyf7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <MapPin size={16} /> Find us on Google Maps
            </a>
            <div className="flex gap-3 mt-2">
              <a href="https://www.facebook.com/zef.mani.5/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
                <FacebookIcon size={18} />
              </a>
              <a href="https://www.instagram.com/shala_river_tour/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2024 Mani Travel. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
