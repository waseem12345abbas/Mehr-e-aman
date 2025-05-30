import React, { useState } from 'react'

const LiveLocationMap = () => {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [error, setError] = useState(null)

  const handleShowLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setError(null)
      },
      (err) => {
        console.error(err)
        setError('Unable to retrieve your location.')
      }
    )
  }

  const mapSrc = lat && lng
    ? `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`
    : 'https://maps.google.com/maps?q=apple%20park&z=13&output=embed' // default map

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Live Location Viewer</h2>

      <button
        onClick={handleShowLocation}
        className="bg-[#FF3B3F] text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
      >
        Show My Location
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      <div className="mt-6">
        <iframe
          className="w-full h-[400px] rounded-lg shadow-md"
          src={mapSrc}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  )
}

export default LiveLocationMap
