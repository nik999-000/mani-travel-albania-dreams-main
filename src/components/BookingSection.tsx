import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";

const BookingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const date = formData.get("date");
    const trip = formData.get("trip");
    const notes = formData.get("notes");

    const message = `Pershendetje, deshiroj te rezervoj:\n\nEmri: ${name}\nEmail: ${email}\nData: ${date}\nUdhetimi: ${trip}\nShenime: ${notes}`;
    const whatsappUrl = `https://wa.me/355683627190?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.currentTarget.reset();
  };

  return (
    <section id="booking" className="section-padding bg-background" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Book Your Trip
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-strong rounded-3xl p-6 md:p-10 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-body"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-body"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="date"
              name="date"
              required
              className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-body"
            />
            <select
              name="trip"
              required
              className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-body"
            >
              <option value="">Select Trip</option>
              <option>Group Experience (€15 / 1,500 Lekë per person)</option>
              <option>Private Tour (1 Hour) (€70 / 7,000 Lekë)</option>
              <option>Full Day Private Experience (€250 / 25,000 Lekë)</option>
            </select>
          </div>

          <textarea
            name="notes"
            rows={4}
            placeholder="Special requests or notes..."
            className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none font-body"
          />

          <button
            type="submit"
            className="btn-primary-travel w-full flex items-center justify-center gap-2 rounded-xl"
          >
            {submitted ? "Message Sent! ✓" : (
              <>
                <Send size={18} />
                Send via WhatsApp
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
