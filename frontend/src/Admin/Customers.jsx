import React from 'react';

const mockCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', reservations: 3 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', reservations: 2 },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '555-666-7777', reservations: 5 },
];

const Customers = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Customers & Reservations</h2>
      <p className="text-sm text-gray-600">View and manage all customers and their bookings.</p>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Customer ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Phone</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Reservations</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-4 py-2">{customer.id}</td>
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">{customer.phone}</td>
                <td className="px-4 py-2">{customer.reservations}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-green-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
