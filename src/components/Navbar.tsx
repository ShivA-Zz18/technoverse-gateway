import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="hero" smooth duration={500} className="cursor-pointer">
            <span className="font-display font-bold text-lg md:text-xl text-gradient">
              TECHOTSAV
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="!text-primary"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Link to="footer" smooth duration={500} className="cursor-pointer ml-2">
              <button className="relative px-5 py-2 rounded-lg font-display text-xs font-semibold tracking-wider text-primary-foreground bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-shadow duration-300">
                REGISTER NOW
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="footer" smooth duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer">
                <button className="w-full mt-2 px-5 py-3 rounded-lg font-display text-xs font-semibold tracking-wider text-primary-foreground bg-gradient-to-r from-primary to-secondary">
                  REGISTER NOW
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
