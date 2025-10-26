import React from 'react';

const MenuManagement = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Menu Management</h2>
      <p className="text-sm text-gray-600">
        Add, edit, or remove menu items (Breakfast, Lunch, Dinner, Fast Food, Beverage)
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Left: Menu List */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Menu List</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center border-b py-2">
              <span>Deluxe Breakfast</span>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </div>
            </li>
            <li className="flex justify-between items-center border-b py-2">
              <span>Lunch Special</span>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </div>
            </li>
            <li className="flex justify-between items-center border-b py-2">
              <span>Evening Snack</span>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </div>
            </li>
            {/* Add more items dynamically later */}
          </ul>
        </div>

        {/* Right: Add/Edit Form */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Add / Edit Menu Item</h3>
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
              <label className="block text-sm font-medium">Category</label>
              <select className="mt-1 block w-full border rounded px-2 py-1">
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Fast Food</option>
                <option>Beverage</option>
              </select>
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

export default MenuManagement;
