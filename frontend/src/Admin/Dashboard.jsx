import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Mock data for charts
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
  return (
    <div className="space-y-4">
      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          Total Orders
          <div className="text-2xl font-bold mt-2">1,234</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          Revenue
          <div className="text-2xl font-bold mt-2">$45,230</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          Customers
          <div className="text-2xl font-bold mt-2">3,210</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow h-64">
          <h3 className="mb-2 font-semibold">Bookings (last 7 days)</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white rounded shadow h-64">
          <h3 className="mb-2 font-semibold">Revenue (last 7 days)</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
