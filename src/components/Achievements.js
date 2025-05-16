import { motion, AnimatePresence } from "framer-motion";
import ImpactGrantWinners from "../assets/llamaImpactRecipients.png";
import BluEyeTeam from "../assets/bluEyeTeam.jpg";
import BluEyeLogo from "../assets/bluEyeLogo.jpg";
import meTalentLand from "../assets/meAtTalentLand.jpg";
import expoTalentLand from "../assets/expoTalentLand.jpg";

import { useState, useEffect } from "react";

const achievements = [
  {
    title: "Meta Llama Impact Grant Winner",
    subtitle: "$100K Grant – LATAM Hackathon",
    year: "2024-2025",
    link: "https://about.fb.com/news/2025/04/llama-impact-grant-recipients/",
    logo: ImpactGrantWinners,
    logo2: BluEyeTeam,
    logo3: BluEyeLogo
  },
  {
    title: "Featured at LlamaCon 2025",
    subtitle: "Global showcase for AI Innovation by Meta",
    year: "2025",
    logo: ImpactGrantWinners,
  },
  {
    title: "Co-Founder of COMS & Verskod",
    subtitle: "Built MVPs & led front-end + strategy",
    year: "2023–2025",
    logo: ImpactGrantWinners, 
  },
  {
    title: "Speaker at PROYCOMS",
    subtitle: "",
    year: "2024",
    link: "https://about.fb.com/news/2025/04/llama-impact-grant-recipients/",
    logo: ImpactGrantWinners,
  },
  {
    title: "Talent Land 2025",
    subtitle: "Networking, workshops & tech immersion",
    year: "2025",
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
    <section className="bg-secondaryDarkBlue dark:bg-dark-surface py-10 px-6 md:px-20">
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
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-sm underline text-highlightBlue hover:text-buttonBlue transition-colors"
              >
                View More →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
