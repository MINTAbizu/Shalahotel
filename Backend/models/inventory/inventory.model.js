import mongoose from 'mongoose'
const inventorySchema = new mongoose.Schema({
     name: String,
    category: String,
    unit: String,
    cost: Number,
    quantity: Number,
    status: String,
});

const InventoryItem = mongoose.model('InventoryItem', inventorySchema);

export default InventoryItem