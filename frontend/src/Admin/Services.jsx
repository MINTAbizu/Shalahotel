import React from 'react';

const mockServices = [
  { id: 1, name: 'Room Cleaning', price: 20, duration: '30 mins' },
  { id: 2, name: 'Laundry Service', price: 15, duration: '1 hr' },
  { id: 3, name: 'Spa Massage', price: 50, duration: '1 hr' },
  { id: 4, name: 'Airport Pickup', price: 40, duration: '45 mins' },
];

const Services = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Services</h2>
      <p className="text-sm text-gray-600">Manage all services offered to customers.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Left: Services list */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Service List</h3>
          <ul className="space-y-2">
            {mockServices.map((service) => (
              <li key={service.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <span className="font-medium">{service.name}</span> - ${service.price} ({service.duration})
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Add/Edit Form */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Add / Edit Service</h3>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Service Name</label>
              <input
                type="text"
                placeholder="Enter service name"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                placeholder="Enter price"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Duration</label>
              <input
                type="text"
                placeholder="Enter duration (e.g., 30 mins)"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
