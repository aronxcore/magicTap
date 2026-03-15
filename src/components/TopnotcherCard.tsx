import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import type { Person } from "@/data/mockData";

interface TopnotcherCardProps {
  person: Person;
  rank: number;
}

const medalColors: Record<number, string> = {
  1: "text-yellow-400",
  2: "text-gray-400",
  3: "text-amber-700",
};

const medalBorders: Record<number, string> = {
  1: "border-yellow-400",
  2: "border-gray-400",
  3: "border-amber-700",
};

const topLabels: Record<number, string> = {
  1: "Top 1",
  2: "Top 2",
  3: "Top 3",
};

const TopnotcherCard = ({ person, rank }: TopnotcherCardProps) => {
  const displayName = `${person.rank} ${person.name}`;

  if (rank <= 3) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 * rank }}
        whileHover={{ y: -6 }}
        className="glass-panel p-4 flex flex-col items-center justify-center text-center gap-2 w-full h-full"
      >
        <Trophy className={`w-6 h-6 ${medalColors[rank]}`} />

        <div
          className={`w-20 h-24 rounded-md overflow-hidden border-2 ${medalBorders[rank]} bg-slate-800/40`}
        >
          <img
            src={person.photo}
            alt={displayName}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <h3 className="text-sm font-semibold text-foreground">
          {displayName}
        </h3>

        <p className="text-xs text-muted-foreground">
          {person.company || "No Company"}
        </p>

        {person.grade && (
          <span className="text-xs text-primary font-medium">
            {person.grade}%
          </span>
        )}

        <span
          className={`text-xs font-semibold flex items-center gap-1 ${medalColors[rank]}`}
        >
          <Trophy className="w-3 h-3" />
          {topLabels[rank]}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 * rank }}
      className="glass-panel p-3 flex items-center gap-3"
    >
      <span className="text-sm font-bold text-muted-foreground w-8 text-center">
        #{rank}
      </span>

      <div className="w-12 h-12 rounded-md overflow-hidden border border-primary/30 shrink-0 bg-slate-800/40">
        <img
          src={person.photo}
          alt={displayName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-foreground truncate">
          {displayName}
        </h3>

        <p className="text-xs text-muted-foreground truncate">
          {person.company || "No Company"}
        </p>

        {person.grade && (
          <span className="text-xs text-primary font-medium">
            {person.grade}%
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default TopnotcherCard;
