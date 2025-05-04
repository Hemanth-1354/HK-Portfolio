"use client";
import React, { useState, useEffect } from "react";
import {
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaPython,
  FaBootstrap, FaGithub, FaFileExcel, FaChartLine
} from "react-icons/fa";
import {
  SiDjango, SiFlask, SiNumpy, SiPandas, SiScikitlearn, SiSqlite,
  SiPostgresql, SiSelenium, SiTailwindcss, SiMongodb, SiC, SiCplusplus,
} from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillCategories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
    { id: "languages", name: "Languages" },
    { id: "databases", name: "Databases" },
    { id: "aiml", name: "AI/ML" },
  ];

 
  const skills = [
    { name: "Python", icon: <FaPython color="#306998" />, category: ["languages", "backend"], level: 95 },
    { name: "Django", icon: <SiDjango color="#092E20" />, category: ["backend"], level: 85 },
    { name: "Flask", icon: <SiFlask color="#000000" />, category: ["backend"], level: 80 },
    { name: "Django REST", icon: <SiDjango color="#092E20" />, category: ["backend"], level: 85 },
    { name: "React", icon: <FaReact color="#61dbfb" />, category: ["frontend"], level: 80 },
    { name: "JavaScript", icon: <FaJs color="#f0db4f" />, category: ["frontend", "languages"], level: 85 },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" />, category: ["databases"], level: 85 },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, category: ["databases"], level: 80 },
    { name: "SQL", icon: <FaDatabase color="#f39c12" />, category: ["databases"], level: 90 },
    { name: "SQLite", icon: <SiSqlite color="#003B57" />, category: ["databases"], level: 85 },
    { name: "Git", icon: <FaGitAlt color="#f34f29" />, category: ["tools"], level: 90 },
    { name: "GitHub", icon: <FaGithub color="#181717" />, category: ["tools"], level: 90 },
    { name: "Selenium (WebDriver)", icon: <SiSelenium color="#43B02A" />, category: ["tools"], level: 80 },
    { name: "NumPy", icon: <SiNumpy color="#013243" />, category: ["aiml"], level: 85 },
    { name: "Pandas", icon: <SiPandas color="#150458" />, category: ["aiml"], level: 80 },
    { name: "Scikit-learn", icon: <SiScikitlearn color="#F7931E" />, category: ["aiml"], level: 75 },
    { name: "Matplotlib", icon: <FaChartLine color="#11557C" />, category: ["aiml"], level: 75 },
    {name: "C/C++", icon: <SiCplusplus color="#00599C" />, category: ["languages"], level: 75 },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38b2ac" />, category: ["frontend"], level: 85 },
    { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" />, category: ["frontend"], level: 85 },
    { name: "CSS", icon: <FaCss3Alt color="#2965f1" />, category: ["frontend"], level: 85 },
    { name: "HTML", icon: <FaHtml5 color="#e34f26" />, category: ["frontend"], level: 95 },
    { name: "MS Excel", icon: <FaFileExcel color="#217346" />, category: ["tools"], level: 90 },
  ];


  const filteredSkills = skills.filter(skill => 
    activeCategory === "all" || skill.category.includes(activeCategory)
  );

  const getColorByLevel = (level) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 70) return "bg-blue-500";
    if (level >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  if (!mounted) return null;

  const FadeInSection = ({ children, delay = 0 }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = React.useRef();
    
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      });
      
      if (domRef.current) {
        observer.observe(domRef.current);
      }
      
      return () => {
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      };
    }, [delay]);
    
    return (
      <div
        ref={domRef}
        className={`transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="skills-section my-12 px-4 sm:px-6 lg:px-8">
      <FadeInSection>
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
          My Technical Skills
        </h2>
      </FadeInSection>

      <div className="max-w-6xl mx-auto mb-8 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-md"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill, index) => (
          <FadeInSection key={index} delay={index * 100}>
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">
                  {React.cloneElement(skill.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
              </div>
              
              <div className="mt-auto">
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${getColorByLevel(skill.level)}`} 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No skills found in this category.
        </div>
      )}
    </section>
  );
};

export default Skills;