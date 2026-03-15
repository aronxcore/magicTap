import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import type { AlbumEvent } from "@/data/mockData";

interface AlbumCardProps {
  event: AlbumEvent;
  index?: number;
  onClick: (event: AlbumEvent) => void;
}

const AlbumCard = ({ event, index = 0, onClick }: AlbumCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    whileHover={{ scale: 1.03 }}
    onClick={() => onClick(event)}
    className="glass-panel overflow-hidden cursor-pointer transition-all group"
  >
    <div className="relative h-40 md:h-48 overflow-hidden">
      <img
        src={event.thumbnail}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="text-sm font-semibold text-foreground">{event.title}</h3>
        <div className="flex items-center gap-1 mt-1">
          <Camera className="w-3 h-3 text-primary" />
          <span className="text-xs text-muted-foreground">{event.photoCount} photos</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default AlbumCard;
