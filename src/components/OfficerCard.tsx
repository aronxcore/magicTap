import { motion } from "framer-motion";
import type { Person } from "@/data/mockData";

interface OfficerCardProps {
  officer: Person;
  index?: number;
}

const OfficerCard = ({ officer, index = 0 }: OfficerCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    whileHover={{ y: -4, boxShadow: "0 0 25px hsl(43 72% 52% / 0.2)" }}
    className="glass-panel p-4 flex flex-col items-center text-center transition-all"
  >
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 border-primary/40 mb-3">
      <img src={officer.photo} alt={officer.name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <h3 className="text-sm font-semibold text-foreground mt-1">{officer.rank} {officer.name}</h3>
    {officer.position && (
      <p className="text-xs text-primary mt-0.5">{officer.position}</p>
    )}
  </motion.div>
);

export default OfficerCard;
