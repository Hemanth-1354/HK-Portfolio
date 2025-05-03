"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) controls.start("visible");
    return () => { isMounted = false };
  }, [controls]);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
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

  // Emoji animations
  const emoji = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    },
    wave: {
      rotate: [0, 14, -8, 14, 0],
      transition: { duration: 1.2, repeat: Infinity, repeatDelay: 1 }
    },
    float: {
      y: [0, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity }
    },
    shake: {
      x: [0, 3, -3, 0],
      transition: { duration: 4, repeat: Infinity }
    },
    spin: {
      rotate: 360,
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <motion.div 
      className="flex flex-col my-8"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <div className="flex items-center gap-2">
        <motion.h4 
          className="text-3xl font-bold text-black dark:text-white mb-3"
          variants={item}
        >
          About
        </motion.h4>
        <motion.span
          variants={emoji}
          animate="spin"
          style={{ display: 'inline-block' }}
        >
          🌀
        </motion.span>
      </div>
      
      <motion.p 
        className="text-muted-foreground text"
        variants={item}
      >
        I'm a <motion.span className="font-semibold" variants={item}>Full-stack developer</motion.span>
        <motion.span
          variants={emoji}
          animate="wave"
          style={{ display: 'inline-block' }}
        > 🧑‍💻</motion.span> and
        <motion.span className="font-semibold" variants={item}> AI enthusiast</motion.span>
        <motion.span
          variants={emoji}
          animate="float"
          style={{ display: 'inline-block' }}
        > 🤖</motion.span> who enjoys building scalable web apps and "smart" systems
        that sometimes act smarter than expected (and other times just 
        <motion.span
          animate={{ 
            opacity: [1, 0.3, 1],
            x: [0, 5, -5, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ display: 'inline-block' }}
        > crash silently 💥</motion.span>). I work mostly with
        <motion.span className="font-semibold" variants={item}> Django, REST APIs, and React</motion.span>, and have developed full-stack projects like an
        <motion.span className="font-semibold" variants={item}> online stock trading simulator</motion.span> 
        <motion.span
          variants={emoji}
          animate="pulse"
          style={{ display: 'inline-block' }}
        > 💹</motion.span> (reduced latency by 30%, despite the code trying to fight me)
        and an <motion.span className="font-semibold" variants={item}> NLP-powered news aggregator</motion.span> 
        <motion.span
          variants={emoji}
          animate="spin"
          style={{ display: 'inline-block' }}
        > 📰</motion.span>. On the frontend, I create responsive interfaces with
        <motion.span className="font-semibold" variants={item}> React, JavaScript, and Tailwind CSS</motion.span> that look good on all screen sizes — even your cousin's 6-year-old Android 
        <motion.span
          variants={emoji}
          animate="shake"
          style={{ display: 'inline-block' }}
        > 📱</motion.span>.
        Currently exploring <motion.span className="font-semibold" variants={item}> AI/ML integrations</motion.span> 
        <motion.span
          variants={emoji}
          animate="pulse"
          style={{ display: 'inline-block' }}
        > 🧠</motion.span> and open-source contributions.
        If it involves clean UIs, smart logic, and a dash of controlled chaos — I'm all in. 
        <motion.span
          variants={emoji}
          animate="wave"
          style={{ display: 'inline-block' }}
        > 🔧</motion.span>
        <motion.span
          variants={emoji}
          animate="pulse"
          style={{ display: 'inline-block' }}
        > 😎</motion.span>
      </motion.p>
    </motion.div>
  );
};

export default About;