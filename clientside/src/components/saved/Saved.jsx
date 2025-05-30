import React from 'react';
import { dummyIncidents } from './savedData';
import { motion } from 'framer-motion';

const Incidents = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] px-4 md:px-10 py-10 text-[#2C2C2C]">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-[#FF3B3F] mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Saved Incidents
        </motion.h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dummyIncidents.map((incident, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
                <img
                  src={incident.theWoman}
                  alt={incident.womanName}
                  layout="fill"
                  objectFit="cover"
                  className='transition-transform duration-500 hover:scale-120'
                />
              </div>

              <h2 className="text-xl font-semibold text-[#FF3B3F] mb-1">
                {incident.incidentName}
              </h2>

              <p className="text-sm text-gray-500 mb-2">{incident.date} – {incident.incidentCity}</p>

              <p className="text-gray-700 flex-1">{incident.theIncident}</p>

              <p className="mt-4 text-sm text-gray-600 font-medium">
                Reported by: <span className="text-[#2C2C2C]">{incident.womanName}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incidents;
