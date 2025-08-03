"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons";

const skillCategories = {
  web: {
    title: "Web Development",
    icon: CodepenIcon,
    description: "Building modern, responsive web applications",
  },
  api: {
    title: "Canva Design",
    icon: WebhookIcon,
    description: "Creating sleek visuals, presentations, and social media content with Canva",
  },
  ai: {
    title: "Teaching",
    icon: ActivityIcon,
    description: "Sharing knowledge through clear, engaging instruction in tech and design",
  },
  mobile: {
    title: "Languages & Frameworks",
    icon: MobileIcon,
    description: "Proficient in JavaScript, Python, Django, React, and more",
  }
};

function SkillCard({ skill, isSelected, onClick }) {
  const Icon = skill.icon;

  return (
    <motion.div
      onClick={onClick}
      className={`relative cursor-pointer group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
        isSelected
          ? "bg-white/20 border-black border-2 shadow-lg"
          : "bg-white/10 border-gray-300/20 hover:bg-white/20 hover:border-gray-300/30"
      }`}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {!isSelected && (
        <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div
          className={`p-4 rounded-xl transition-all duration-300 ${
            isSelected ? "bg-white/30" : "bg-white/10 group-hover:bg-white/20"
          }`}
        >
          <Icon className="w-8 h-8 text-black" />
        </div>
        <div>
          <h3 className="font-semibold text-black text-lg mb-2">
            {skill.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SkillDetails({ selectedSkill }) {
  if (!selectedSkill) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <motion.div
        className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-black mb-6 text-center">
          {selectedSkill.title}
        </h3>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          {selectedSkill.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("web");
  
  return (
    <div className="relative">
      <div className="mx-auto container px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my technical skills across different domains. Click on any
            category to see more details.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(skillCategories).map(([key, skill], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard
                skill={skill}
                isSelected={selectedCategory === key}
                onClick={() => setSelectedCategory(key)}
              />
            </motion.div>
          ))}
        </div>

        {/* Skill Details */}
        <AnimatePresence mode="wait">
          <SkillDetails selectedSkill={skillCategories[selectedCategory]} />
        </AnimatePresence>
      </div>
    </div>
  );
}