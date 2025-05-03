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
    threshold: 0.2,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  const cardHover = {
    y: -5,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  };

  const logoHover = {
    scale: 1.1,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.6,
    },
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full px-4 py-16 max-w-7xl mx-auto flex flex-col gap-y-3 relative"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      id="education"
    >
      {/* Section Heading */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4 relative inline-block">
          Education
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-1 bg-black dark:bg-white rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ originX: 0 }}
          />
        </h2>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="flex flex-col space-y-8 relative pl-12 sm:pl-16">
        {/* Animated Vertical Line */}
        <motion.div
          className="w-1 absolute left-6 sm:left-8 top-0 bottom-0 bg-card-foreground z-0 rounded-full"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ originY: 0 }}
        />

        {/* Education Items */}
        {educationItems.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={item}
            custom={index}
            className="relative z-10 flex items-start"
          >
            {/* Logo with animations */}
            <motion.div
              className="absolute left-6 sm:left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              whileHover={logoHover}
              animate={pulse}
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-card-foreground w-12 h-12 bg-muted-background dark:bg-foreground">
                <Image
                  width={48}
                  height={48}
                  alt={edu.alt}
                  src={edu.logo}
                  className="object-cover"
                  priority={index === 0}
                />
              </span>
            </motion.div>

            {/* Animated Card */}
            <Link
              href={edu.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer w-full"
            >
              <motion.div
                className="ml-20 sm:ml-24 rounded-xl bg-card text-card-foreground p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-4 border-border flex flex-col sm:flex-row justify-between gap-4"
                whileHover={cardHover}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base mb-1">
                    {edu.institution}
                  </h3>
                  <motion.p 
                    className="text-xs sm:text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {edu.degree}
                  </motion.p>
                </div>
                
                <div className="flex flex-col items-end">
                  <motion.div 
                    className="text-right text-sm sm:text-base font-medium text-primary mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {edu.grade}
                  </motion.div>
                  <motion.div 
                    className="text-xs sm:text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {edu.period}
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;