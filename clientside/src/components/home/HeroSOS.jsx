import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[100vh] flex items-center justify-center px-4"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center max-w-4xl text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Save Yourself, Stay Empowered
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
        >
          A platform dedicated to empowering women with tools, awareness, and
          real-time help to stay safe in every situation. You are not alone.
        </motion.p>

        {/* Read-only Awareness Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-left text-sm md:text-base"
           style={{
           backgroundImage:
          "url('/images/bg7.png') ",
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center'
           }}
        >
          <h3 className="text-lg font-semibold text-pink-300 mb-3">
            Did You Know?
          </h3>
          <ul className="space-y-2 text-white">
            <li>
              🚨 Every 3 minutes, a woman faces violence somewhere in the world.
            </li>
            <li>📍 Sharing live location can reduce risk during travel.</li>
            <li>
              💬 Speaking up and awareness is the first step toward safety.
            </li>
            <li>🛡️ Self-defense knowledge boosts confidence and protection.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
