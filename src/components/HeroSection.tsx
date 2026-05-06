import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/1.webp";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Preload hero image */}
      <img src={heroImage} alt="" className="hidden" aria-hidden="true" loading="eager" />
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offsetY * 0.4}px) scale(1.05)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-background" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-white/90 drop-shadow-md font-body font-medium mb-4"
        >
          Discover the beauty of Albania
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] leading-tight max-w-4xl"
        >
          Explore Albania with{" "}
          <span className="text-gradient">Mani Travel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-base md:text-lg text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] max-w-xl font-body"
        >
          Unforgettable journeys through pristine beaches, ancient cities, and breathtaking mountains.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary-travel"
          >
            Book Now
          </button>
          <button
            onClick={() => document.querySelector("#trips")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-2xl font-semibold text-lg glass text-foreground hover:scale-105 transition-all duration-300"
          >
            View Trips
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => document.querySelector("#trips")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 animate-bounce text-foreground/50"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
