"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCoffee, 
  FaMugHot, 
  FaBeer, 
  FaGlassWhiskey,
  FaCookie,
  FaIceCream,
  FaBirthdayCake,
  FaUtensils,
  FaWineGlassAlt,
  FaBlender
} from "react-icons/fa";
import { 
  GiCoffeePot, 
  GiCoffeeCup, 
  GiCupcake,
  GiTeapot,
  GiSodaCan,
  GiWineBottle
} from "react-icons/gi";
import { 
  IoIosIceCream,
  IoMdCafe
} from "react-icons/io";

const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationState, setAnimationState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const handlePingMe = () => {
    window.location.href = "mailto:hemanthkumarpolisetti@gmail.com?subject=Let's%20collaborate!";
  };

  // Cycle through animation states
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById("contact-section");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 12
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      boxShadow: [
        "0 0 0 rgba(139, 69, 19, 0.1)",
        "0 0 20px rgba(139, 69, 19, 0.3)",
        "0 0 0 rgba(139, 69, 19, 0.1)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  // Coffee cup animation
  const coffeeVariants = {
    idle: {
      rotate: [0, 5, -5, 0],
      y: [0, -2, 0],
      transition: { 
        duration: 3, 
        repeat: Infinity,
        repeatType: "mirror" 
      }
    },
    steam: {
      y: [-5, -15, -5],
      opacity: [0.4, 0.8, 0.4],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        repeatType: "mirror" 
      }
    }
  };

  // Enhanced steam effect
  const steamVariants = {
    steam1: {
      y: [-10, -30, -10],
      opacity: [0.2, 0.6, 0.2],
      x: [-5, 0, 5],
      transition: { 
        duration: 3, 
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0.2
      }
    },
    steam2: {
      y: [-15, -35, -15],
      opacity: [0.3, 0.7, 0.3],
      x: [0, 5, 0],
      transition: { 
        duration: 3.5, 
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0.5
      }
    },
    steam3: {
      y: [-10, -25, -10],
      opacity: [0.1, 0.5, 0.1],
      x: [5, 0, -5],
      transition: { 
        duration: 4, 
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0.8
      }
    }
  };

  // Text highlight animation sequence
  const highlightPhrases = [
    "Django expertise",
    "React magic",
    "API development"
  ];

   const floatingIcons = [
    { icon: FaCoffee, size: "text-xl", position: "top-5 left-5", delay: 0, moveY: 15, moveX: 5, rotate: 10 },
    { icon: FaMugHot, size: "text-2xl", position: "bottom-10 right-10", delay: 0.3, moveY: 20, moveX: 8, rotate: 15 },
    { icon: GiCoffeePot, size: "text-lg", position: "top-1/4 right-15", delay: 0.6, moveY: 25, moveX: 10, rotate: 20 },
    { icon: GiCoffeeCup, size: "text-xl", position: "bottom-5 left-1/3", delay: 0.9, moveY: 18, moveX: 7, rotate: 12 },
    { icon: FaCookie, size: "text-md", position: "top-1/3 left-15", delay: 1.2, moveY: 22, moveX: 9, rotate: 18 },
    { icon: FaIceCream, size: "text-lg", position: "bottom-1/4 right-1/3", delay: 1.5, moveY: 30, moveX: 12, rotate: 25 },
    { icon: FaBirthdayCake, size: "text-xl", position: "top-15 right-1/3", delay: 1.8, moveY: 15, moveX: 6, rotate: 8 },
    { icon: GiCupcake, size: "text-md", position: "bottom-15 left-15", delay: 2.1, moveY: 28, moveX: 11, rotate: 22 },
    { icon: FaUtensils, size: "text-lg", position: "top-1/2 left-5", delay: 2.4, moveY: 20, moveX: 8, rotate: 15 },
    { icon: FaBeer, size: "text-xl", position: "bottom-5 right-15", delay: 2.7, moveY: 25, moveX: 10, rotate: 20 },
    { icon: GiTeapot, size: "text-lg", position: "top-10 right-10", delay: 3.0, moveY: 18, moveX: 7, rotate: 12 },
    { icon: GiSodaCan, size: "text-md", position: "bottom-10 left-10", delay: 3.3, moveY: 22, moveX: 9, rotate: 18 },
    { icon: GiWineBottle, size: "text-xl", position: "top-20 right-20", delay: 3.6, moveY: 15, moveX: 6, rotate: 8 },
    { icon: FaWineGlassAlt, size: "text-lg", position: "bottom-20 left-20", delay: 3.9, moveY: 28, moveX: 11, rotate: 22 },
    { icon: IoIosIceCream, size: "text-xl", position: "top-1/4 left-1/4", delay: 4.2, moveY: 20, moveX: 8, rotate: 15 },
    { icon: IoMdCafe, size: "text-lg", position: "bottom-1/4 right-1/4", delay: 4.5, moveY: 25, moveX: 10, rotate: 20 },
    { icon: FaBlender, size: "text-md", position: "top-30 left-30", delay: 4.8, moveY: 18, moveX: 7, rotate: 12 }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={container}
      id="contact-section"
      className="w-full px-4 py-16 max-w-7xl mx-auto mt-12 relative overflow-visible"
    >
      {/* Coffee-themed background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.4) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(101, 67, 33, 0.4) 0%, transparent 50%)`
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror"
          }
        }}
      />
      
      {/* Enhanced floating icons with more movement */}
      {floatingIcons.map((icon, index) => {
        const Icon = icon.icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${icon.position} ${icon.size} text-amber-600 opacity-20`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
              y: [0, -icon.moveY, 0],
              x: [0, icon.moveX, 0],
              rotate: [0, icon.rotate, -icon.rotate, 0],
              transition: {
                duration: 8 + index,
                repeat: Infinity,
                repeatType: "mirror",
                delay: icon.delay,
                ease: "easeInOut"
              }
            }}
            whileHover={{
              scale: 1.5,
              opacity: 0.5,
              transition: { duration: 0.3 }
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}
      {/* Card container with coffee-themed border */}
      <motion.div
        className="relative bg-white dark:bg-black border-4 border-amber-50 rounded-2xl shadow-lg p-8 md:p-12 overflow-hidden h-auto mb-20"
        variants={pulseVariants}
        animate="pulse"
      >
        {/* Coffee stain decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-transparent rounded-full -mr-32 -mt-32 blur-2xl"
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-300/10 to-transparent rounded-full -ml-24 -mb-24 blur-xl"
          initial={{ opacity: 0.4 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />

        {/* Main content */}
        <motion.div className="relative z-10">
          <motion.h2 
            variants={item}
            className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center flex items-center justify-center"
          >
            Let's Brew Some Code Together
            <motion.div
              className="relative ml-4"
              variants={coffeeVariants}
              animate="idle"
            >
              <FaMugHot className="text-4xl text-amber-700" />
              
              {/* Enhanced steam effect */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <motion.span 
                  className="block w-1 h-6 bg-amber-200/50 rounded-full"
                  variants={steamVariants}
                  animate="steam1"
                />
                <motion.span 
                  className="block w-1 h-8 bg-amber-200/70 rounded-full"
                  variants={steamVariants}
                  animate="steam2"
                />
                <motion.span 
                  className="block w-1 h-5 bg-amber-200/40 rounded-full"
                  variants={steamVariants}
                  animate="steam3"
                />
              </div>
            </motion.div>
          </motion.h2>
          
          <motion.div 
            className="w-full flex flex-col items-center gap-4"
            variants={container}
          >
            <motion.p 
              variants={item}
              className="text-amber-800 text-center text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Got an idea that needs {" "}
              <AnimatePresence mode="wait">
                <motion.span 
                  key={animationState}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="font-semibold text-amber-600 inline-block"
                >
                  {highlightPhrases[animationState]}
                </motion.span>
              </AnimatePresence>
              ? Whether you want to discuss innovative solutions, 
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ display: 'inline-block', margin: '0 4px' }}
                className="font-semibold text-amber-900"
              >
                AI integrations
              </motion.span>, 
              or just geek out about tech - my inbox is ready for exciting conversations!
            </motion.p>

            <motion.div
              className="mt-4 flex flex-col items-center"
              variants={item}
            >
              <motion.button
                onClick={handlePingMe}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(139, 69, 19, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-amber-700 text-amber-50 font-bold py-3 px-8 rounded-full border-2 border-amber-600/30 transition-all duration-300 shadow-md overflow-hidden group"
              >
                {/* Coffee-themed shimmer effect */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/40 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  animate={{ 
                    x: isHovered ? "100%" : "-100%",
                    transition: { 
                      duration: 0.8,
                      ease: "easeInOut",
                      repeat: isHovered ? Infinity : 0,
                      repeatDelay: 0.5
                    }
                  }}
                />
                
                {/* Button content with animated emojis */}
                <span className="relative z-10 flex items-center gap-2 text-base"> 
                  {isHovered ? (
                    <>
                      <motion.span
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        ☕
                      </motion.span>
                      Ping Me Now!
                      <motion.span
                        animate={{ 
                          rotate: [0, -15, 15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
                      >
                        💌
                      </motion.span>
                    </>
                  ) : (
                    <>
                      <motion.span
                        animate={{ 
                          rotate: [0, 15, 0],
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      >
                        ✉️
                      </motion.span>
                      Let's Connect
                      <motion.span
                        animate={{ 
                          x: [0, 5, 0],
                          transition: { duration: 1, repeat: Infinity }
                        }}
                        className="text-lg"
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </span>
              </motion.button>

              <motion.p
                variants={item}
                className="text-xs text-amber-700/80 mt-4 flex items-center"
              >
                <motion.span
                  className="select-none"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ display: 'inline-block', marginRight: '6px' }}
                >
                  🤝
                </motion.span>
                <p className="select-none">I promise: No spam, just meaningful bytes and occasional coffee puns</p>
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ display: 'inline-block', marginLeft: '6px' }}
                  className="select-none"
                >
                  ☕
                </motion.span>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;