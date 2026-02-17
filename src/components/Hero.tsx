import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown, Trophy, CalendarDays, MapPin } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/8 blur-[150px] animate-pulse-neon" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px]" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.p
          variants={item}
          className="text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6 md:mb-8"
        >
          Alva's College (Autonomous) • A Unit of Alva's Education Foundation • Affiliated to Mangalore University
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-9xl tracking-wider text-gradient mb-2 md:mb-4"
          style={{ textShadow: "0 0 60px hsl(var(--primary) / 0.3)" }}
        >
          TECHOTSAV
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-1 tracking-[0.2em]">2026</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          <span className="text-foreground font-semibold tracking-widest uppercase">Into the Techno Verse</span>
          <br />
          <span className="text-xs sm:text-sm">Inter-College IT Fest by Dept of Computer Science, Moodubidire</span>
        </motion.p>

        {/* Countdown Timer */}
        <motion.div variants={item} className="mb-10 md:mb-14">
          <CountdownTimer targetDate="2026-03-02T09:00:00" />
        </motion.div>

        {/* Highlight Bar */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 mb-10 md:mb-14"
        >
          {[
            { icon: Trophy, text: "Prize Pool: ₹15,000" },
            { icon: CalendarDays, text: "2nd – 3rd March 2026" },
            { icon: MapPin, text: "Shreemathi Mohini Appaji Nayak Vedike" },
          ].map((h, i) => (
            <div
              key={i}
              className={`glass px-5 py-3 flex items-center gap-3 text-sm ${
                i === 1 ? "sm:border-x-0 sm:rounded-none" : i === 0 ? "sm:rounded-r-none" : "sm:rounded-l-none"
              }`}
            >
              <h.icon size={16} className="text-primary shrink-0" />
              <span className="text-foreground/80">{h.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="events" smooth duration={500} offset={-80} className="cursor-pointer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-4 rounded-xl font-display text-sm font-semibold tracking-wider bg-gradient-to-r from-primary to-secondary text-primary-foreground transition-all duration-300"
              style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.3), 0 0 60px hsl(var(--primary) / 0.1)" }}
            >
              EXPLORE EVENTS
              <ChevronDown size={16} className="inline-block ml-2 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </Link>
          <motion.a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-10 py-4 rounded-xl font-display text-sm font-semibold tracking-wider border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-300 animate-pulse-neon"
            style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.15)" }}
          >
            REGISTER NOW
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
