import { motion } from "framer-motion";
import ball from "../../assets/img/ball.png";
import banner from "../../assets/img/banner-removebg-preview.png";
import daria from "../../assets/img/Daria_Snigur.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <section id="home" className="banner flex items-center text-center">
      <div className="container mx-auto z-10 px-8 sm:px-12 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="text-left max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" text-4xl w-full font-bold mt-7 text-green-700 bg-gradient-to-br from-green-700 via-yellow-500 to-orange-500 bg-clip-text text-transparent"
          >
            Welcome to Daria Snigur's Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-xl sm:text-2xl mt-4 font-bold text-gray-800 "
          >
            <span className="text-green-900 font-bold">Daria Snigur</span>
            is a professional tennis player dedicated to excellence, innovation,
            and sportsmanship. From stunning performances on the court to
            inspiring others through her journey, Daria continues to redefine
            the game with passion and determination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6"
          >
            <a
              href="#achievements"
              className="px-6 py-3 bg-green-700 text-white font-bold rounded-full shadow-lg hover:bg-green-800 transition-all"
            >
              Explore Achievements
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center justify-center w-full sm:w-96 h-80 sm:h-96 lg:ml-10 mt-10 lg:mt-0">
          <div
            className="absolute z-10 w-[180px] sm:w-[200px] h-[22em] sm:h-[23.9em] bg-yellow-500 hidden md:block"
            style={{
              left: "69%",
              clipPath: "polygon(0 0, 60% 0, 60% 100%, 0 100%)",
            }}
          ></div>

          <div
            className="absolute w-full h-[22em] sm:h-[23.9em] bg-yellow-500 hidden md:block"
            style={{
              clipPath: "circle(50% at 65% 50%)",
            }}
          ></div>

          <img
            src={banner}
            alt="Daria Snigur"
            className="absolute z-10 w-full sm:w-[90%] h-full sm:h-[90%] object-cover rounded-full hidden md:block"
            style={{
              left: "20%",
              top: "10%",
            }}
          />
          <img
            src={daria}
            alt="Daria Snigur"
            className="absolute z-10 w-[50%] h-[50%] object-cover rounded-full md:hidden"
            style={{
              left: "20%",
              top: "10%",
            }}
          />
        </div>

        {/* Decorative Tennis Balls */}
        <img
          src={ball}
          alt="Tennis Ball"
          className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-12 sm:w-16 h-12 sm:h-16 opacity-80"
        />
        <img
          src={ball}
          alt="Tennis Ball"
          className="absolute top-10 right-10 sm:top-20 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 opacity-50"
        />
      </div>
    </section>
  );
};

export default Banner;
