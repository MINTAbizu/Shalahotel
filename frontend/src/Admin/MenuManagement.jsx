import React, { useEffect, useState } from 'react'

const API_BASE = 'http://localhost:5000/api/menu/post'

export default function MenuManagement() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', category: 'Breakfast', price: '', description: '', image: '', rating: 0 })
  const [editingId, setEditingId] = useState(null)

  const fetchItems = async () => {
    setLoading(true)
    try {
      const res = await fetch(API_BASE)
      const data = await res.json()
      setItems(data)
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  useEffect(() => { fetchItems() }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await fetch(`${API_BASE}/${editingId}`, { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) })
      } else {
        await fetch(API_BASE, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) })
      }
      setForm({ name: '', category: 'Breakfast', price: '', description: '', image: '', rating: 0 })
      setEditingId(null)
      fetchItems()
    } catch (err) { console.error(err) }
  }

  const handleEdit = (item) => {
    setEditingId(item._id)
    setForm({ name: item.name, category: item.category, price: item.price, description: item.description || '', image: item.image || '', rating: item.rating || 0 })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return
    await fetch(`${API_BASE}/${id}`, { method: 'DELETE' })
    fetchItems()
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Menu Management</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Menu List</h3>
          {loading ? <p>Loading...</p> : (
            <ul className="space-y-2">
              {items.map(it => (
                <li key={it._id} className="flex justify-between items-center border-b py-2">
                  <span>{it.name} — {it.category} — {it.price} ETB</span>
                  <div className="flex gap-2">
                    <button onClick={()=>handleEdit(it)} className="text-blue-600 hover:underline">Edit</button>
                    <button onClick={()=>handleDelete(it._id)} className="text-red-600 hover:underline">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">{editingId ? 'Edit' : 'Add'} Menu Item</h3>
          <form onSubmit={handleSave} className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Item Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm font-medium">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="mt-1 block w-full border rounded px-2 py-1">
                <option>Breakfast</option><option>Lunch</option><option>Dinner</option><option>Fast Food</option><option>Beverage</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Price</label>
              <input name="price" value={form.price} onChange={handleChange} type="number" required className="mt-1 block w-full border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm font-medium">Image URL</label>
              <input name="image" value={form.image} onChange={handleChange} className="mt-1 block w-full border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} className="mt-1 block w-full border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm font-medium">Rating</label>
              <input name="rating" value={form.rating} onChange={handleChange} type="number" min="0" max="5" className="mt-1 block w-full border rounded px-2 py-1" />
            </div>

            <div>
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                Save
              </button>
              {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ name:'', category:'Breakfast', price:'', description:'', image:'', rating:0}) }} className="ml-2">Cancel</button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}