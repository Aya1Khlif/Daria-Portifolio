import { motion } from "framer-motion";
import { FaDumbbell, FaTableTennis, FaBrain } from "react-icons/fa";

const Training = () => {
  const programs = [
    {
      title: "Physical Training",
      details: "6 hours daily intensive training including cardio and strength",
      icon: <FaDumbbell />,
    },
    {
      title: "Technical Practice",
      details: "Focus on serve accuracy and baseline consistency",
      icon: <FaTableTennis />,
    },
    {
      title: "Mental Preparation",
      details: "Regular sports psychology sessions and meditation",
      icon: <FaBrain />,
    },
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-r from-yellow-50 to-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Training Program
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform"
            >
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-yellow-500 bg-green-100 rounded-full mb-4 mx-auto">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-4 text-center">
                {program.title}
              </h3>
              <p className="text-gray-700 text-center">{program.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
