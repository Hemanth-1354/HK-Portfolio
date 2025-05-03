"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handlePingMe = () => {
    window.location.href = "mailto:hemanthkumarpolisetti@gmail.com?subject=Let's%20collaborate!";
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={container}
      className="w-full px-4 py-12 max-w-7xl mx-auto flex flex-col p-6 mt-10 bg-card border-4 border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
      id="contact"
    >
      <motion.h2 
        variants={item}
        className="text-3xl font-bold text-foreground mb-4 flex-1 text-center"
      >
        Let's Brew Some Code Together 
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ display: 'inline-block', marginLeft: '8px' }}
        >☕</motion.span>
      </motion.h2>
      
      <motion.div 
        className="w-full flex flex-col items-center gap-4"
        variants={container}
      >
        <motion.p 
          variants={item}
          className="text-muted-foreground text-center text-lg"
        >
          Got an idea that needs <span className="font-semibold text-foreground">Django expertise</span> or 
          <span className="font-semibold text-foreground"> React magic</span>? 
          Whether you want to discuss <motion.span 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ display: 'inline-block' }}
            className="font-semibold"
          >APIs</motion.span>, 
          <motion.span
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ display: 'inline-block' }}
            className="font-semibold"
          >AI integrations</motion.span>, or just geek out about tech - 
          my inbox is thirsty for exciting conversations!
        </motion.p>

        <motion.button
          onClick={handlePingMe}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.98 }}
          className="relative w-fit bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full border-2 border-border hover:border-primary/80 transition-all duration-300 shadow-sm overflow-hidden group"
        >
          {/* Shimmer effect layer */}
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            animate={{ 
              x: isHovered ? "100%" : "-100%",
              transition: { 
                duration: 0.8,
                ease: "easeInOut"
              }
            }}
          />
          
          {/* Content with emoji animations */}
          <span className="relative z-10 flex items-center gap-2">
            {isHovered ? (
              <>
                <motion.span
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    transition: { duration: 0.8 }
                  }}
                >
                  ✨
                </motion.span>
                Ping Me Now!
                <motion.span
                  animate={{ 
                    rotate: [0, -15, 15, 0],
                    transition: { duration: 0.8, delay: 0.2 }
                  }}
                >
                  ✨
                </motion.span>
              </>
            ) : (
              <>
                <motion.span
                  animate={{ 
                    rotate: [0, 10, 0],
                    transition: { duration: 1.5, repeat: Infinity }
                  }}
                >
                  👋
                </motion.span>
                Let's Connect
                <motion.span
                  animate={{ 
                    x: [0, 3, 0],
                    transition: { duration: 1, repeat: Infinity }
                  }}
                >
                  →
                </motion.span>
              </>
            )}
          </span>
        </motion.button>

        <motion.p
          variants={item}
          className="text-sm text-muted-foreground mt-2 flex items-center"
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
    </motion.div>
  );
};

export default ContactMe;