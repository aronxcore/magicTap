import { motion } from "framer-motion";
import type { Person } from "@/data/mockData";

interface CoordinatorCardProps {
  coordinator: Person;
  index?: number;
}

const CoordinatorCard = ({ coordinator, index = 0 }: CoordinatorCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    whileHover={{ y: -4 }}
    className="glass-panel p-4 flex flex-col items-center text-center transition-all"
  >
    <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-primary/40 mb-3">
      <img src={coordinator.photo} alt={coordinator.name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <h3 className="text-sm font-semibold text-foreground mt-1">{coordinator.rank} {coordinator.name}</h3>
    <p className="text-xs text-primary font-medium mt-0.5">{coordinator.position}</p>
  </motion.div>
);

export default CoordinatorCard;
