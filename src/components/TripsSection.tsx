import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

import img2 from "@/assets/2.webp";
import img6 from "@/assets/6.webp";
import img4 from "@/assets/4.webp.webp";
import img5 from "@/assets/5.webp.webp";
import video2 from "@/assets/2.mp4";
import video3 from "@/assets/3.mp4";
import video4 from "@/assets/4.mp4";
import image111 from "@/assets/111.jpeg";
import video111 from "@/assets/111.mp4";

const trips = [
  { video: video111, title: "Eksperiencë me Barkë", location: "Lumi i Shalës" },
  { video: video2, title: "Lundrim në Lumë", location: "Shala River" },
  { video: video3, title: "Eksplorim me Barkë", location: "Koman Lake" },
  { video: video4, title: "Bukuria e Natyrës", location: "Alpet Shqiptare" },
  { image: image111, title: "Pamje Mahnitëse", location: "Natyra Shqiptare" },
  { image: img2, title: "Liqeni i Komanit", location: "Komani & Shala" },
  { image: img6, title: "Lumi i Shalës", location: "Theth & Shala" },
  { image: img4, title: "Pamje Mahnitëse", location: "Lumi i Shalës" },
  { image: img5, title: "Aventurë në Natyrë", location: "Shqipëria Veriore" },
];

const TripsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="trips" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Popular Destinations</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Curated Trips
          </h2>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass rounded-full items-center justify-center text-foreground hover:scale-110 transition-transform"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass rounded-full items-center justify-center text-foreground hover:scale-110 transition-transform"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0"
          >
            {trips.map((trip, i) => (
              <motion.div
                key={trip.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex-shrink-0 w-[280px] md:w-[300px] snap-start group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  {trip.video ? (
                    <video
                      src={trip.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={trip.image}
                      alt={trip.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripsSection;
