import { useState } from "react";
import { Shield, Award, MapPin, Building, Users, FileText } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import OfficerCard from "@/components/OfficerCard";
import TraineeCard from "@/components/TraineeCard";
import CoordinatorCard from "@/components/CoordinatorCard";
import SpeakerCard from "@/components/SpeakerCard";
import DirectorCard from "@/components/DirectorCard";
import TopnotcherPodium from "@/components/TopnotcherPodium";
import AlbumCard from "@/components/AlbumCard";
import PhotoGalleryModal from "@/components/PhotoGalleryModal";
import SearchBar from "@/components/SearchBar";
import VideoSection from "@/components/VideoSection";
import SectionWrapper from "@/components/SectionWrapper";
import CenteredGrid from "@/components/CenteredGrid";
import {
  cadetProfile,
  companyOfficers,
  companyRegimentalOfficers,
  companyTrainees,
  courseCoordinators,
  guestSpeakers,
  nftiDirector,
  topnotchers,
  albumEvents,
  AlbumEvent,
} from "@/data/mockData";

const infoCards = [
  { icon: Shield, label: "Rank", value: cadetProfile.info.foRank },
  { icon: Award, label: "Class", value: cadetProfile.info.class },
  { icon: MapPin, label: "Region", value: cadetProfile.info.region },
  { icon: Building, label: "NFTI Campus", value: cadetProfile.info.campus },
  { icon: Users, label: "Company", value: cadetProfile.info.company },
  { icon: FileText, label: "Designation", value: cadetProfile.info.designation },
];

const PersonalRecollek = () => {
  const [search, setSearch] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumEvent | null>(null);

  const filteredTrainees = companyTrainees.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Cover */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80"
          alt="Personal Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Profile Header */}
      <div className="relative -mt-16 flex flex-col items-center">
        <ProfileHeader
          portrait={cadetProfile.portrait}
          name={cadetProfile.name}
          rank={cadetProfile.rank}
          subtitle={cadetProfile.subtitle}
          infoCards={infoCards}
        />
      </div>

      <div className="container mt-8">
        {/* Official Class Video */}
        <VideoSection title="Official Class Video" />

        {/* Company Officers */}
        <SectionWrapper title="Company Officers" subtitle="Alpha Company">
          <CenteredGrid cols={4}>
            {companyOfficers.map((o, i) => (
              <OfficerCard key={o.id} officer={o} index={i} />
            ))}
          </CenteredGrid>
        </SectionWrapper>

        {/* Company Regimental Officers */}
        <SectionWrapper title="Company Regimental Officers" subtitle="Alpha Company">
          <CenteredGrid cols={4}>
            {companyRegimentalOfficers.map((o, i) => (
              <OfficerCard key={o.id} officer={o} index={i} />
            ))}
          </CenteredGrid>
        </SectionWrapper>

        {/* Company Trainees */}
        <SectionWrapper title={`Company Trainees (${companyTrainees.length})`}>
          <div className="max-w-md mx-auto mb-6">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search trainees by name..."
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredTrainees.map((trainee, i) => (
              <TraineeCard key={trainee.id} trainee={trainee} index={i} />
            ))}
          </div>
        </SectionWrapper>

        {/* Guest of Honor & Speaker */}
        <SectionWrapper title="Guest of Honor & Speaker">
          <div className="max-w-md mx-auto">
            <SpeakerCard
              title="Guest of Honor & Speaker"
              name={guestSpeakers.guestOfHonor.name}
              description={guestSpeakers.guestOfHonor.description}
              photo={guestSpeakers.guestOfHonor.photo}
              link={guestSpeakers.guestOfHonor.link}
              index={0}
            />
          </div>
        </SectionWrapper>

        {/* NFTI Director */}
        <SectionWrapper title="NFTI Director">
          <DirectorCard director={nftiDirector} />
        </SectionWrapper>

        {/* Course Coordinators */}
        <SectionWrapper title="Course Coordinators">
          <CenteredGrid cols={4}>
            {courseCoordinators.map((c, i) => (
              <CoordinatorCard key={c.id} coordinator={c} index={i} />
            ))}
          </CenteredGrid>
        </SectionWrapper>

        {/* Company Topnotchers */}
        <SectionWrapper title="Company Topnotchers" subtitle="Top 10 Outstanding Graduates">
          <div className="max-w-3xl mx-auto">
            <TopnotcherPodium topnotchers={topnotchers} />
          </div>
        </SectionWrapper>

        {/* Company Album */}
        <SectionWrapper title="Company Album" subtitle="Memories from Alpha Company">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {albumEvents.map((event, i) => (
              <AlbumCard
                key={event.id}
                event={event}
                index={i}
                onClick={setSelectedAlbum}
              />
            ))}
          </div>
        </SectionWrapper>
      </div>

      <PhotoGalleryModal
        event={selectedAlbum}
        onClose={() => setSelectedAlbum(null)}
      />

      <footer className="py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © 2025 MagicTap Recollek — Digital Yearbook System
        </p>
      </footer>
    </div>
  );
};

export default PersonalRecollek;
