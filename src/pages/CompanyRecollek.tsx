import { useState } from "react";
import { motion } from "framer-motion";
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

const CompanyRecollek = () => {
  const [search, setSearch] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumEvent | null>(null);

  const filteredTrainees = companyTrainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Cover */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80"
          alt="Company Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Company Logo and Details */}
      <div className="relative -mt-16 flex flex-col items-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-28 h-28 rounded-lg bg-card border-4 border-primary flex items-center justify-center gold-glow-strong shadow-lg"
        >
          <img
            src="/images/companyLogo/logo.png"
            alt="Alpha Company Logo"
            className="w-24 h-24 object-contain"
          />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text mt-4 text-center">
          Alpha Company
        </h1>
        <p className="text-muted-foreground text-center">NFTI Campus</p>
      </div>

      <div className="container mt-8">
        {/* Official Company Video */}
        <VideoSection title="Official Company Video" />

        {/* Company Officers */}
        <SectionWrapper title="Company Officers" subtitle="Alpha Company">
          <CenteredGrid cols={4}>
            {companyOfficers.map((officer, index) => (
              <OfficerCard key={officer.id} officer={officer} index={index} />
            ))}
          </CenteredGrid>
        </SectionWrapper>

        {/* Company Regimental Officers */}
        <SectionWrapper title="Company Regimental Officers">
          <CenteredGrid cols={4}>
            {companyRegimentalOfficers.map((officer, index) => (
              <OfficerCard key={officer.id} officer={officer} index={index} />
            ))}
          </CenteredGrid>
        </SectionWrapper>

        {/* Company Trainees */}
        <SectionWrapper title={`Company Trainees (${companyTrainees.length})`}>
          <div className="max-w-md mx-auto mb-6">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search trainees..."
            />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredTrainees.map((trainee, index) => (
              <TraineeCard key={trainee.id} trainee={trainee} index={index} />
            ))}
          </div>
        </SectionWrapper>

        {/* Guest of Honor & Speaker */}
        <SectionWrapper title="Guest of Honor & Speaker">
          <div className="max-w-md mx-auto">
            <SpeakerCard
              title=" "
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
            {courseCoordinators.map((coordinator, index) => (
              <CoordinatorCard
                key={coordinator.id}
                coordinator={coordinator}
                index={index}
              />
            ))}
          </CenteredGrid>
        </SectionWrapper>

        {/* Company Topnotchers */}
        <SectionWrapper
          title="Company Topnotchers"
          subtitle="Top 10 Outstanding Graduates"
        >
          <div className="max-w-3xl mx-auto">
            <TopnotcherPodium topnotchers={topnotchers} />
          </div>
        </SectionWrapper>

        {/* Company Album */}
        <SectionWrapper
          title="Company Album"
          subtitle="Memories from Alpha Company"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {albumEvents.map((event, index) => (
              <AlbumCard
                key={event.id}
                event={event}
                index={index}
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

      <footer className="py-8 text-center border-t border-border mt-10">
        <p className="text-sm text-muted-foreground">
          © 2025 MagicTap Recollek — Digital Yearbook System
        </p>
      </footer>
    </div>
  );
};

export default CompanyRecollek;