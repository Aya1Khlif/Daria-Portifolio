import { motion } from "framer-motion";
import daria from "../../assets/img/3-removebg-preview.png";
import "./about.css";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-yellow-700 via-green-100 to-yellow-700"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16 mx-auto"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 mb-8 lg:mb-0 relative"
          >
            <img
              src={daria}
              alt="Daria Snigur"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full border-4 border-green-700 rounded-lg"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 pl-0 lg:pl-12 space-y-6 text-lg text-gray-700"
          >
            <h2 className="text-4xl font-bold text-start text-green-700 bg-gradient-to-r from-green-700 to-yellow-500 bg-clip-text text-transparent mb-8">
              About Me
            </h2>
            <p>
              Born in{" "}
              <span className="font-semibold text-green-800">
                Kyiv, Ukraine
              </span>{" "}
              in 2002, I started playing tennis at the age of six under my
              father's guidance.
            </p>
            <p>
              My breakthrough came in 2019 when I won the{" "}
              <span className="font-semibold text-green-800">
                Wimbledon junior title
              </span>
              , marking the beginning of my professional career.
            </p>
            <p>
              Notable achievements include reaching{" "}
              <span className="font-semibold text-green-800">
                World No. 103
              </span>{" "}
              and defeating World No. 1{" "}
              <span className="font-semibold text-green-800">Ash Barty</span> at
              the US Open in 2021.
            </p>
            <p>
              Currently training between Kyiv and European tennis academies,
              focusing on improving my game and climbing the{" "}
              <span className="font-semibold text-green-800">WTA rankings</span>
              .
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-6 flex items-center space-x-4"
            >
              <a
                href="#achievements"
                className="flex items-center justify-center px-6 py-3 bg-green-700 text-white font-bold rounded-full shadow-lg hover:bg-green-800 transition-all"
              >
                <span className="mr-2">🏆</span> View Achievements
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
