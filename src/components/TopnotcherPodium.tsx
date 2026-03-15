import TopnotcherCard from "@/components/TopnotcherCard";
import type { Person } from "@/data/mockData";

interface TopnotcherPodiumProps {
  topnotchers: Person[];
}

const TopnotcherPodium = ({ topnotchers }: TopnotcherPodiumProps) => (
  <div className="space-y-6">
    {/* Podium: #2 left, #1 center, #3 right */}
    <div className="flex items-end justify-center gap-4 md:gap-6">
      {topnotchers[1] && (
        <div className="pb-[3rem] w-[180px] flex justify-center">
          <TopnotcherCard person={topnotchers[1]} rank={2} />
        </div>
      )}

      {topnotchers[0] && (
        <div className="pb-[4rem] w-[180px] flex justify-center">
          <TopnotcherCard person={topnotchers[0]} rank={1} />
        </div>
      )}

      {topnotchers[2] && (
        <div className="pb-[2rem] w-[180px] flex justify-center">
          <TopnotcherCard person={topnotchers[2]} rank={3} />
        </div>
      )}
    </div>

    {/* Ranks 4 and below */}
    <div className="glass-panel p-4 space-y-2">
      {topnotchers.slice(3).map((person, index) => (
        <TopnotcherCard
          key={person.id}
          person={person}
          rank={index + 4}
        />
      ))}
    </div>
  </div>
);

export default TopnotcherPodium;
