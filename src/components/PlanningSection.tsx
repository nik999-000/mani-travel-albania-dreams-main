import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image666 from "@/assets/666.webp";
import image777 from "@/assets/777.webp";

const PlanningSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background/50 relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6 px-4 lg:px-8"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Plan Your Journey
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Perfectly Planned <br/><span className="text-primary">Holiday Packages</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Start with your holiday package by choosing a guided tour package. It’s the best way to travel with family because all the details are pre-planned for you. This is especially important if you are not keen on researching destinations yourself.
            </p>
            <p>
              For those who do pre-plan, take some time to create a complete itinerary following some research on the destination you are visiting. Pay special attention to special festivals, weather, and political climate when you are working on the itinerary. This provides space for back up plans in case of unforeseen travel problems.
            </p>
            <p>
              The itinerary also ensures that everything is planned based on what you/ your family wants to see and experience. Just make sure all the activities are something worth trying and gives you and your fellow travellers a new dimension of the places visited.
            </p>
          </div>
        </motion.div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 h-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative mt-8 lg:mt-12 group"
          >
            <img 
              src={image666} 
              alt="Travel Planning" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative mb-8 lg:mb-12 group"
          >
            <img 
              src={image777} 
              alt="Guided Tour Experience" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PlanningSection;
