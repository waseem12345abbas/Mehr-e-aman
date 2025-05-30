import { FaPhoneAlt, FaMapMarkerAlt, FaBell, FaShieldAlt, FaTaxi, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Fake Call",
    icon: <FaPhoneAlt className="text-3xl text-pink-500" />,
    desc: "Trigger a fake call to escape unsafe situations or alert those nearby discreetly.",
  },
  {
    title: "Live Location Sharing",
    icon: <FaMapMarkerAlt className="text-3xl text-pink-500" />,
    desc: "Share your live location with trusted contacts in real-time for extra security.",
  },
  {
    title: "Emergency Alert",
    icon: <FaBell className="text-3xl text-pink-500" />,
    desc: "Send instant alerts with location and status to emergency contacts with one tap.",
  },
  {
    title: "Safe Ride Booking",
    icon: <FaTaxi className="text-3xl text-pink-500" />,
    desc: "Book safe rides from trusted services with real-time ride tracking and sharing.",
  },
  {
    title: "Self-Defense Guide",
    icon: <FaBookOpen className="text-3xl text-pink-500" />,
    desc: "Access a library of self-defense videos, tips, and real-life case examples anytime.",
  },
  {
    title: "Shield Mode",
    icon: <FaShieldAlt className="text-3xl text-pink-500" />,
    desc: "Activate Shield Mode to auto-record audio/video & share location on threat detection.",
  },
];

const Features = () => {
  return (
    <div className="py-16 px-4 md:px-12 bg-gradient-to-br from-[#fff1f1] to-[#ffe9e9] mt-12">
         {/* logo image */}
           <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-[#2C2C2C] mb-6"
      >
        Mehr-e-Aman
      </motion.h2>
         <div className="flex justify-center my-12">
            <img src="/images/mehreaman.png" alt="feature image" className="rounded-lg"/>
         </div>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-[#2C2C2C] mb-6"
      >
        App Features Designed for Your Safety
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-base md:text-lg"
      >
        Our app combines powerful features with simplicity and elegance to keep you safe,
        informed, and connected — wherever you go.
      </motion.p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-center text-[#FF3B3F] mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
