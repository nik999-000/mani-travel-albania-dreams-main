import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import real1 from "@/assets/real-1.jpg";
import real2 from "@/assets/real-2.jpg";
import real3 from "@/assets/real-3.jpg";
import real4 from "@/assets/real-4.jpg";
import real5 from "@/assets/real-5.jpg";
import real6 from "@/assets/real-6.jpg";
import real8 from "@/assets/real-8.jpg";
import real10 from "@/assets/real-10.jpg";
import real11 from "@/assets/real-11.jpg";
import real12 from "@/assets/real-12.jpg";
import real13 from "@/assets/real-13.jpg";
import real14 from "@/assets/real-14.jpg";
import real15 from "@/assets/real-15.jpg";
import real16 from "@/assets/real-16.jpg";
import real17 from "@/assets/real-17.jpg";
import real18 from "@/assets/real-18.jpg";
import real19 from "@/assets/real-19.jpg";
import real20 from "@/assets/real-20.jpg";

const images = [
  { src: real1, alt: "Tur me varkë në kanion" },
  { src: real4, alt: "Shpellë turquoise" },
  { src: real14, alt: "Aventurë në kanion" },
  { src: real8, alt: "Plazh lumore" },
  { src: real11, alt: "Pamje nga liqeni" },
  { src: real16, alt: "Kanion dramatik" },
  { src: real20, alt: "Shpellë me pamje" },
  { src: real17, alt: "Lumi i Shalës" },
  { src: real12, alt: "Varkë në liqen" },
  { src: real13, alt: "Varka jonë" },
  { src: real5, alt: "Kanion lumore" },
  { src: real18, alt: "Liqeni i Komanit" },
  { src: real2, alt: "Mal dhe liqen" },
  { src: real6, alt: "Ujëvarë në mal" },
  { src: real15, alt: "Trek malor" },
  { src: real19, alt: "Plazh & varka" },
  { src: real3, alt: "Kryqëzim lumor" },
  { src: real10, alt: "Brendësia e varkës" },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + images.length) % images.length);
  };

  return (
    <>
      <section id="gallery" className="section-padding bg-secondary/30" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Our Gallery</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Captured Moments
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setSelected(i)}
                className={`relative rounded-2xl overflow-hidden group ${
                  i === 0 || i === 7 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 text-primary-foreground p-2" onClick={() => setSelected(null)}>
              <X size={28} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full p-3"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full p-3"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
            >
              <ChevronRight size={24} />
            </button>

            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
