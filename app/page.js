import React from "react";
import Background from "@/components/Background";
import FloatingBar from "@/components/FloatingBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import { NotificationProvider } from "@/context/NotificationContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Experience from "../components/Experience";
import EndCard from "@/components/endcard" 

export default function Home() {
  return (
    <ThemeProvider>
      <Background>
        <NotificationProvider>
          <Header />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <ContactMe />
          <FloatingBar />
          <EndCard />
        </NotificationProvider>
      </Background>
    </ThemeProvider>
  );
}
