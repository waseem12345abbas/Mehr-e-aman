import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaPhoneAlt, FaLock, FaUsers, FaWalking } from "react-icons/fa";

const tips = [
  {
    title: "Share Your Live Location",
    icon: <FaMapMarkedAlt className="text-pink-600 text-2xl" />,
    description: "Always let a trusted contact know your location when traveling alone.",
  },
  {
    title: "Keep Emergency Numbers Handy",
    icon: <FaPhoneAlt className="text-red-600 text-2xl" />,
    description: "Save local emergency contacts like 112, 100, 1091 in speed dial.",
  },
  {
    title: "Lock Doors Securely",
    icon: <FaLock className="text-yellow-600 text-2xl" />,
    description: "Always lock your doors when at home or in public transport.",
  },
  {
    title: "Avoid Dark & Isolated Areas",
    icon: <FaWalking className="text-indigo-600 text-2xl" />,
    description: "Stay in well-lit, crowded places especially at night.",
  },
  {
    title: "Trust Your Instincts",
    icon: <FaUsers className="text-green-600 text-2xl" />,
    description: "If something feels off, seek help or move away immediately.",
  },
];

// animation variant for each card
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function SafetyTips() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#2C2C2C]"
      >
        Safety Tips for You
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border-l-4 border-[#FF3B3F] rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-3 bg-gray-100 rounded-full">{tip.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-[#2C2C2C] mb-1">
                {tip.title}
              </h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
