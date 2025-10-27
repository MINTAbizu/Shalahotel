import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { motion } from 'framer-motion';
import { DollarSign, Users, ShoppingBag } from 'lucide-react';

// Mock data
const data = [
  { name: 'Mon', bookings: 30, revenue: 400 },
  { name: 'Tue', bookings: 45, revenue: 700 },
  { name: 'Wed', bookings: 60, revenue: 1200 },
  { name: 'Thu', bookings: 40, revenue: 900 },
  { name: 'Fri', bookings: 80, revenue: 1600 },
  { name: 'Sat', bookings: 100, revenue: 2100 },
  { name: 'Sun', bookings: 70, revenue: 1400 },
];

const Dashboard = () => {
  const summary = [
    {
      title: 'Total Orders',
      value: '1,234',
      icon: <ShoppingBag className="text-indigo-500" size={28} />,
      color: 'from-indigo-100 to-indigo-50',
    },
    {
      title: 'Revenue',
      value: '$45,230',
      icon: <DollarSign className="text-emerald-500" size={28} />,
      color: 'from-emerald-100 to-emerald-50',
    },
    {
      title: 'Customers',
      value: '3,210',
      icon: <Users className="text-amber-500" size={28} />,
      color: 'from-amber-100 to-amber-50',
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {summary.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`bg-gradient-to-br ${item.color} p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">{item.title}</p>
                <h3 className="text-3xl font-bold mt-1 text-gray-800">{item.value}</h3>
              </div>
              <div className="p-3 bg-white rounded-xl shadow-inner">{item.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bookings Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
        >
          <h3 className="font-semibold text-gray-700 mb-4">📅 Bookings (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
              <YAxis tick={{ fill: '#6b7280' }} />
              <Tooltip contentStyle={{ borderRadius: '12px' }} />
              <Line
                type="monotone"
                dataKey="bookings"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
        >
          <h3 className="font-semibold text-gray-700 mb-4">💰 Revenue (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
              <YAxis tick={{ fill: '#6b7280' }} />
              <Tooltip contentStyle={{ borderRadius: '12px' }} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
