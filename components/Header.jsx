"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, Math.random() * 30 + 20);

      return () => clearTimeout(timeout);
    } else {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayedText}
      <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
};

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="fixed inset-0 z-1 h-screen w-full pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 30,
              density: { enable: true, area: 800 }
            },
            color: { value: "#888" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#999",
              opacity: 0.4,
              width: 1
            }
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "grab"
              }
            },
            modes: {
              push: { quantity: 5 }
            }
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const wave = {
    wave: {
      rotate: [0, 14, -8, 14, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 2.5
      },
      transformOrigin: "50% 100%"
    }
  };

  const floating = {
    float: {
      y: [0, -12, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textGlow = {
    hidden: { 
      textShadow: "0 0 0px rgba(0,0,0,0)",
      opacity: 0.9 
    },
    visible: {
      textShadow: [
        "0 0 0px rgba(0,0,0,0)",
        "0 0 10px rgba(100, 100, 100, 0.5)",
        "0 0 0px rgba(0,0,0,0)"
      ],
      opacity: 1,
      transition: {
        duration: 3.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const introText = "Passionate developer crafting APIs that are efficient and reliable, with UIs that are intuitive and user-friendly. From Python to JavaScript, Django to Tailwind, I build websites and software solutions that solve real problems. Coding comes with its challenges, but I'm always ready to find the next solution or at least copy-paste it from GitHub after reading the documentation like a responsible engineer.";

  return (
    <>
      <ParticleBackground />
      <motion.div
        className={`w-full py-8 transition-all duration-500 relative ${scrolled ? "bg-opacity-95 backdrop-blur-sm" : ""} select-none`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Profile image */}
            <motion.div
              className="relative flex-none md:w-72 md:h-72 w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 dark:border-gray-200 shadow-xl order-1 md:order-none"
              style={{ marginTop: '-5px', marginRight: '40px' }}
              initial={{ scale: 0.8, opacity: 0, rotate: -8 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                transition: {
                  delay: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 12
                }
              }}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              variants={floating}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-700/20 to-gray-900/20 dark:from-gray-300/20 dark:to-gray-100/20 z-10" />
              <Image
                src="./me/me.png"
                alt="Hemanth - Full-Stack Developer"
                fill
                sizes="(max-width: 768px) 128px, 288px"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Text content with emoji animations */}
            <motion.div 
              className="flex flex-col md:w-9/12 order-2 md:order-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.8
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                Hey, I'm Hemanth
                <motion.span
                  style={{ display: 'inline-block', marginLeft: '8px', marginBottom: '5px' }}
                  variants={wave}
                  animate="wave"
                >👋</motion.span>
              </motion.h1>

              {/* Static role text */}
              <motion.div
                className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                I'm a <span className="font-bold text-gray-900 dark:text-gray-100">Full Stack Developer</span>
              </motion.div>

              <motion.p
                className="md:text-xl mt-2 font-medium leading-relaxed dark:font-normal"
                initial="hidden"
                animate="visible"
                variants={textGlow}
              >
                Passionate developer crafting APIs that are 
                <motion.span
                  className="font-semibold text-gray-900 dark:text-gray-100 mx-1"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                >
                  efficient
                </motion.span> 
                and 
                <motion.span
                  className="font-semibold text-gray-900 dark:text-gray-100 mx-1"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5, repeatType: "reverse" }}
                >
                  reliable
                </motion.span>, 
                with UIs that are intuitive
                <motion.span
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{ display: 'inline-block', margin: '0 4px' }}
                >
                  🌟
                </motion.span>
                and user-friendly.
                From Python to JavaScript, Django to Tailwind, I build
                websites and software solutions that solve real problems.
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  style={{ display: 'inline-block', margin: '0 4px' }}
                >
                  🚀
                </motion.span>
                Coding comes with its challenges, but I'm always ready to find the next solution
                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                    y: [0, -5, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{ display: 'inline-block', marginLeft: '4px' }}
                >
                  🔍
                </motion.span>
                or at least copy-paste it from GitHub after reading the documentation like a responsible engineer.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;