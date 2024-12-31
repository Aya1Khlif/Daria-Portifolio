import { motion } from "framer-motion";
import './achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "2019 Wimbledon Junior Title",
      description: "Won the Girls' Singles title at Wimbledon in 2019, establishing myself as a rising star in tennis.",
      icon: "🏆",
    },
    {
      title: "Victory over Simona Halep at the 2022 US Open",
      description:
        "Achieved a remarkable victory against World No. 7 Simona Halep in the first round of the 2022 US Open.",
      icon: "🎾",
    },
    {
      title: "Highest Career Ranking: 105",
      description: "Reached a career-high ranking of 105 in the WTA on November 14, 2022.",
      icon: "📈",
    },
    {
      title: "Win Against Beatriz Haddad Maia in Nottingham 2023",
      description: "Defeated World No. 10 Beatriz Haddad Maia in the first round of the Nottingham Open in 2023.",
      icon: "🥇",
    },
    {
      title: "10 ITF Titles",
      description: "Claimed 10 titles in ITF tournaments, contributing to my professional growth.",
      icon: "🏅",
    },
    {
      title: "Participation in Grand Slam Events",
      description: "Competed in all four Grand Slam tournaments, with a career-best performance reaching the second round at Wimbledon 2024.",
      icon: "🌍",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50 font-bold">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-8">My Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="achievement-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl border border-gray-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-700 rounded-full mx-auto mb-4 text-3xl">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  {achievement.title}
                </h3>
                <p className="text-gray-700">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
