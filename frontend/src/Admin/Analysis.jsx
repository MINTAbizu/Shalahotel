import React from 'react';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Mock data
const revenueData = [
  { month: 'Jan', revenue: 4000, bookings: 40 },
  { month: 'Feb', revenue: 3000, bookings: 30 },
  { month: 'Mar', revenue: 5000, bookings: 50 },
  { month: 'Apr', revenue: 4000, bookings: 45 },
  { month: 'May', revenue: 6000, bookings: 60 },
];

const Analysis = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Analysis</h2>
      <p className="text-sm text-gray-600">Visualize hotel performance metrics and trends.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Revenue chart */}
        <div className="p-4 bg-white rounded shadow h-64">
          <h3 className="mb-2 font-semibold">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bookings chart */}
        <div className="p-4 bg-white rounded shadow h-64">
          <h3 className="mb-2 font-semibold">Monthly Bookings</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <span className="text-gray-500">Total Revenue</span>
          <div className="text-2xl font-bold mt-1">$23,450</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <span className="text-gray-500">Total Bookings</span>
          <div className="text-2xl font-bold mt-1">1,320</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <span className="text-gray-500">New Customers</span>
          <div className="text-2xl font-bold mt-1">480</div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
