import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
          className="relative group"
        >
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-primary/40 to-secondary/20 opacity-60 group-hover:opacity-100 transition-opacity blur-[1px]" />
          <div className="relative bg-white/5 backdrop-blur-md border border-primary/20 rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] text-center">
            <span
              className="block font-display font-black text-2xl sm:text-4xl md:text-5xl text-primary"
              style={{ textShadow: "0 0 20px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--primary) / 0.3)" }}
            >
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="block text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground mt-1 font-display">
              {unit.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
