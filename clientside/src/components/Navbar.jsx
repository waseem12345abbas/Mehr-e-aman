import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Profile", href: "/profile" },
    { name: "Privacy", href: "/privay-policy" },
    { name: "Saved", href: "/saved" },
  ];

  return (
    <nav className="w-full text-white shadow-lg fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center bg-[radial-gradient(circle_at_center,_#A94457,_#000000)]"
      >
        {/* Logo */}
       <Link to={'/'}>
        <div className="w-12 rounded-lg hover:bouncing">
          <img 
          src="/images/mehreaman.png" 
          alt="logo"
          className="transition-transform duration-500 hover:scale-150 cursor-pointer rounded-lg" />
        </div>
       </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="hover:text-[#FFE5E5] text-black transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="bg-[#2C2C2C] text-gray-400 px-4 py-2 rounded-[0.5rem] font-semibold hover:bg-[#FFE5E5] transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FF3B3F] px-4 pt-4 pb-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-white text-lg font-medium hover:text-[#FFE5E5] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to={"/login"}
            className="inline-block bg-white text-[#FF3B3F] px-4 py-2 mt-2 rounded-full font-semibold hover:bg-[#FFE5E5] transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
