import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-green-800">Daría Snigur</h1>

          <nav className="hidden sm:flex space-x-8 text-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="font-bold text-green-900 hover:text-green-600"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="font-bold text-green-900 hover:text-green-600"
            >
              About
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="font-bold text-green-900 hover:text-green-600"
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="font-bold text-green-900 hover:text-green-600"
            >
              Contact
            </Link>
          </nav>

          {!menuOpen && (
            <button
              className="sm:hidden absolute right-4 text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>

        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="py-5 fixed top-0 left-0 w-3/4 h-full bg-white bg-opacity-80 backdrop-blur-sm shadow-lg z-50 flex flex-col items-center justify-center space-y-6"
          >
            <button
              className="absolute top-4 right-4 text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="flex flex-col items-center space-y-12 mb-16 sm:mb-0">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-green-600 text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-green-600 text-xl"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="training"
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-green-600 text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Training
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-green-600 text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
}
