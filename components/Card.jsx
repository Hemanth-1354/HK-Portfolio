import React from "react";

const Card = ({
  title,
  time,
  status,
  thumbnailSrc,
  thumbnailLightSrc,
  website,
  github,
  frameworks,
  description,
  isExpanded = false,
  onToggleExpand
}) => {
  const statusColors = {
    "Completed": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    "Beta Release": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    "Maintained": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    "Archived": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    "Planned": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
    "Experimental": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    "On Hold": "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-gray-200 dark:border-gray-700 ${
      isExpanded ? "lg:flex-row" : ""
    }`}>
      {/* Thumbnail */}
      <div className={`relative ${isExpanded ? "lg:w-1/3" : "w-full"}`}>
        <img
          src={thumbnailSrc}
          alt={title}
          className="w-full h-48 object-cover dark:hidden"
        />
        <img
          src={thumbnailLightSrc || thumbnailSrc}
          alt={title}
          className="w-full h-48 object-cover hidden dark:block"
        />
        <div className="absolute top-2 right-2">
          <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status] || "bg-gray-100"}`}>
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 flex-1 flex flex-col ${isExpanded ? "lg:w-2/3" : ""}`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{time}</span>
        </div>

        {/* Frameworks */}
        <div className="flex flex-wrap gap-1 mb-3">
          {frameworks.slice(0, isExpanded ? frameworks.length : 5).map((framework, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300"
            >
              {framework}
            </span>
          ))}
          {!isExpanded && frameworks.length > 5 && (
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300">
              +{frameworks.length - 5}
            </span>
          )}
        </div>

        {/* Description */}
        <div className={`mb-4 text-gray-700 dark:text-gray-300 ${
          isExpanded ? "" : "line-clamp-3"
        }`} dangerouslySetInnerHTML={{
          __html: description.replace(/\*(.*?)\*/g, '<span class="font-semibold">$1</span>')
        }} />

        {/* Buttons */}
        <div className="mt-auto flex flex-wrap gap-2">
          {github && (
            <a
              href={`https://github.com/Hemanth-1354/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
          {website && (
            <a
              href={website.startsWith("http") ? website : `https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 17l-4-4 1.4-1.4 2.6 2.6 7.6-7.6 1.4 1.4-9 9z"/>
              </svg>
              Live
            </a>
          )}
          <button
            onClick={onToggleExpand}
            className="px-3 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors ml-auto"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;