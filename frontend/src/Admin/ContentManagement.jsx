import React from 'react';

const mockContents = [
  { id: 1, title: 'Homepage Banner', type: 'Image', status: 'Active' },
  { id: 2, title: 'About Us Section', type: 'Text', status: 'Active' },
  { id: 3, title: 'Special Offers', type: 'Image', status: 'Inactive' },
];

const ContentManagement = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Content Management</h2>
      <p className="text-sm text-gray-600">Manage website content like banners, images, and text sections.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Left: Content List */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Content List</h3>
          <ul className="space-y-2">
            {mockContents.map((content) => (
              <li key={content.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <span className="font-medium">{content.title}</span> ({content.type}) - {content.status}
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
          <h3 className="font-semibold mb-2">Add / Edit Content</h3>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                placeholder="Enter content title"
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Content Type</label>
              <select className="mt-1 block w-full border rounded px-2 py-1">
                <option>Text</option>
                <option>Image</option>
                <option>Video</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Status</label>
              <select className="mt-1 block w-full border rounded px-2 py-1">
                <option>Active</option>
                <option>Inactive</option>
              </select>
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

export default ContentManagement;
