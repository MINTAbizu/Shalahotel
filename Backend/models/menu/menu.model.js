import mongoose from 'mongoose'

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // Breakfast, Lunch, ...
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  rating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model('MenuItem', MenuItemSchema)