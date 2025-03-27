

// AdminDashboard.jsx (React)

import React, { useState } from 'react';
import Card from './Card';
import AdminNavbar from './Admin_Navbar';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
      {/* AdminNavbar - Mobile Header */}
      <AdminNavbar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />

      {/* Main Content */}
      <main className={`flex-1 p-4 md:p-6 transition-all duration-300 ${sidebarOpen ? 'ml-0 md:ml-64' : 'ml-0 md:ml-64'}`}>
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        {/* Dashboard Content */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Dashboard Overview</h1>
        </header>

        {/* Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card title="Total Turfs" value="150" />
          <Card title="Active Bookings" value="42" />
          <Card title="Revenue" value="$12,340" />
          <Card title="Upcoming Bookings">
            <ul className="mt-2 space-y-2">
              <li className="text-sm">Turf A - Tomorrow 4PM</li>
              <li className="text-sm">Turf B - Tomorrow 6PM</li>
            </ul>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;


