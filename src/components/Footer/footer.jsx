export default function Footer() {
    return (
      <footer className="text-black bg-gray-200 font-bold py-8">
        <div className="container mx-auto px-8 sm:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between text-xl">
            {/* Logo and Text */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Daria Snigur</h2>
              <p className="text-sm mt-2">Inspiring Excellence On and Off the Court</p>
            </div>
  
            {/* Navigation Links */}
            <nav className="mb-6 md:mb-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#training" className="hover:underline">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="hover:underline">
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
  
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:text-blue-600 transition-all"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:text-sky-400 transition-all"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:text-pink-600 transition-all"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
  
          {/* Bottom Text */}
          <div className="mt-6 text-center text-sm">
            <p>&copy; 2024 Daria Snigur. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  