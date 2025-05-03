"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationState, setAnimationState] = useState(0);
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

  // Enhanced animation variants
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
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 rgb(255, 255, 255)",
        "0 0 20px rgb(255, 255, 255)",
        "0 0 0 rgb(255, 255, 255)"
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  // Background patterns
  const patternVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        ease: "linear",
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

  // Text highlight animation sequence
  const highlightPhrases = [
    "Django expertise",
    "React magic",
    "API development"
  ];

  return (
    <motion.div 
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={container}
      id="contact-section"
      className="w-full px-4 py-16 max-w-7xl mx-auto mt-12 relative overflow-visible" // Changed overflow to visible
    >
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(66, 153, 225, 0.4) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(144, 205, 244, 0.4) 0%, transparent 50%)`
        }}
        variants={patternVariants}
        animate="animate"
      />
      
      {/* Card container with enhanced border effect */}
      <motion.div
        className="relative bg-card border-4 border-border rounded-2xl shadow-lg p-8 md:p-12 overflow-hidden"
        variants={pulseVariants}
        animate="pulse"
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-32 -mt-32 blur-2xl"
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full -ml-24 -mb-24 blur-xl"
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
            className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center flex items-center justify-center"
          >
            Let's Brew Some Code Together
            <motion.div
              className="relative ml-4 inline-block"
              variants={coffeeVariants}
              animate="idle"
            >
              <span className="text-4xl md:text-5xl">☕</span>
              {/* Steam effect */}
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-1"
                variants={coffeeVariants}
                animate="steam"
              >
                <span className="block w-1 h-3 bg-muted-foreground/30 rounded-full"></span>
                <span className="block w-1 h-4 bg-muted-foreground/20 rounded-full"></span>
                <span className="block w-1 h-3 bg-muted-foreground/10 rounded-full"></span>
              </motion.div>
            </motion.div>
          </motion.h2>
          
          <motion.div 
            className="w-full flex flex-col items-center gap-6"
            variants={container}
          >
            <motion.p 
              variants={item}
              className="text-muted-foreground text-center text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              Got an idea that needs {" "}
              <AnimatePresence mode="wait">
                <motion.span 
                  key={animationState}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="font-semibold text-primary inline-block"
                >
                  {highlightPhrases[animationState]}
                </motion.span>
              </AnimatePresence>
              ? Whether you want to discuss innovative solutions, 
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ display: 'inline-block', margin: '0 4px' }}
                className="font-semibold text-foreground"
              >
                AI integrations
              </motion.span>, 
              or just geek out about tech - my inbox is thirsty for exciting conversations!
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
                  boxShadow: "0 0 25px rgba(66, 153, 225, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-primary text-primary-foreground font-bold py-4 px-10 rounded-full border-2 border-primary/30 transition-all duration-300 shadow-md overflow-hidden group"
              >
                {/* Enhanced shimmer effect */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100"
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
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  {isHovered ? (
                    <>
                      <motion.span
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        ✨
                      </motion.span>
                      Ping Me Now!
                      <motion.span
                        animate={{ 
                          rotate: [0, -15, 15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
                      >
                        ✨
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
                        👋
                      </motion.span>
                      Let's Connect
                      <motion.span
                        animate={{ 
                          x: [0, 5, 0],
                          transition: { duration: 1, repeat: Infinity }
                        }}
                        className="text-xl"
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </span>
              </motion.button>

              <motion.p
                variants={item}
                className="text-sm text-muted-foreground mt-6 flex items-center"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ display: 'inline-block', marginRight: '6px' }}
                >
                  🤝
                </motion.span>
                I promise: No spam, just meaningful bytes and occasional bad puns
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ display: 'inline-block', marginLeft: '6px' }}
                >
                  😄
                </motion.span>
              </motion.p>
            </motion.div>
            
            {/* Social proof elements */}
            <motion.div
              variants={item}
              className="w-full max-w-lg mx-auto mt-6 p-4 bg-background/50 rounded-xl border border-border/40 backdrop-blur-sm"
            >
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Typical response time</p>
                <div className="flex items-center justify-center gap-1">
                  <motion.div 
                    className="h-2 w-12 bg-primary rounded-full"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div 
                    className="h-2 w-12 bg-primary rounded-full"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="h-2 w-12 bg-primary rounded-full"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <p className="font-medium mt-2">Usually within 24 hours</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;