import React from 'react';

const mockStores = [
  { id: 1, name: 'Main Branch', location: 'Downtown', manager: 'Alice Smith' },
  { id: 2, name: 'Airport Branch', location: 'Airport Road', manager: 'Bob Johnson' },
  { id: 3, name: 'Beach Resort', location: 'Seaside', manager: 'Carol Lee' },
];

const StoreManagement = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Store Management</h2>
      <p className="text-sm text-gray-600">Manage hotel branches or store locations.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Left: Store List */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Stores List</h3>
          <ul className="space-y-2">
            {mockStores.map((store) => (
              <li key={store.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <span className="font-medium">{store.name}</span> - {store.location} (Manager: {store.manager})
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
          <h3 className="font-semibold mb-2">Add / Edit Store</h3>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Store Name</label>
              <input
                type="text"
                placeholder="Enter store name"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Manager Name</label>
              <input
                type="text"
                placeholder="Enter manager name"
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

export default StoreManagement;
