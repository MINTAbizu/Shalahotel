import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FileText,
  ShoppingCart,
  Tool,
  Box,
  PieChart,
  Layers,
  Users,
  CalendarCheck,
  MessageSquare
} from 'lucide-react';

const items = [
  { name: 'Dashboard', path: '/', icon: <Home size={18} /> },
  { name: 'Menu Management', path: '/menu', icon: <FileText size={18} /> },
  { name: 'Orders', path: '/orders', icon: <ShoppingCart size={18} /> },
  { name: 'Services', path: '/services', icon: <Tool size={18} /> },
  { name: 'Inventory', path: '/inventory', icon: <Box size={18} /> },
  { name: 'Expenses', path: '/expenses', icon: <PieChart size={18} /> },
  { name: 'Store Management', path: '/store', icon: <Layers size={18} /> },
  { name: 'Analysis', path: '/analysis', icon: <PieChart size={18} /> },
  { name: 'Content Management', path: '/content', icon: <FileText size={18} /> },
  { name: 'Customers', path: '/customers', icon: <Users size={18} /> },
  { name: 'Reservations', path: '/reservations', icon: <CalendarCheck size={18} /> },
  { name: 'Reviews', path: '/reviews', icon: <MessageSquare size={18} /> },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-20 lg:hidden transition-opacity ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />

      <aside
        className={`fixed z-30 left-0 top-0 h-full w-64 bg-white border-r shadow-sm transform transition-transform ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        aria-label="Sidebar"
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold">Admin Panel</h2>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">✕</button>
        </div>

        <nav className="p-4 space-y-1" aria-label="Main navigation">
          {items.map((it) => {
            const active = location.pathname === it.path;
            return (
              <Link
                key={it.path}
                to={it.path}
                onClick={() => setSidebarOpen(false)} // close on mobile when navigating
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors
                  ${active ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                aria-current={active ? 'page' : undefined}
              >
                {it.icon}
                <span>{it.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
