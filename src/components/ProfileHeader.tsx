import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface InfoCard {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface ProfileHeaderProps {
  portrait: string;
  name: string;
  rank: string;
  subtitle: string;
  organization?: string;
  infoCards?: InfoCard[];
}

const ProfileHeader = ({ portrait, name, rank, subtitle, organization = "BUREAU OF FIRE PROTECTION", infoCards = [] }: ProfileHeaderProps) => (
  <div className="relative bg-accent/40 py-12 md:py-16 lg:py-20">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Portrait - 70mm x 90mm ≈ 265px x 340px with slight border radius */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex flex-col items-center shrink-0"
        >
          <div className="w-[265px] h-[340px] rounded-lg overflow-hidden border-[3px] border-primary gold-glow-strong">
            <img src={portrait} alt={name} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center md:text-left flex-1"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-2">
            {organization}
          </p>
          {/* Rank before name */}
          <p className="text-sm md:text-base text-fore font-semibold uppercase tracking-wider mb-1">{rank}</p>
          <h1 className=" text-primary text-3xl md:text-5xl lg:text-6xl font-display font-bold gold-gradient-text leading-tight">
            {name}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mt-3 tracking-wide">
            {subtitle.split("|").map((part, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2 text-[muted-foreground/50]">·</span>}
                {part.trim()}
              </span>
            ))}
          </p>

          {/* Info Cards Grid */}
          {infoCards.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 max-w-2xl">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + 0.1 * i }}
                    className="glass-panel p-4 flex flex-col gap-2"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{card.label}</p>
                    <p className="text-sm font-semibold text-foreground">{card.value}</p>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
