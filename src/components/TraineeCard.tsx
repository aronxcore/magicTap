import { motion } from "framer-motion";
import type { Person } from "@/data/mockData";

interface TraineeCardProps {
  trainee: Person;
  index?: number;
}

const TraineeCard = ({ trainee, index = 0 }: TraineeCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.05 * index }}
    whileHover={{ scale: 1.05 }}
    className="glass-panel p-3 flex flex-col items-center text-center transition-all"
  >
    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-primary/30 mb-2">
      <img src={trainee.photo} alt={trainee.name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <h3 className="text-xs font-semibold text-foreground truncate w-full">{trainee.rank} {trainee.name}</h3>
  </motion.div>
);

export default TraineeCard;
