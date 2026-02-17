import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { RULES, REGISTRATION_DEADLINE } from "@/data/constants";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const ruleItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

const Rules = () => {
  return (
    <section id="rules" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3 font-display">Guidelines</p>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-wider text-foreground">
            GENERAL <span className="text-gradient">DIRECTIVES</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {RULES.map((rule, i) => (
            <motion.div
              key={i}
              variants={ruleItem}
              className="glass px-5 py-4 flex items-start gap-4 hover:border-primary/20 transition-colors"
            >
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm md:text-base text-foreground/80">{rule}</p>
            </motion.div>
          ))}

          <motion.div
            variants={ruleItem}
            className="glass-strong px-5 py-4 flex items-start gap-4 neon-border mt-6"
          >
            <AlertTriangle size={18} className="text-primary shrink-0 mt-0.5 animate-pulse-neon" />
            <p className="text-sm md:text-base text-foreground font-semibold">
              Last date for registration:{" "}
              <span className="text-primary">{REGISTRATION_DEADLINE}</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rules;
