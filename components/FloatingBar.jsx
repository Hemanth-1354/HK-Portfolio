import React from "react";
import Github from "./icons/Github";
import Home from "./icons/Home";
import LinkedIn from "./icons/LinkedIn";
import Telegram from "./icons/Telegram";
import Whatsapp from "./icons/Whatsapp";
import ToggleThemeBtn from "./ToggleThemeBtn";
import Link from "next/link";
import { FileText, Briefcase, GraduationCap, Mail } from "lucide-react";

const FloatingBar = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 md:top-4 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {/* Home */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="Home"
            href="/"
            title="Home"
          >
            <Home />
          </Link>
        </div>

        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
        ></div>

        {/* Projects */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="Projects"
            href="/#projects"
            title="Projects"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h6v6H3z" />
              <path d="M15 3h6v6h-6z" />
              <path d="M3 15h6v6H3z" />
              <path d="M15 15h6v6h-6z" />
            </svg>
          </Link>
        </div>

        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
        ></div>

        {/* Experience */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="Experience"
            href="/#experience"
            title="Experience"
          >
            <Briefcase className="w-5 h-5" />
          </Link>
        </div>

        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
        ></div>

        {/* Education */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="Education"
            href="/#education"
            title="Education"
          >
            <GraduationCap className="w-5 h-5" />
          </Link>
        </div>

        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
        ></div>

        {/* Resume */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="Resume"
            href="https://drive.google.com/file/d/YOUR_RESUME_ID/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            title = "Resume"
          >
            <FileText className="w-5 h-5" />
          </Link>
        </div>

        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
        ></div>

        {/* Contact */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="Contact"
            href="/#contact"
            title="Contact"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
        ></div>

        {/* GitHub */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="GitHub"
            href="https://github.com/Hemanth-1354"
            target="_blank"
            title="GitHub"
          >
            <Github />
          </Link>
        </div>

        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
        ></div>

        {/* LinkedIn */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/hemanth-kumar-polisetti-150a012a1/"
            target="_blank"
            title = "LinkedIn"
          >
            <LinkedIn />
          </Link>
        </div>

        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 bg-border w-[1px] h-full"
        ></div>

        {/* Theme Toggle */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full w-[40px]">
          <ToggleThemeBtn />
        </div>
      </div>
    </div>
  );
};

export default FloatingBar;