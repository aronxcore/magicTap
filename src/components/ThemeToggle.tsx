import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle = ({ isDark, toggle }: ThemeToggleProps) => (
  <button
    onClick={toggle}
    className="relative w-14 h-7 rounded-full bg-secondary border border-border transition-colors"
    aria-label="Toggle theme"
  >
    <motion.div
      className="absolute top-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
      animate={{ left: isDark ? "1.75rem" : "0.125rem" }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {isDark ? <Moon size={14} className="text-primary-foreground" /> : <Sun size={14} className="text-primary-foreground" />}
    </motion.div>
  </button>
);

export default ThemeToggle;
