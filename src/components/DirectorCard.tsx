import { motion } from "framer-motion";
import type { Person } from "@/data/mockData";

interface DirectorCardProps {
  director: Person;
}

const DirectorCard = ({ director }: DirectorCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ boxShadow: "0 0 30px hsl(43 72% 52% / 0.2)" }}
    className="glass-panel p-6 flex flex-col items-center text-center max-w-sm mx-auto transition-all"
  >
    <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-primary/50 mb-4">
      <img src={director.photo} alt={director.name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{director.rank}</span>
    <h3 className="text-lg font-display font-bold text-foreground mt-1">{director.name}</h3>
    <p className="text-sm text-primary">{director.position}</p>
    {director.description && (
      <p className="text-xs text-muted-foreground mt-2">{director.description}</p>
    )}
  </motion.div>
);

export default DirectorCard;
