import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react"; // Importing icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle Theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="bg-[#02343F] text-[#F0EDCC]">
      <nav className="container px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="text-text-light dark:text-text-dark text-xl font-bold"
          >
            Javad Naqvi
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center space-x-8">
            {["Home", "Resume", "Services", "Portfolio", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  {item}
                </a>
              )
            )}
            {/* Theme Toggle Button */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md border-none outline-none"
              whileTap={{ scale: 0.8 }}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text-light dark:text-text-dark p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden mt-4 space-y-2 bg-background-light dark:bg-background-dark p-4 rounded-md`}
        >
          {["Home", "Resume", "Services", "Portfolio", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-text-light dark:text-text-dark hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-md transition"
              >
                {item}
              </a>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
