import { useState } from "react";

export default function LiveLocation() {
  const [lat, setLat]=useState(null)
  const [lng, setLng]=useState(null)
  const [error, setError]=useState(null)


  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setError(null)
      },
      (err) => {
        setError(`Error: ${err.message}`);
      }
    );
  };

  // after getting the user latitude and longitude we can set it on google map
  const mapSrc= lat && lng ?
  `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`
  :'https://maps.google.com/maps?q=apple%20park&z=13&output=embed';
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl border border-[#FF3B3F]">
      <h2 className="text-xl font-bold mb-4 text-[#2C2C2C]">Share Live Location</h2>
      <button
        onClick={getLocation}
        className="w-full bg-[#FF3B3F] hover:bg-[#e63438] text-white py-3 rounded-lg transition"
      >
        Location
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <div className="mt-6">
        <iframe
        className="w-full h-[400px] rounded-lg shadow-md" 
        src={mapSrc}
        allowFullScreen
        loading="lazy"
        title="Google map"
        ></iframe>
      </div>
    </div>
  );
}
