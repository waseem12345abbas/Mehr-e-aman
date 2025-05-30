import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10 px-6">
        {/* Brand Info */}
        <div>
          <Link to={'/'}>
            <div className="w-16 mb-4">
              <img
                src="/images/mehreaman.png"
                alt="Mehr-e-Aman Logo"
                className="transition-transform duration-500 hover:scale-110 cursor-pointer rounded-lg"
              />
            </div>
          </Link>
          <p className="text-base text-gray-300">
            A dedicated safety companion for women. Instant alerts, real-time tracking, and emergency support — all at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-[#1DB954] transition">Home</Link></li>
            <li><Link to="/features" className="hover:text-[#1DB954] transition">Features</Link></li>
            <li><Link to="/profile" className="hover:text-[#1DB954] transition">My Profile</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-[#1DB954] transition">Privacy Policy</Link></li>
            <li><Link to="/saved" className="hover:text-[#1DB954] transition">Saved</Link></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">Stay Connected</h3>
          <div className="flex space-x-4 text-2xl text-white">
            <a href="#" className="hover:text-[#1DB954]"><FaFacebook /></a>
            <a href="#" className="hover:text-[#1DB954]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#1DB954]"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Wave - Green */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-[#A94457]">
          <path d="M0,0V46.29c47.2,22,103.9,36.14,172,40,75.4,4.18,150.5-9.68,218-28C520,38.67,600,3,680,1.28c90-2,173,26.64,250,55.72s168,47.35,270,34.34V0Z"></path>
        </svg>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 text-center text-sm text-gray-400 mt-10 font-semibold">
        &copy; {new Date().getFullYear()} Mehr-e-Aman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
