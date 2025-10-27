import React, { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:5000/api/menu';

export default function MenuManagement() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    category: 'Breakfast',
    price: '',
    description: '',
    image: '',
    rating: 0
  });
  const [editingId, setEditingId] = useState(null);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/post`);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_BASE}/${editingId}` : `${API_BASE}/post`;

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setForm({ name: '', category: 'Breakfast', price: '', description: '', image: '', rating: 0 });
      setEditingId(null);
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm({
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description || '',
      image: item.image || '',
      rating: item.rating || 0
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
    fetchItems();
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">🍴 Menu Management</h2>

      {/* Flex container: table + form */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 flex-1 min-w-[300px]">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Menu Items</h3>
          <div className="max-h-[400px] overflow-y-auto border rounded-md scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-200">
            <table className="min-w-full table-auto border border-gray-200 text-sm md:text-base">
              <thead className="bg-yellow-500 text-white sticky top-0">
                <tr>
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-center">Price</th>
                  <th className="px-4 py-2 text-center">Rating</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map(it => (
                  <tr key={it._id} className="border-b hover:bg-gray-50">
                    <td className="px-2 py-1">
                      {it.image ? (
                        <img
                          src={it.image}
                          alt={it.name}
                          style={{
                            width: '48px',
                            height: '48px',
                            objectFit: 'cover',
                            borderRadius: '6px',
                            border: '1px solid #ddd'
                          }}
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                          No Img
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-2 font-medium">{it.name}</td>
                    <td className="px-4 py-2">{it.category}</td>
                    <td className="px-4 py-2 text-center">{it.price}</td>
                    <td className="px-4 py-2 text-center">{it.rating}</td>
                    <td className="px-4 py-2 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(it)}
                        className="px-2 py-1 text-sm text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(it._id)}
                        className="px-2 py-1 text-sm text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 flex-1 min-w-[300px]">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            {editingId ? '✏️ Edit Menu Item' : '➕ Add New Menu Item'}
          </h3>

          <form onSubmit={handleSave} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-600">Item Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              >
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Fast Food</option>
                <option>Beverage</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Price (ETB)</label>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                type="number"
                required
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Image URL</label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              {form.image && (
                <img
                  src={form.image}
                  alt="Preview"
                  style={{
                    width: '48px',
                    height: '48px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    border: '1px solid #ddd',
                    marginTop: '8px'
                  }}
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Rating</label>
              <input
                name="rating"
                value={form.rating}
                onChange={handleChange}
                type="number"
                min="0"
                max="5"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div className="pt-3 flex items-center gap-2">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-5 py-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                {editingId ? 'Update' : 'Save'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setForm({ name: '', category: 'Breakfast', price: '', description: '', image: '', rating: 0 });
                  }}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
