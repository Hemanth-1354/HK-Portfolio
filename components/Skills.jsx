"use client";
import React, { useState, useEffect } from "react";
import {
  FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaPython,
  FaJava, FaDocker, FaAws, FaBootstrap, FaGithubSquare, FaPhp, FaSass,
  FaWordpress, FaVuejs, FaAngular, FaStripe, FaUnity, FaSlack, FaCode,
  FaServer, FaTools, FaCloud, FaLaptopCode, FaMobile, FaCog
} from "react-icons/fa";

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillCategories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools & DevOps" },
    { id: "languages", name: "Languages" },
  ];

  const skills = [
    { name: "Python", icon: <FaPython color="#306998" />, category: ["languages", "backend"], level: 95 },
    { name: "JavaScript", icon: <FaJs color="#f0db4f" />, category: ["frontend", "languages"], level: 85 },
    { name: "React", icon: <FaReact color="#61dbfb" />, category: ["frontend"], level: 80 },
    { name: "CSS3", icon: <FaCss3Alt color="#2965f1" />, category: ["frontend"], level: 85 },
    { name: "HTML5", icon: <FaHtml5 color="#e34f26" />, category: ["frontend"], level: 95 },
    { name: "Tailwind CSS", icon: <FaCss3Alt color="#38b2ac" />, category: ["frontend"], level: 85 },
    { name: "Git", icon: <FaGitAlt color="#f34f29" />, category: ["tools"], level: 90 },
    { name: "MongoDB", icon: <FaDatabase color="#47A248" />, category: ["backend"], level: 80 },
    { name: "SQL", icon: <FaDatabase color="#f39c12" />, category: ["backend"], level: 90 },
    { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" />, category: ["frontend"], level: 85 },
    { name: "GitHub", icon: <FaGithubSquare color="#181717" />, category: ["tools"], level: 90 },
    { name: "Vue.js", icon: <FaVuejs color="#41b883" />, category: ["frontend"], level: 60 },
    { name: "Angular", icon: <FaAngular color="#dd1b16" />, category: ["frontend"], level: 60 },
    { name: "Stripe", icon: <FaStripe color="#6772e5" />, category: ["backend"], level: 70 },
    { name: "Firebase", icon: <FaDatabase color="#FFCA28" />, category: ["backend", "tools"], level: 75 },
    { name: "Unity", icon: <FaUnity color="#000000" />, category: ["tools"], level: 50 },
  ];

  const filteredSkills = skills.filter(skill => 
    (activeCategory === "all" || skill.category.includes(activeCategory)) &&
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getColorByLevel = (level) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 70) return "bg-blue-500";
    if (level >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  if (!mounted) return null;

  // Custom animation component
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
      
      const currentElement = domRef.current;
      if (currentElement) {
        observer.observe(currentElement);
      }
      
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
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

      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill, index) => (
          <FadeInSection key={index} delay={index * 100}>
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
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
                  ></div>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No skills match your search. Try a different term or category.
        </div>
      )}
    </section>
  );
};

export default Skills;