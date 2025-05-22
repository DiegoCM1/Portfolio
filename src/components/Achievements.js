import { motion, AnimatePresence } from "framer-motion";
import ImpactGrantWinners from "../assets/llamaImpactRecipients.png";
import BluEyeTeam from "../assets/bluEyeTeam.jpg";
import BluEyeLogo from "../assets/bluEyeLogo.jpg";
import logoLlamaCon2025 from "../assets/llamaCon2025Logo.webp";
import MarkAndSatynLlamaCon2025 from "../assets/markTalkingLlamaCon2025.jpg";
import llamaConRecipientTeams from "../assets/llamaCon2025RecipientTeams.jpg";
import logoVerskod from "../assets/verskodLogo.png";
import logoCOMS from "../assets/logoCOMS.png";
import Proycoms from "../assets/PROYCOMSEvent.png";
import TeamCOMS from "../assets/teamCOMS.jpeg";
import meTalentLand from "../assets/meAtTalentLand.jpg";
import expoTalentLand from "../assets/expoTalentLand.jpg";

import { useState, useEffect } from "react";

const achievements = [
  {
    title: "Meta Llama Impact Grant Winner",
    subtitle:
      "Won the $100K Pan-LATAM Hackathon with BluEyes, an AI-powered hurricane alert system recognized by Meta for social impact",
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
    logo: meTalentLand,
    logo2: expoTalentLand,
  },
];

const Achievements = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle image switching within a card
  const getActiveImage = (item) => {
    const images = [item.logo, item.logo2, item.logo3].filter(Boolean);
    return images[currentImageIndex % images.length];
  };

  // Effect for automatic image switching
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section
      id="achievements"
      className="bg-primaryDarkBlue dark:bg-dark-surface px-6 sm:px-10 lg:px-28 py-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-textWhite dark:text-dark-textPrimary mb-10">
        Achievements
        <span className="text-buttonBlue">.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-primaryDarkBlue dark:bg-dark-background border border-buttonBlue/40 rounded-xl p-5 text-textWhite dark:text-dark-textPrimary shadow-md"
          >
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {/* Modified image section */}
                {(item.logo || item.logo2) && (
                  <div className="relative h-48 mb-3 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={getActiveImage(item)} // key triggers re-animation on change
                        src={getActiveImage(item)}
                        alt={item.title}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
                )}
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

export default Achievements;
