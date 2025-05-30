import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/profile",{
      headers: {
        Authorization: `Bearer ${token.trim()}` // trim() removes any whitespace
      },
      withCredentials: true // Important for cookies/CORS
    });
      if (response.data.success) {
        setUserData(response.data.data);
      } else {
        console.error("Error while fetching data");
      }
    } catch (error) {
      console.error("Server error while fetching data");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#0f0f0f] flex items-center justify-center px-4 py-12 mt-16">
      <div className="bg-white/10 backdrop-blur-2xl text-white shadow-2xl rounded-3xl w-full max-w-3xl overflow-hidden border border-white/20">
        {/* Banner Image */}
        <div className="w-full h-56 md:h-64 relative">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
            alt="Nature Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Profile Details */}
        <div className="p-6 md:p-10 space-y-6 relative z-10">
          {userData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div>
                <h2 className="text-lg font-semibold text-[#FF6B00]">Name</h2>
                <p className="text-white/90">{userData.name}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#FF6B00]">Email</h2>
                <p className="text-white/90">{userData.email}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#FF6B00]">Phone</h2>
                <p className="text-white/90">{userData.phone}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#FF6B00]">
                  Address
                </h2>
                <p className="text-white/90">{userData.address}</p>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-lg font-semibold text-[#FF6B00]">
                  Password
                </h2>
                <p className="text-white/90">********</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold mb-2">
                Fetching user data...
              </h2>
              <p className="text-white/70">
                Please wait while we load your profile.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
