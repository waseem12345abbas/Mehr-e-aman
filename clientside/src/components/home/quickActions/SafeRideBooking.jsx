import { useState, useEffect } from 'react';
import { FaTaxi } from 'react-icons/fa';

const SafeRideBooking = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  // Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => console.warn('Location error:', err),
      { enableHighAccuracy: true }
    );
  }, []);

  // Generate ride service URLs with optional location data
  const getUberLink = () => {
    const { latitude, longitude } = location;
    return `https://m.uber.com/ul/?action=setPickup&pickup[latitude]=${latitude}&pickup[longitude]=${longitude}`;
  };

  const getOlaLink = () => `https://book.olacabs.com/`;

  const getRapidoLink = () => `https://rapido.bike/`;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full mx-auto text-center">
      <h2 className="text-2xl font-bold text-[#FF3B3F] mb-4 flex justify-center items-center gap-2">
        <FaTaxi className="text-3xl" />
        Safe Ride Booking
      </h2>

      <p className="text-gray-700 mb-6">
        Choose a trusted ride service to reach your destination safely.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href={getUberLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#000000] text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Book Uber
        </a>
        <a
          href={getOlaLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FDD835] text-black py-3 rounded-lg hover:opacity-90 transition"
        >
          Book Ola
        </a>
        <a
          href={getRapidoLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFCC00] text-black py-3 rounded-lg hover:opacity-90 transition"
        >
          Book Rapido
        </a>
      </div>
    </div>
  );
};

export default SafeRideBooking;
