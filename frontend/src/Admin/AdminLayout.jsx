import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  FiMenu,
  FiHome,
  FiShoppingCart,
  FiBox,
  FiDollarSign,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiFileText,
  FiStar,
  FiX,
} from 'react-icons/fi'
import './adminlayout.css'

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: <FiHome /> },
  { name: 'Menu Management', path: '/MenuManagement', icon: <FiSettings /> },
  { name: 'Orders', path: '/orders', icon: <FiShoppingCart /> },
  { name: 'AdminBookingTable', path: '/AdminBookingTable', icon: <FiShoppingCart /> },
  { name: 'Services', path: '/services', icon: <FiBox /> },
  { name: 'Inventory', path: '/inventory', icon: <FiBox /> },
  { name: 'Expenses', path: '/expenses', icon: <FiDollarSign /> },
  { name: 'Store Management', path: '/store', icon: <FiUsers /> },
  { name: 'Analysis', path: '/analysis', icon: <FiBarChart2 /> },
  { name: 'Content Management', path: '/content', icon: <FiFileText /> },
  { name: 'Customers', path: '/customer', icon: <FiUsers /> },
  { name: 'Reviews', path: '/reviews', icon: <FiStar /> },
]

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false) // mobile
  const [collapsed, setCollapsed] = useState(false) // desktop icon-only
  const location = useLocation()

  return (
    <div className="admin-root">
      {/* Sidebar (desktop + mobile) */}
      <aside
        className={`sidebar ${collapsed ? 'collapsed' : ''} ${sidebarOpen ? 'open' : ''}`}
        aria-hidden={!sidebarOpen && window.innerWidth < 768}
      >
        <div className="sidebar-top">
          <div className="brand">
            <img src="https://shalahotel.com/wp-content/uploads/2022/03/cropped-favicon-1-32x32.png" alt="logo" />
            {!collapsed && <span className="brand-text">Shala Admin</span>}
          </div>

          <div className="sidebar-controls">
            <button
              className="icon-btn hide-on-mobile"
              aria-label="Collapse sidebar"
              onClick={() => setCollapsed((s) => !s)}
              title={collapsed ? 'Expand' : 'Collapse'}
            >
              <FiMenu />
            </button>

            <button
              className="icon-btn show-on-mobile"
              aria-label="Close sidebar"
              onClick={() => setSidebarOpen(false)}
            >
              <FiX />
            </button>
          </div>
        </div>

        <nav className="sidebar-nav" role="navigation" aria-label="Admin main">
          {menuItems.map((item) => {
            const active = location.pathname === item.path || location.pathname.startsWith(item.path + '/')
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-item ${active ? 'active' : ''}`}
                title={collapsed ? item.name : ''}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && <span className="nav-label">{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          {!collapsed && <small className="muted">Logged in as Admin</small>}
        </div>
      </aside>

      {/* Mobile overlay when sidebar open */}
      <div
        className={`overlay ${sidebarOpen ? 'visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />

      {/* Main content */}
      <div className="main">
        <header className="topbar">
          <div className="left">
            <button className="icon-btn show-on-mobile" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              <FiMenu />
            </button>
            <h1 className="title">Admin Dashboard</h1>
          </div>

          <div className="right">
            <div className="profile">
              <img src="https://via.placeholder.com/32" alt="profile" />
              <span className="profile-name hide-on-mobile">Admin User</span>
            </div>
          </div>
        </header>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
