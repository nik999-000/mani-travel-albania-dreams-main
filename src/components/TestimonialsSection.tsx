import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", country: "UK", text: "An absolutely magical trip. The Albanian Riviera was beyond anything I imagined. Mani Travel made everything effortless.", rating: 5 },
  { name: "Marco R.", country: "Italy", text: "The mountain trek was the highlight of my year. Our guide was incredible — knowledgeable and so warm. Highly recommend!", rating: 5 },
  { name: "Anna K.", country: "Germany", text: "From Berat to Ksamil, every detail was perfectly planned. It felt like traveling with a friend who knows all the best spots.", rating: 5 },
  { name: "David L.", country: "USA", text: "Albania is a hidden gem and Mani Travel showed us why. Incredible food, stunning views, and amazing hospitality.", rating: 5 },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What Guests Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-strong rounded-3xl p-8 md:p-12 text-center min-h-[250px] flex flex-col items-center justify-center"
        >
          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <Star key={i} size={18} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 italic font-body">
            "{testimonials[active].text}"
          </p>
          <p className="font-display font-semibold text-foreground">{testimonials[active].name}</p>
          <p className="text-sm text-muted-foreground">{testimonials[active].country}</p>
        </motion.div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-8" : "bg-border"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
