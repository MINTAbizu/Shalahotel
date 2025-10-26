import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  items: [{ name: String, quantity: Number, price: Number }],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
