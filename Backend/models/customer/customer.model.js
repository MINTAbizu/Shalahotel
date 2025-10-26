import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
}, { timestamps: true });

export default mongoose.model("Customer", customerSchema);
