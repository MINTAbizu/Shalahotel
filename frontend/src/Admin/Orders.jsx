import React from 'react';

const mockOrders = [
  { id: 1, customer: 'John Doe', items: 3, total: 120, status: 'Pending' },
  { id: 2, customer: 'Jane Smith', items: 2, total: 75, status: 'Completed' },
  { id: 3, customer: 'Mike Johnson', items: 5, total: 210, status: 'In Progress' },
  { id: 4, customer: 'Emily Davis', items: 1, total: 35, status: 'Cancelled' },
];

const Orders = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Orders</h2>
      <p className="text-sm text-gray-600">View and manage all customer orders.</p>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Order ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Customer</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Items</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Total ($)</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.items}</td>
                <td className="px-4 py-2">${order.total}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      order.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : order.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-green-600 hover:underline">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
