import { motion } from "framer-motion";
import { Mail, QrCode } from "lucide-react";
import { CONTACT_EMAIL } from "@/data/constants";

const Footer = () => {
  return (
    <footer id="footer" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-wider text-foreground mb-4">
            GET <span className="text-gradient">CONNECTED</span>
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <Mail size={16} />
            {CONTACT_EMAIL}
          </a>
        </motion.div>

        {/* QR Placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14"
        >
          {["Register Here", "Scan for Directions", "Follow on Instagram"].map((label, i) => (
            <div key={i} className="glass p-6 flex flex-col items-center gap-3 w-44">
              <div className="w-28 h-28 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <QrCode size={40} className="text-muted-foreground/30" />
              </div>
              <p className="text-xs text-muted-foreground text-center font-medium">{label}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground/50">
            © 2026 TECHOTSAV — Dept of Computer Science, Alva's College, Moodubidire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
