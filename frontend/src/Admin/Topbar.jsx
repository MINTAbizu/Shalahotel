import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';

const Topbar = ({ setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between bg-white border-b p-3 shadow-sm">
      {/* Left: sidebar toggle + title */}
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden p-2 rounded hover:bg-gray-100 transition"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu />
        </button>
        <div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      {/* Right: search + notifications + user */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center bg-gray-100 rounded-md px-2 py-1 gap-2">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm"
          />
        </div>
        <button className="p-2 rounded hover:bg-gray-100 transition" aria-label="Notifications">
          <Bell />
        </button>
        <button className="p-2 rounded hover:bg-gray-100 transition" aria-label="Profile">
          <User />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
