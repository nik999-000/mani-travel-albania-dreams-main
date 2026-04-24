import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pricingOptions = [
  {
    title: "Group Experience",
    price: "€15",
    priceLek: "1,500 Lekë",
    per: "per person",
    description: "Join fellow travelers for a guided excursion. Perfect for families, friends, and meeting new people. Departure at 9:00 and return at 15:00.",
  },
  {
    title: "Private Tour (1 Hour)",
    price: "€70",
    priceLek: "7,000 Lekë",
    per: "per hour",
    description: "A personalized and exclusive short tour, tailored specifically to your unique interests and pace.",
  },
  {
    title: "Full Day Private Experience",
    price: "€250",
    priceLek: "25,000 Lekë",
    per: "full day",
    description: "An unforgettable, immersive full-day journey exclusively guided for you, packed with adventure and scenic views.",
  },
];

const PricingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">
            Our Packages
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Choose Your Adventure
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingOptions.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 md:p-8 text-center group hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <div className="flex items-baseline justify-center mb-1">
                <span className="text-4xl font-bold text-primary">{p.price}</span>
                {p.per && <span className="ml-2 text-sm text-muted-foreground">{p.per}</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-3">{p.priceLek}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
