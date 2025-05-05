'use client';
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(12);
  const [sortOrder, setSortOrder] = useState("newest");
  const [expandedCards, setExpandedCards] = useState({});

const projects = [
    {
      title: "AI Stock Portfolio Optimizer",
      thumbnailSrc: "stock-optimizer.jpg",
      github: "stock-portfolio-optimizer",
      category: "ai",
      frameworks: [
        "Python",
        "Pandas",
        "AlphaVantage API",
        "Quantitative Finance",
        "Machine Learning",
        "Efficient Frontier",
        "Bollinger Bands",
        "Sharpe Ratio"
      ],
      description:
        "*AI Stock Portfolio Optimizer* 📈 is a *data-driven investment tool* that analyzes TSLA, AAPL, NVDA +3 stocks vs S&P 500, optimizing *10K+ portfolios* via *Efficient Frontier* (achieving *18% better returns*). Features *dynamic Bollinger Band strategies*, comprehensive *risk metrics* (Sharpe Ratio/Volatility), and *correlation heatmaps*. Combines *quantitative finance* with *ML* for smarter investing decisions. Demonstrates advanced *data analysis* and *financial modeling* skills. 🚀"
    },
    {
      title: "Django Authentication API (JWT)",
      thumbnailSrc: "django-auth.jpg",
      github: "django-jwt-auth",
      category: "fullstack",
      frameworks: [
        "Django",
        "Python",
        "JWT",
        "REST API",
        "Authentication",
        "Password Hashing",
        "Email Verification",
        "Role-Based Access"
      ],
      description:
        "*Secure, scalable authentication system* 🔐 built with *Django* 🐍 and *JWT* (JSON Web Tokens). Handles *user registration*, *login*, *token-based authentication*, and *password reset* 🎯 with robust security features like *password hashing*, *token expiration*, *refresh tokens*, and *email verification* 📧. Includes *role-based access control* 👥 and integrates *Django REST Framework* 🛠️ for seamless API development. Perfect for modern web apps needing a *production-ready authentication backend*! 🚀"
    },
    {
      title: "Online Share Trading Simulator",
      time: "Apr 2024",
      status: "Completed",
      thumbnailSrc: "trading-simulator.jpg",
      videoSrc: "#", // Remove live option
      website: "#", // Remove live option
      github: "stock-trading-simulator",
      category: "fullstack",
      frameworks: [
        "Python",
        "Django",
        "AlphaVantage API",
        "Virtual Wallet",
        "Portfolio Tracking",
        "Market Data",
        "Financial Analysis"
      ],
      description:
        "*Dynamic, risk-free platform* 💹 to practice stock trading using *real-time market data* 📊. Features *virtual wallet* 💰, *live portfolio tracking* 📈, *buy/sell transactions*, *transaction history*, and *performance analytics*. Stock data fetched via *Alpha Vantage API* 📡. Demonstrates *full-stack financial app development* skills with complex *data processing* and *user portfolio management*. A practical tool for understanding *market dynamics*! 🚀"
    },
    {
      title: "News Aggregator with AI Summarization",
      time: "Mar 2024",
      status: "Completed",
      thumbnailSrc: "news-aggregator.jpg",
      videoSrc: "https://example.com/news-aggregator", // Keep live option
      website: "https://example.com/news-aggregator", // Keep live option
      github: "ai-news-aggregator",
      category: "ai",
      frameworks: [
        "Django",
        "Python",
        "OpenAI GPT",
        "NLP",
        "Sentiment Analysis",
        "Web Scraping",
        "News API"
      ],
      description:
        "*Django-powered* 🐍 web application that fetches and displays news articles with *AI-enhanced features*. Each article is *summarized using OpenAI's GPT* 🤖 and analyzed for *sentiment using NLP* 🧠. Users explore headlines, read full articles, and view *AI-generated summaries* with sentiment tags (Positive/Neutral/Negative). Blends *full-stack development* with *AI and NLP* for smarter news consumption. Demonstrates *API integration* and *natural language processing* capabilities. 🚀"
    },
    {
      title: "Music Player Web App",
      time: "Feb 2024",
      status: "Completed",
      thumbnailSrc: "music-player.jpg",
      videoSrc: "#", // Remove live option
      website: "#", // Remove live option
      github: "django-music-player",
      category: "fullstack",
      frameworks: [
        "Django",
        "Python",
        "HTML5 Audio",
        "MediaElement.js",
        "CSS",
        "UI/UX Design",
        "Pagination"
      ],
      description:
        "*Elegant, single-song-per-page* 🎧 music streaming app built with Django. Features *artist info*, *song title*, *album art*, and *audio playback*. Users navigate between tracks using *pagination controls* ⏮️⏭️. Frontend styled with *custom CSS* and enhanced using *MediaElement.js* for responsive, cross-browser *HTML5 audio player* 🎵. Demonstrates *media integration*, *pagination*, and *UI/UX design* with Django templating and static asset management. Clean, minimalist interface focused on music discovery. 🚀"
    },
    {
      title: "Heart Disease Predictor App",
      time: "Jan 2024",
      status: "Completed",
      thumbnailSrc: "heart-disease.jpg",
      videoSrc: "#", // Remove live option
      website: "#", // Remove live option
      github: "heart-disease-predictor",
      category: "ai",
      frameworks: [
        "Flask",
        "Python",
        "XGBoost",
        "Machine Learning",
        "UCI Dataset",
        "Health Tech",
        "Probability Prediction"
      ],
      description:
        "*Flask-based machine learning* web app that predicts *cardiovascular disease risk* 🫀 using user health inputs (age, cholesterol, blood pressure etc.). Powered by *XGBoost Classifier*, it preprocesses *real-world UCI heart disease data* with imputation, scaling, and feature transformation 🧪. Users input values through a form, and the app returns a *probabilistic diagnosis* 🎯. Showcases *ML deployment*, *data cleaning*, and *user interaction design* via dynamic HTML. Combines *healthcare* with *predictive analytics*. 💻🚑"
    },
    {
      title: "Basic RAG Bot with Web-Based Loader",
      time: "Dec 2023",
      status: "Completed",
      thumbnailSrc: "rag-bot.jpg",
      videoSrc: "#", // Remove live option
      website: "#", // Remove live option
      github: "rag-bot-ipl",
      category: "ai",
      frameworks: [
        "Langchain",
        "Python",
        "Cohere",
        "Chroma",
        "NLP",
        "Web Scraping",
        "Question Answering"
      ],
      description:
        "*Simple Retrieval Augmented Generation (RAG) bot* 🤖 that loads *IPL 2020 and 2023 data* using Langchain's WebBaseLoader. Processes documents into *embeddings* using Cohere and Chroma. Answers questions like 'Who won IPL 2020?' by fetching relevant information 🏏. Demonstrates *real-time data retrieval* and *natural language understanding*. Ideal for exploring *LLM applications* and *information extraction* from web sources. 🚀"
    },
    {
      title: "Movie Recommender System",
      time: "Nov 2023",
      status: "Completed",
      thumbnailSrc: "movie-recommender.jpg",
      videoSrc: "https://example.com/movie-recommender", // Keep live option
      website: "https://example.com/movie-recommender", // Keep live option
      github: "movie-recommender",
      category: "ai",
      frameworks: [
        "Python",
        "sklearn",
        "NLP",
        "Cosine Similarity",
        "TMDB Dataset",
        "Content-Based Filtering",
        "Pickle"
      ],
      description:
        "*Content-based movie recommendation engine* 🎬 powered by *NLP and cosine similarity*! Processes movie data (genres, cast, keywords) to suggest *similar movies* 🍿. Uses *sklearn* for text vectorization and similarity calculations. Features *TMDB dataset* for comprehensive movie metadata. Demonstrates *content-based filtering* and *feature engineering* for personalized recommendations. Great example of *applied machine learning* for entertainment domain. 🌟🎥"
    },
    {
      title: "MNIST Digit Classification with CNN",
      time: "Oct 2023",
      status: "Completed",
      thumbnailSrc: "mnist-cnn.jpg",
      videoSrc: "#", // Remove live option
      website: "#", // Remove live option
      github: "mnist-cnn-classifier",
      category: "ai",
      frameworks: [
        "Keras",
        "TensorFlow",
        "CNN",
        "Deep Learning",
        "Computer Vision",
        "Matplotlib",
        "Image Classification"
      ],
      description:
        "*Convolutional Neural Network (CNN)* 🧠 built to classify *MNIST handwritten digits*. Uses three *convolutional layers* followed by dense layers for feature extraction and classification. Achieves *high accuracy* on the test set 📊. Includes *training/validation plots* and *sample predictions* for visual analysis 🔍. Demonstrates *image processing* and *deep learning* fundamentals with clean, reproducible code. Perfect introduction to *computer vision* with neural networks. 🤖"
    },
    {
      title: "Credit Scoring ML Model",
      time: "Sep 2023",
      status: "Completed",
      thumbnailSrc: "credit-scoring.jpg",
      videoSrc: "#", // Remove live option
      website: "#", // Remove live option
      github: "credit-risk-model",
      category: "ai",
      frameworks: [
        "Python",
        "pandas",
        "scikit-learn",
        "Random Forest",
        "Data Cleaning",
        "Feature Engineering",
        "Explainable AI"
      ],
      description:
        "*Machine learning pipeline* predicting *credit risk categories* (Good/Standard/Bad) using *Random Forest Classifier* 🌲. Processes *100k+ samples* with missing value imputation and categorical encoding. Achieved *89.2% accuracy* ⚡ with *explainable AI* revealing key predictors (Annual Income, Credit Utilization). Demonstrates *end-to-end ML workflow* from *data cleaning* to *model deployment*. Practical application of *predictive analytics* in *financial risk assessment*. 📊"
    },
    {
      title: "Omni Search: Multi-Source Content Aggregator",
      time: "Aug 2023",
      status: "Completed",
      thumbnailSrc: "omni-search.jpg",
      videoSrc: "#", // Remove live option
      website: "#", // Remove live option
      github: "multi-search-engine",
      category: "fullstack",
      frameworks: [
        "Flask",
        "Python",
        "YouTube API",
        "Google Custom Search",
        "Web Scraping",
        "Content Ranking",
        "Multi-Source Search"
      ],
      description:
        "*Flask web app* that searches across *multiple content sources*: YouTube, articles, papers, and blogs 🔍. Integrates *APIs* to fetch and rank results by views, likes, and relevance 📊. Users input queries and get *sorted results* for each content type. Demonstrates *API integration*, *data aggregation*, and *dynamic content presentation*. Useful for *research* and *information discovery* across platforms. 💻📚"
    },
    {
      title: "Typing Speed Test App",
      time: "Jul 2023",
      status: "Completed",
      thumbnailSrc: "typing-test.jpg",
      videoSrc: "#", // Remove live option
      website: "#", // Remove live option
      github: "typing-speed-test",
      category: "frontend",
      frameworks: [
        "Flask",
        "Python",
        "JavaScript",
        "WPM Calculation",
        "Accuracy Measurement",
        "Timed Tests",
        "User Feedback"
      ],
      description:
        "*Interactive typing speed test* ⌨️ that calculates *words per minute (WPM)* and *accuracy*. Displays sample text for users to type, then compares input to original ⏱️. Features *real-time feedback* and *performance metrics*. Built with *Flask* backend and *JavaScript* for dynamic interaction. Great for *improving typing skills* or demonstrating *simple web app development*. Clean UI with focus on *user experience*. 🚀"
    }
  ];

  // Toggle card expansion
  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Filter projects based on category and search term
  const filteredProjects = projects
    .filter((project) => {
      if (filter === "all") return true;
      return project.category === filter;
    })
    .filter((project) => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.frameworks.some((framework) =>
          framework.toLowerCase().includes(searchLower)
        )
      );
    });

  // No sorting needed as 'time' is removed
  const sortedProjects = [...filteredProjects];

  // Load more projects when scrolling to bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setVisibleProjects((prev) => Math.min(prev + 6, sortedProjects.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sortedProjects.length]);

  // Get all unique tech stacks for filter options
  const allFrameworks = [...new Set(projects.flatMap(project => project.frameworks))];

  return (
    <div className="flex flex-col items-center my-8 px-4 md:px-8 max-w-7xl mx-auto" id="projects">
      <div className="w-full text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter my-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent select-none">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl/relaxed max-w-3xl mx-auto mt-4">
          I build projects from 0 to 1, turning ideas into reality. Take a look at
          some of my favorite projects below.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="w-full flex flex-col md:flex-row gap-4 mb-8 sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-md">
        <div className="flex-1 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
            <button
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                filter === "fullstack"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setFilter("fullstack")}
            >
              Full Stack
            </button>
            <button
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                filter === "frontend"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setFilter("frontend")}
            >
              Frontend
            </button>
            <button
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                filter === "ai"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setFilter("ai")}
            >
              AI Projects
            </button>
            <button
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                filter === "tool"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setFilter("tool")}
            >
              Tools
            </button>
            <button
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                filter === "collection"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setFilter("collection")}
            >
              Collections
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm whitespace-nowrap">Sort by:</label>
          <select
            id="sort"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Project Statistics */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg shadow-sm text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{projects.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Total Projects</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg shadow-sm text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            {projects.filter(p => p.category === "fullstack").length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Full Stack</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg shadow-sm text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
            {projects.filter(p => p.category === "ai").length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">AI Projects</div>
        </div>
        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg shadow-sm text-center">
          <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
            {allFrameworks.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
        </div>
      </div>

      {/* Results Count */}
      <div className="w-full mb-4 text-gray-600 dark:text-gray-400">
        Showing {Math.min(visibleProjects, sortedProjects.length)} of {sortedProjects.length} projects
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
        {sortedProjects.slice(0, visibleProjects).map((project, index) => (
          <div 
            key={index} 
            className={`transform transition-all duration-300 hover:-translate-y-2 ${
              expandedCards[index] ? "lg:col-span-2 xl:col-span-1" : ""
            }`}
          >
            <Card
              title={project.title}
              thumbnailSrc={project.thumbnailSrc}
              github={project.github}
              frameworks={project.frameworks}
              description={project.description}
              isExpanded={expandedCards[index]}
              onToggleExpand={() => toggleExpand(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;