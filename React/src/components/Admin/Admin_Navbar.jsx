
// AdminNavbar.jsx (React)

import React from 'react';
import { Link } from "react-router-dom";
import { BiLogOut, BiMenu } from "react-icons/bi";

const AdminNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Mobile Header */}
      <header className="bg-white shadow md:hidden">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-md text-gray-700"
          >
            <BiMenu className="text-2xl" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
          <div className="w-8"></div> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-64 bg-gray-800 text-white fixed h-full z-10 md:z-0`}>
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="overflow-y-auto h-[calc(100vh-64px)]">
          <ul>
            <li className="hover:bg-gray-700">
              <Link to="/admin" className="block p-4" onClick={() => setSidebarOpen(false)}>Admin Home</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/add-turn" className="block p-4" onClick={() => setSidebarOpen(false)}>Add Turf</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/view-all-turf" className="block p-4" onClick={() => setSidebarOpen(false)}>View All Turfs</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/search-area-turf/:area" className="block p-4" onClick={() => setSidebarOpen(false)}>Update Turf by Area</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/remove-turf" className="block p-4" onClick={() => setSidebarOpen(false)}>Remove Turf</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/view-booking-using-turf-id" className="block p-4" onClick={() => setSidebarOpen(false)}>View Bookings</Link>
            </li>
            <li className="hover:bg-gray-700 border-t border-gray-700 mt-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 p-4 text-red-400 hover:text-red-300"
                onClick={() => setSidebarOpen(false)}
              >
                <BiLogOut className="text-lg" />
                <span>Log out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default AdminNavbar;


