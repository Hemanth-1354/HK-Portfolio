"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const educationItems = [
    {
      id: 1,
      href: "https://srmap.edu.in/",
      logo: "/Education/srmlogo.jpeg",
      alt: "SRM University AP Logo",
      institution: "SRM University, Amaravati, Andhra Pradesh",
      period: "2022 - 2026",
      grade: "8.53 CGPA",
      degree: "Bachelor of Technology in Computer Science and Engineering (CSE)",
    },
    {
      id: 2,
      href: "https://navodaya.gov.in/",
      logo: "/Education/navodayalogo.jpeg",
      alt: "Jawahar Navodaya Vidyalaya Logo",
      institution: "Jawahar Navodaya Vidyalaya (CBSE), Krishna, Andhra Pradesh",
      period: "2020 - 2022",
      grade: "89.2%",
      degree: "12th Grade - PCM",
    },
    {
      id: 3,
      href: "https://navodaya.gov.in/",
      logo: "/Education/navodayalogo.jpeg",
      alt: "Jawahar Navodaya Vidyalaya Logo",
      institution: "Jawahar Navodaya Vidyalaya (CBSE), Krishna, Andhra Pradesh",
      period: "2019 - 2020",
      grade: "93.8%",
      degree: "Metriculation - 10th Grade",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const cardHover = {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.08)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  };

  const logoHover = {
    scale: 1.15,
    rotate: [0, 5, -5, 0],
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.8,
    },
  };

  // Enhanced title animation
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Timeline node animations
  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: index => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + (index * 0.2),
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
  };

  // Timeline line drawing animation
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="w-full px-4 py-20 max-w-7xl mx-auto flex flex-col gap-y-6 relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      id="education"
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-black/5 to-transparent dark:from-white/5 rounded-full blur-3xl -mr-48 -mt-48 opacity-40"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.4 } : {}}
        transition={{ duration: 1.5 }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-black/5 to-transparent dark:from-white/5 rounded-full blur-3xl -ml-40 -mb-40 opacity-40"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.4 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Enhanced Section Heading */}
      <motion.div 
        className="text-center mb-16 relative"
        variants={titleVariants}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6 relative inline-block">
          Education Journey
          <motion.span
            className="absolute -bottom-3 left-0 w-full h-1.5 bg-black dark:bg-white rounded-full"
            variants={underlineVariants}
            style={{ originX: 0 }}
          />
        </h2>
        
        <motion.p
          className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          My academic path from foundational learning to specialized technical education
        </motion.p>
      </motion.div>

      {/* Timeline Wrapper with enhanced visuals */}
      <div className="flex flex-col space-y-12 relative pl-12 sm:pl-16">
        {/* Animated Vertical Line with gradient */}
        <motion.div
          className="w-1 absolute left-6 sm:left-8 top-0 bottom-0 bg-gradient-to-b from-black/90 via-black to-black/60 dark:from-white/90 dark:via-white dark:to-white/60 z-0 rounded-full"
          variants={lineVariants}
          style={{ originY: 0 }}
        />

        {/* Enhanced Education Items */}
        {educationItems.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={item}
            custom={index}
            className="relative z-10 flex items-start"
          >
            {/* Enhanced Timeline Node */}
            <motion.div
              className="absolute left-6 sm:left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              whileHover={logoHover}
              custom={index}
              variants={nodeVariants}
            >
              <motion.span 
                className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-black dark:border-white w-14 h-14 bg-white dark:bg-black shadow-lg"
                whileHover={{ 
                  boxShadow: "0 0 0 4px rgba(0,0,0,0.2) dark:rgba(255,255,255,0.2)"
                }}
              >
                <Image
                  width={56}
                  height={56}
                  alt={edu.alt}
                  src={edu.logo}
                  className="object-cover transition-all duration-500" // Removed grayscale filter
                  priority={index === 0}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent dark:from-white/10 rounded-full"
                  whileHover={{ opacity: 0 }}
                />
              </motion.span>
            </motion.div>

            {/* Enhanced Card with elegant black & white styling */}
            <Link
              href={edu.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer w-full"
            >
              <motion.div
                className="ml-16 sm:ml-24 rounded-2xl bg-white dark:bg-black p-6 sm:p-8 shadow-lg hover:shadow-xl border-2 border-black/10 dark:border-white/10 flex flex-col sm:flex-row justify-between gap-6"
                whileHover={cardHover}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                <div className="flex-1">
                  <motion.h3 
                    className="font-bold text-base sm:text-xl mb-2 text-black dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    {edu.institution}
                  </motion.h3>
                  
                  <motion.div
                    className="h-0.5 w-16 bg-black/50 dark:bg-white/50 rounded-full mb-3"
                    initial={{ width: 0 }}
                    animate={inView ? { width: 64 } : {}}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.4 }}
                  />
                  
                  <motion.p 
                    className="text-sm sm:text-base text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  >
                    {edu.degree}
                  </motion.p>
                </div>
                
                <div className="flex flex-col items-end justify-center sm:min-w-[120px]">
                  <motion.div 
                    className="text-right text-lg sm:text-xl font-semibold text-black dark:text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {edu.grade}
                  </motion.div>
                  
                  <motion.div 
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    {edu.period}
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
        
        {/* Removed the end node decoration */}
      </div>
      
      {/* Bottom decoration */}
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-transparent via-black/60 dark:via-white/60 to-transparent rounded-full mx-auto mt-10"
        initial={{ opacity: 0, width: 0 }}
        animate={inView ? { opacity: 1, width: 96 } : {}}
        transition={{ delay: 1.6, duration: 0.8 }}
      />
    </motion.section>
  );
};

export default Education;