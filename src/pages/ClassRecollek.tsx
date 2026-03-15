import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OfficerCard from "@/components/OfficerCard";
import CoordinatorCard from "@/components/CoordinatorCard";
import SpeakerCard from "@/components/SpeakerCard";
import DirectorCard from "@/components/DirectorCard";
import TopnotcherPodium from "@/components/TopnotcherPodium";
import AlbumCard from "@/components/AlbumCard";
import PhotoGalleryModal from "@/components/PhotoGalleryModal";
import VideoSection from "@/components/VideoSection";
import SectionWrapper from "@/components/SectionWrapper";
import SearchBar from "@/components/SearchBar";
import CenteredGrid from "@/components/CenteredGrid";
import {
  classDetails,
  classOfficers,
  classRegimentalOfficers,
  courseCoordinators,
  guestSpeakers,
  nftiDirector,
  topnotchers,
  albumEvents,
  companies,
  AlbumEvent,
} from "@/data/mockData";

const ClassRecollek = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumEvent | null>(null);
  const [companySearch, setCompanySearch] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(companySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Cover */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80"
          alt="Class Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Class Logo & Details */}
      <div className="relative -mt-16 flex flex-col items-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-28 h-28 rounded-lg bg-card border-4 border-primary flex items-center justify-center gold-glow-strong shadow-lg"
        >
          <img
            src="/images/companyLogo/logo.png"
            alt="Class Logo"
            className="w-24 h-24 object-contain"
          />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text mt-4 text-center">
          {classDetails.className}
        </h1>
        <p className="text-muted-foreground text-center">{classDetails.campus}</p>
        <p className="text-sm text-muted-foreground text-center">{classDetails.region}</p>
      </div>

      <div className="container mt-8">
        {/* Official Class Video */}
        <VideoSection title="Official Class Video" />

        {/* Class Description */}
        <SectionWrapper title="Class Description">
          <div className="glass-panel p-6 max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              {classDetails.description}
            </p>
          </div>
        </SectionWrapper>

        {/* List of Companies */}
        <SectionWrapper title="List of Companies">
          <div className="max-w-md mx-auto mb-6">
            <SearchBar
              value={companySearch}
              onChange={setCompanySearch}
              placeholder="Search companies..."
            />
          </div>

          <CenteredGrid cols={4}>
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id ?? company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to="/company"
                  className="glass-panel p-6 flex flex-col items-center text-center block transition-all hover:gold-glow"
                >
                  <div className="w-20 h-20 rounded-xl bg-card border-2 border-primary/40 flex items-center justify-center mb-3 p-2 overflow-hidden">
                    <img
                      src="/images/companyLogo/logo.png"
                      alt={`${company.name} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-sm font-semibold text-foreground">
                    {company.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </CenteredGrid>
        </SectionWrapper>

        {/* Class Officers */}
        <SectionWrapper title="Class Officers">
          <CenteredGrid cols={4}>
            {classOfficers.map((officer, index) => (
              <OfficerCard key={officer.id} officer={officer} index={index} />
            ))}
          </CenteredGrid>
        </SectionWrapper>

        {/* Regimental Officers */}
        <SectionWrapper title="Regimental Officers">
          {classRegimentalOfficers.map((group) => (
            <div key={group.title} className="mb-8">
              <h3 className="text-lg font-display font-semibold text-primary text-center mb-4">
                {group.title}
              </h3>

              <CenteredGrid cols={4}>
                {group.officers.map((officer, index) => (
                  <OfficerCard key={officer.id} officer={officer} index={index} />
                ))}
              </CenteredGrid>
            </div>
          ))}
        </SectionWrapper>

        {/* Guest of Honor & Speaker */}
        <SectionWrapper title="Guest of Honor & Speaker">
          <div className="max-w-md mx-auto">
            <SpeakerCard
              title=""
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

        {/* Class Topnotchers */}
        <SectionWrapper
          title="Class Topnotchers"
          subtitle="Top 10 Outstanding Graduates"
        >
          <div className="max-w-3xl mx-auto">
            <TopnotcherPodium topnotchers={topnotchers} />
          </div>
        </SectionWrapper>

        {/* Class Album */}
        <SectionWrapper
          title="Class Album"
          subtitle="Memories from Class Mandasig"
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

export default ClassRecollek;