import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { AlbumEvent } from "@/data/mockData";

interface PhotoGalleryModalProps {
  event: AlbumEvent | null;
  onClose: () => void;
}

const PhotoGalleryModal = ({ event, onClose }: PhotoGalleryModalProps) => {
  const [current, setCurrent] = useState(0);

  if (!event) return null;

  const prev = () => setCurrent((c) => (c === 0 ? event.photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === event.photos.length - 1 ? 0 : c + 1));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full glass-panel overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-display font-bold text-foreground">{event.title}</h3>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="relative aspect-video bg-accent">
            <img
              src={event.photos[current]}
              alt={`${event.title} ${current + 1}`}
              className="w-full h-full object-contain"
            />
            {event.photos.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center text-foreground hover:bg-card transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center text-foreground hover:bg-card transition-colors">
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          <div className="p-3 text-center">
            <span className="text-sm text-muted-foreground">
              {current + 1} / {event.photos.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PhotoGalleryModal;
