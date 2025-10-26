import React from 'react';

const mockInventory = [
  { id: 1, item: 'Shampoo Bottles', quantity: 120, category: 'Amenities' },
  { id: 2, item: 'Towels', quantity: 200, category: 'Laundry' },
  { id: 3, item: 'Bedsheets', quantity: 150, category: 'Bedding' },
  { id: 4, item: 'Coffee Beans', quantity: 50, category: 'Kitchen' },
];

const Inventory = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Inventory</h2>
      <p className="text-sm text-gray-600">Manage hotel stock and supplies.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Left: Inventory list */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Inventory List</h3>
          <ul className="space-y-2">
            {mockInventory.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <span className="font-medium">{item.item}</span> - {item.quantity} ({item.category})
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
          <h3 className="font-semibold mb-2">Add / Edit Inventory Item</h3>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Item Name</label>
              <input
                type="text"
                placeholder="Enter item name"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Category</label>
              <input
                type="text"
                placeholder="Enter category"
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

export default Inventory;
