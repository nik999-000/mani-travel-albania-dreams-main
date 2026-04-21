import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Heart, MapPin, Star } from "lucide-react";

const features = [
  { icon: Shield, title: "Safe & Trusted", desc: "Licensed operator with over 20 years of experience in curating exceptional and secure travel experiences." },
  { icon: Heart, title: "Local Expertise", desc: "Native guides who share authentic culture and hidden spots." },
  { icon: MapPin, title: "Custom Itineraries", desc: "Every trip is tailored to your pace, style, and interests." },
  { icon: Star, title: "5-Star Experience", desc: "Top-rated on every platform — our guests love us." },
];

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Over 20 Years of Excellence
          </div>
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Why Mani Travel</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Crafted with Care
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            With over two decades of dedicated service, we have perfected the art of creating unforgettable journeys. Trust our rich experience to guide you through the hidden gems and spectacular landscapes of Albania.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 md:p-8 text-center group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <f.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
