import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiMenu, FiHome, FiShoppingCart, FiBox, FiDollarSign, FiUsers, FiSettings, FiBarChart2, FiFileText, FiStar, FiX } from 'react-icons/fi';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: <FiHome /> },
  { name: 'Menu Management', path: '/menu', icon: <FiSettings /> },
  { name: 'Orders', path: '/orders', icon: <FiShoppingCart /> },
  { name: 'Services', path: '/services', icon: <FiBox /> },
  { name: 'Inventory', path: '/inventory', icon: <FiBox /> },
  { name: 'Expenses', path: '/expenses', icon: <FiDollarSign /> },
  { name: 'Store Management', path: '/store', icon: <FiUsers /> },
  { name: 'Analysis', path: '/analysis', icon: <FiBarChart2 /> },
  { name: 'Content Management', path: '/content', icon: <FiFileText /> },
  { name: 'Customers', path: '/customers', icon: <FiUsers /> },
  { name: 'Reviews', path: '/reviews', icon: <FiStar /> },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for large screens */}
      <aside className={`hidden md:flex flex-col bg-white shadow-lg w-64 transition-all duration-300`}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-lg">Admin</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FiMenu />
          </button>
        </div>
        <nav className="mt-4 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 p-3 hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)}></div>
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-lg">Admin</span>
            <button onClick={() => setSidebarOpen(false)}>
              <FiX />
            </button>
          </div>
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-3 p-3 hover:bg-gray-100 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white shadow px-4 h-16">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <FiMenu />
            </button>
            <h1 className="font-bold text-lg">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block">Admin User</span>
            <img
              src="https://via.placeholder.com/32"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
