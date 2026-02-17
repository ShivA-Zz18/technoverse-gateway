import { motion } from "framer-motion";
import { EVENTS } from "@/data/constants";
import { Users, Layers, IndianRupee, Phone } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

const Events = () => {
  return (
    <section id="events" className="relative py-20 md:py-32">
      <div className="absolute inset-0 radial-glow opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3 font-display">Compete</p>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-wider text-foreground">
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
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
                className="glass p-5 md:p-6 group hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm md:text-base tracking-wider text-foreground">
                      {event.name}
                    </h3>
                    <p className="text-xs text-primary/70">{event.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-xs text-foreground/70">
                    <Users size={12} /> {event.team}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-xs text-foreground/70">
                    <Layers size={12} /> {event.rounds}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-xs text-primary font-medium">
                    <IndianRupee size={12} /> {event.fee}
                  </span>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Coordinators</p>
                  {event.coordinators.map((c, i) => (
                    <p key={i} className="text-xs text-foreground/60 flex items-center gap-1.5">
                      <Phone size={10} className="text-primary/50" />
                      {c.name} — {c.phone}
                    </p>
                  ))}
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
