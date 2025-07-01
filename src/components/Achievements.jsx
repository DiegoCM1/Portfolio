// Imports animation tools from Framer Motion for transitions and effects
import { motion, AnimatePresence } from "framer-motion";

// Imports images used in the achievements section
import ImpactGrantWinners from "../assets/images/llamaImpactRecipients.webp";
import BluEyeTeam from "../assets/images/bluEyeTeam.webp";
import BluEyeLogo from "../assets/images/bluEyeLogo.webp";
import logoLlamaCon2025 from "../assets/images/llamaCon2025Logo.webp";
import MarkAndSatynLlamaCon2025 from "../assets/images/markTalkingLlamaCon2025.webp";
import llamaConRecipientTeams from "../assets/images/llamaCon2025RecipientTeams.webp";
import logoVerskod from "../assets/images/verskodLogo.webp";
import logoCOMS from "../assets/images/logoCOMS.webp";
import Proycoms from "../assets/images/PROYCOMSEvent.webp";
import TeamCOMS from "../assets/images/teamCOMS.webp";
import talentLandLogo from "../assets/images/talentLandMexicoLogo.webp";
import meTalentLand from "../assets/images/meAtTalentLand.webp";
import expoTalentLand from "../assets/images/expoTalentLand.webp";
import meAtNasaSpaceApps from "../assets/images/meAtNasaSpaceApps.webp";
import logoMetaquetzal from "../assets/images/logoMetaquetzal.webp";
import NasaSpaceAppsLogo from "../assets/images/nasaSpaceAppsLogo.webp";

// React hooks for state and lifecycle
import { useState, useEffect } from "react";

// Array of achievements to display as cards
const achievements = [
  {
    title: "Meta Llama Impact Grant Winner",
    subtitle:
      "Won the $100K Pan-LATAM Hackathon with BluEye, an AI-powered hurricane alert system recognized by Meta for social impact",
    year: "2024-2025",
    link: "https://about.fb.com/news/2025/04/llama-impact-grant-recipients/",
    logo: ImpactGrantWinners,
    logo2: BluEyeTeam,
    logo3: BluEyeLogo,
  },
  {
    title: "Featured at LlamaCon 2025",
    subtitle:
      "Showcased BluEye as one of Meta’s top AI impact projects at their global LlamaCon event.",
    year: "2025",
    link: "https://ai.meta.com/blog/llamacon-llama-news/",
    logo: logoLlamaCon2025,
    logo2: MarkAndSatynLlamaCon2025,
    logo3: llamaConRecipientTeams,
  },
  {
    title: "Co-Founder of COMS & Verskod",
    subtitle:
      "Built and led early-stage products focused on workplace well-being (COMS) and AI/web development (Verskod).",
    year: "2023–2025",
    link: "https://www.linkedin.com/in/luis-colin-mendiola-974679176/",
    logo: logoVerskod,
    logo2: logoCOMS,
  },
  {
    title: "Speaker at PROYCOMS",
    subtitle:
      "Spoke at an online conference on stress, work-life balance, and workplace culture",
    year: "2024",
    link: "https://www.linkedin.com/events/proycoms7265533245801328640/comments/",
    logo: Proycoms,
    logo2: TeamCOMS,
  },
  {
    title: "TalentLand 2025 - Google Cloud Scholarship",
    subtitle:
      "Attended on full scholarship. Joined AI, Dev and startup-focused workshops and networking events.",
    year: "2025",
    link: "https://www.linkedin.com/posts/luis-colin-mendiola-974679176_talentland2025-googlecloud-chess-activity-7328112958171979776-byzt?utm_source=share&utm_medium=member_desktop&rcm=ACoAACm-4SgBzyI7GAGLRATnfw46MvawDqU5s8c",
    logo: talentLandLogo,
    logo2: meTalentLand,
    logo3: expoTalentLand,
  },
  {
    title: "NASA Space Apps Challenge CDMX",
    subtitle:
      "Took part in NASA’s global hackathon focused on solving Earth and space-related challenges using open data. Co-created 'MetaQuetzal'",
    year: "2024",
    link: "https://www.linkedin.com/posts/luis-colin-mendiola-974679176_talentland2025-googlecloud-chess-activity-7328112958171979776-byzt?utm_source=share&utm_medium=member_desktop&rcm=ACoAACm-4SgBzyI7GAGLRATnfw46MvawDqU5s8c",
    logo: NasaSpaceAppsLogo ,
    logo2: meAtNasaSpaceApps,
    logo3: logoMetaquetzal
  },
];

// Add this after the achievements array and before the component
const slideAnimations = [
  // Llama Grants
  {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { x: 200, opacity: 0 },
  },
  // LlamaCon
  {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 200, opacity: 0 },
  },
  // Co-founder
  {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { y: 200, opacity: 0 },
  },
  // Speaker PROYCOMS
  {
    initial: { x: 200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { y: -200, opacity: 0 },
  },
  // TalentLand
  {
    initial: { x: 200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -200, opacity: 0 },
  },
  // Nasa Space Apps
    {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { x: -200, opacity: 0 },
  },
];

const Achievements = () => {
  // State to track which image is shown in each card
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Returns the currently active image for a given item, cycling through up to 3 images
  const getActiveImage = (item) => {
    const images = [item.logo, item.logo2, item.logo3].filter(Boolean); // remove undefined/null
    return images[currentImageIndex % images.length]; // cycle through them
  };

  // Auto-increments image index every 3 seconds to trigger image changes
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => prev + 1);
    }, 3000); // every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(imageInterval);
  }, []);

  return (
    // Main container with padding and background color
    <section
      id="achievements"
      className="bg-primaryDarkBlue dark:bg-dark-surface px-6 sm:px-10 lg:px-28 py-10"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-textWhite dark:text-dark-textPrimary mb-10">
        Achievements
        <span className="text-buttonBlue">.</span>
      </h2>

      {/* Grid layout for achievements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through each achievement and create an animated card */}
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }} // card enlarges slightly on hover
            initial={{ opacity: 0, y: 20 }} // animation on entry
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }} // staggered animation
            viewport={{ once: true }}
            className="bg-primaryDarkBlue dark:bg-dark-background border border-buttonBlue/40 rounded-xl p-5 text-textWhite dark:text-dark-textPrimary shadow-md"
          >
            {/* If the item has a link, make the whole card clickable */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {/* Only render image section if there’s at least one image */}
                {(item.logo || item.logo2) && (
                  <div className="relative h-48 mb-3 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {/* Image transition animation */}
                      <motion.img
                        key={getActiveImage(item)}
                        src={getActiveImage(item)}
                        alt={item.title}
                        initial={slideAnimations[index % 6].initial}
                        animate={slideAnimations[index % 6].animate}
                        exit={slideAnimations[index % 6].exit}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
                )}

                {/* Text content of the card */}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-buttonBlue mb-1">{item.subtitle}</p>
                <span className="text-xs text-dark-textSecondary dark:text-textWhite/40">
                  {item.year}
                </span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Export the component for use in other parts of the app
export default Achievements;
