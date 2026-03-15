import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface InfoStatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  index?: number;
}

const InfoStatCard = ({ icon: Icon, label, value, index = 0 }: InfoStatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    whileHover={{ scale: 1.03, boxShadow: "0 0 20px hsl(43 72% 52% / 0.2)" }}
    className="glass-panel p-4 flex items-start gap-3 transition-all"
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
      <p className="text-sm font-semibold text-foreground mt-0.5 truncate">{value}</p>
    </div>
  </motion.div>
);

export default InfoStatCard;
