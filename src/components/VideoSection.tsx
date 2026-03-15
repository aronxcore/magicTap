import { Play } from "lucide-react";

interface VideoSectionProps {
  title: string;
}

const VideoSection = ({ title }: VideoSectionProps) => (
  <div className="glass-panel p-4 md:p-6">
    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{title}</h3>
    <div className="relative aspect-video bg-accent rounded-lg overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-navy to-background/80" />
      <div className="relative flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center animate-glow">
          <Play className="w-7 h-7 text-primary ml-1" />
        </div>
        <p className="text-sm text-muted-foreground">Video Coming Soon</p>
      </div>
    </div>
  </div>
);

export default VideoSection;
