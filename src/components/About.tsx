import { motion } from "framer-motion";
import { GraduationCap, Cpu } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3 font-display">Discover</p>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-wider text-foreground">
            ABOUT <span className="text-gradient">US</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="glass p-6 md:p-8 group hover:neon-border transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl tracking-wide text-foreground mb-4">
              About the College
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Alva's College stands as a beacon of excellence in vocational education and civil service preparation. 
              Nestled in a beautiful artistic campus, the institution consistently produces 30–40 Mangalore University 
              ranks every year, reflecting its unwavering commitment to academic brilliance and holistic development.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="glass p-6 md:p-8 group hover:neon-border transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
              <Cpu className="text-secondary" size={24} />
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl tracking-wide text-foreground mb-4">
              About Techotsav 2026
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              TECHOTSAV 2026 is the ultimate platform for bright minds to compete, innovate, and showcase their 
              technical prowess. From coding battles to product launches, this inter-college IT fest brings together 
              the best talent to learn, network, and push the boundaries of technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
