import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface SpeakerCardProps {
  title: string;
  name: string;
  description: string;
  photo: string;
  index?: number;
  link?: string;
}

const SpeakerCard = ({ title, name, description, photo, index = 0, link }: SpeakerCardProps) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 * index }}
      whileHover={{ boxShadow: "0 0 30px hsl(43 72% 52% / 0.2)" }}
      className="glass-panel p-6 flex flex-col items-center text-center transition-all cursor-pointer"
    >
      <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">{title}</span>
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-primary/50 mb-4">
        <img src={photo} alt={name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <h3 className="text-lg font-display font-bold text-foreground">{name}</h3>
      <p className="text-sm text-primary mt-2 whitespace-pre-line">{description}</p>
      {link && (
        <span className="mt-3 text-xs text-primary flex items-center gap-1">
        </span>
      )}
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default SpeakerCard;
