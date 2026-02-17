import { motion } from "framer-motion";
import { EVENTS } from "@/data/constants";
import { Users, Layers, IndianRupee, Phone } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const Events = () => {
  return (
    <section id="events" className="relative py-20 md:py-32">
      <div className="absolute inset-0 radial-glow opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3 font-display">Compete</p>
          <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl tracking-wider text-foreground">
            EVENT <span className="text-gradient">TERMINAL</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto"
        >
          {EVENTS.map((event) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                variants={cardItem}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 group hover:border-primary/60 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] transition-all duration-500"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm md:text-base tracking-wider text-foreground">
                        {event.name}
                      </h3>
                      <p className="text-xs text-primary/70 tracking-wide">{event.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-foreground/70">
                      <Users size={12} /> {event.team}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-foreground/70">
                      <Layers size={12} /> {event.rounds}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                      <IndianRupee size={12} /> {event.fee}
                    </span>
                  </div>

                  <div className="border-t border-white/5 pt-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 font-display">Coordinators</p>
                    {event.coordinators.map((c, i) => (
                      <p key={i} className="text-xs text-foreground/60 flex items-center gap-1.5">
                        <Phone size={10} className="text-primary/50" />
                        {c.name} — {c.phone}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
