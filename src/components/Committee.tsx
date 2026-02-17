import { motion } from "framer-motion";
import { User, Phone } from "lucide-react";
import { STAFF_COORDINATORS, STUDENT_COORDINATORS } from "@/data/constants";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

const Committee = () => {
  return (
    <section id="committee" className="relative py-20 md:py-32">
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3 font-display">The Team</p>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-wider text-foreground">
            ORGANIZING <span className="text-gradient">COMMITTEE</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Staff */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-display font-bold text-sm tracking-widest text-primary mb-5 uppercase">
              Staff Coordinators
            </h3>
            <div className="space-y-3">
              {STAFF_COORDINATORS.map((member, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="glass px-5 py-4 flex items-center gap-4 hover:border-primary/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="text-primary" size={18} />
                  </div>
                  <p className="text-sm md:text-base text-foreground/90 font-medium">{member.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Students */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-display font-bold text-sm tracking-widest text-secondary mb-5 uppercase">
              Student Coordinators
            </h3>
            <div className="space-y-3">
              {STUDENT_COORDINATORS.map((member, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="glass px-5 py-4 flex items-center gap-4 hover:border-secondary/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <User className="text-secondary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-foreground/90 font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Phone size={10} /> {member.phone}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
