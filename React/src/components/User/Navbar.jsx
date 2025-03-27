import { useState } from 'react';
import { FaHome, FaSearch, FaTimes, FaBars, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">TurfFinder</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="https://turf-finder-project.netlify.app/user" 
              className="flex items-center px-3 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              <FaHome className="mr-2" />
              User Home
            </a>
            <a 
              href="https://turf-finder-project.netlify.app/user/search-available-turf" 
              className="flex items-center px-3 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              <FaSearch className="mr-2" />
              Search Available Turf
            </a>
            <a 
              href="https://turf-finder-project.netlify.app/user/cancel-booking" 
              className="flex items-center px-3 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              <FaTimes className="mr-2" />
              Cancel Booked Turf
            </a>
          </div>

          {/* User Profile (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="https://turf-finder-project.netlify.app/user/profile" 
              className="flex items-center px-3 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              <FaUser className="mr-2" />
              Profile
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 focus:outline-none transition duration-300"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/user-home"
              className="flex items-center px-3 py-2 rounded-md text-white hover:bg-green-600"
            >
              <FaHome className="mr-2" />
              User Home
            </a>
            <a
              href="user/search-turf"
              className="flex items-center px-3 py-2 rounded-md text-white hover:bg-green-600"
            >
              <FaSearch className="mr-2" />
              Search Available Turf
            </a>
            <a
              href="user/cancel-booking"
              className="flex items-center px-3 py-2 rounded-md text-white hover:bg-green-600"
            >
              <FaTimes className="mr-2" />
              Cancel Booked Turf
            </a>
            <a
              href="user/profile"
              className="flex items-center px-3 py-2 rounded-md text-white hover:bg-green-600"
            >
              <FaUser className="mr-2" />
              Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;