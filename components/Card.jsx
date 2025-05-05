'use client';
import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Card = ({
  title,
  time,
  thumbnailSrc,
  website,
  github,
  frameworks,
  description,
  isExpanded,
  onToggleExpand,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={`/images/projects/${thumbnailSrc}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{time}</span>
        </div>

        {/* Frameworks/Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {frameworks.slice(0, 3).map((framework, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300"
            >
              {framework}
            </span>
          ))}
          {frameworks.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300">
              +{frameworks.length - 3}
            </span>
          )}
        </div>

        {/* Project Description */}
        <div className={`mb-4 text-gray-600 dark:text-gray-300 ${isExpanded ? "" : "line-clamp-3"}`}>
          {description.split("*").map((text, i) => (
            <span key={i} className={i % 2 === 1 ? "font-semibold" : ""}>
              {text}
            </span>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={onToggleExpand}
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4 self-start"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>

        {/* Project Links */}
        <div className="mt-auto flex items-center gap-4">
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FiGithub className="w-5 h-5" />
            <span className="text-sm">Code</span>
          </a>
          {website && (
            <a
              href={website === "#" ? "#" : website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiExternalLink className="w-5 h-5" />
              <span className="text-sm">Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;