import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaShieldAlt, FaHospital, FaGavel, FaInfoCircle } from "react-icons/fa";

const getDummyRiskLevel = () => {
  const random = Math.random();
  if (random < 0.3) return "Unsafe";
  if (random < 0.6) return "Caution";
  return "Safe";
};

const getRiskColor = (level) => {
  switch (level) {
    case "Safe":
      return "text-green-600 bg-green-100";
    case "Caution":
      return "text-yellow-600 bg-yellow-100";
    case "Unsafe":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

export default function SafetyStatus() {
  const [location, setLocation] = useState("Locating...");
  const [riskLevel, setRiskLevel] = useState("Safe");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation(`Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`);
        setRiskLevel(getDummyRiskLevel());
      },
      () => {
        setLocation("Location unavailable");
        setRiskLevel("Caution");
      }
    );
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] text-center">
          Your Current Safety Status
        </h2>

        {/* Location + Status */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-xl text-[#FF3B3F]" />
            <div>
              <p className="text-sm">Current Location</p>
              <p className="font-semibold">{location}</p>
            </div>
          </div>

          <div
            className={`flex items-center gap-3 px-4 py-2 rounded-full ${getRiskColor(
              riskLevel
            )}`}
          >
            <FaShieldAlt />
            <span className="font-semibold">{riskLevel} Area</span>
          </div>
        </div>

        {/* Nearby Support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
          <div className="bg-pink-50 p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <FaGavel className="text-2xl text-[#FF3B3F]" />
            <div>
              <h3 className="font-bold text-base">Nearest Police Station</h3>
              <p>1.2 km away – Active 24/7</p>
            </div>
          </div>

          <div className="bg-violet-50 p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <FaHospital className="text-2xl text-[#FF3B3F]" />
            <div>
              <h3 className="font-bold text-base">Nearest Hospital</h3>
              <p>2.5 km away – Emergency Support</p>
            </div>
          </div>
        </div>

        {/* Community Alerts */}
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm mt-4">
          <h3 className="font-semibold text-yellow-800 mb-2">Community Alert</h3>
          <p className="text-sm text-yellow-700">
            A minor disturbance was reported near Green Park area yesterday at 8:30 PM. Stay alert.
          </p>
        </div>

        {/* Uplifting Tip */}
        <div className="bg-green-50 p-4 rounded-xl shadow-sm flex items-center gap-3 mt-2">
          <FaInfoCircle className="text-green-600 text-xl" />
          <p className="text-sm text-green-700">
            Tip: Always share your live location when commuting at night. You are strong, and help is always one tap away.
          </p>
        </div>
      </div>
    </div>
  );
}
