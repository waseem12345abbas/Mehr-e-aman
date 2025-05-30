import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { toast } from 'react-toastify'; // optional for alerts

const SafetyAlertButton = () => {
  const [loading, setLoading] = useState(false);

  const sendAlert = async () => {
    setLoading(true);

    try {
      const session = await account.get();
      const userId = session.$id;

      // Get user location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Save alert in Appwrite
          await databases.createDocument(
            'YOUR_DATABASE_ID',
            'alerts', // collection: alerts
            ID.unique(),
            {
              userId,
              latitude,
              longitude,
              timestamp: new Date().toISOString(),
              message: 'User triggered safety alert!',
            }
          );

          toast.success('🚨 Safety Alert Sent!');
        },
        (error) => {
          console.error('Location error:', error);
          toast.error('Failed to get location');
        }
      );
    } catch (err) {
      console.error('Error sending alert:', err);
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={sendAlert}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 bg-[#FF3B3F] hover:bg-[#e7353a] text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
    >
      <FaBell className="text-2xl" />
      {loading ? 'Sending Alert...' : 'Send Safety Alert'}
    </button>
  );
};

export default SafetyAlertButton;
