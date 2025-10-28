// backend/controllers/order.controller.js
import mongoose from 'mongoose';
import Order from '../../models/order/orders.model.js';
import Item from '../../models/inventory/inventory.model.js'; // adjust path to your item model

/**
 * Create an order:
 * - Validate items exist
 * - Validate stock >= requested qty
 * - Use a transaction to decrement stock and create order atomically
 */

// export const createOrder = async (req, res) => {
//   const session = await mongoose.startSession();
//   try {
//     const { userId, items, totalAmount } = req.body;

//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ message: 'Order must contain at least one item.' });
//     }

//     // Basic server-side total check (recommended)
//     const ids = items.map(i => i.itemId);
//     const dbItems = await Item.find({ _id: { $in: ids } }).session(session);

//     // Build lookup map
//     const map = new Map(dbItems.map(d => [d._id.toString(), d]));

//     // Verify stock and calculate serverTotal
//     let serverTotal = 0;
//     for (const it of items) {
//       const dbItem = map.get(it.itemId);
//       if (!dbItem) return res.status(400).json({ message: `Item not found: ${it.itemId}` });
//       if (dbItem.quantity < it.quantity) {
//         return res.status(400).json({ message: `Insufficient stock for ${dbItem.name}` });
//       }
//       serverTotal += dbItem.cost * it.quantity; // use cost or price field from Item model
//     }

//     // Optional: check client provided totalAmount matches serverTotal
//     if (Math.abs(serverTotal - totalAmount) > 0.01) {
//       return res.status(400).json({ message: 'Total amount mismatch.' });
//     }

//     // Start transaction
//     session.startTransaction();

//     // Decrement stock for each item
//     for (const it of items) {
//       const dbItem = map.get(it.itemId);
//       const newQty = dbItem.quantity - it.quantity;
//       // Update quantity and status
//       const newStatus = newQty <= 0 ? 'Out-stock' : (newQty <= 5 ? 'Low-stock' : 'In-stock'); // threshold 5 example
//       await Item.findByIdAndUpdate(dbItem._id, { quantity: newQty, status: newStatus }, { session });
//     }

//     // Create order document
//     const newOrder = new Order({
//       userId: userId || null,
//       items,
//       totalAmount,
//       status: 'Pending',
//       paymentStatus: 'Unpaid',
//     });

//     await newOrder.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return res.status(201).json({ message: 'Order placed', order: newOrder });
//   } catch (err) {
//     await session.abortTransaction();
//     session.endSession();
//     console.error('createOrder error:', err);
//     return res.status(500).json({ message: 'Server error placing order', error: err.message });
//   }
// };
export const createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Order must contain at least one item.' });
    }

    const ids = items.map(i => i.itemId);
    const dbItems = await Item.find({ _id: { $in: ids } });

    const map = new Map(dbItems.map(d => [d._id.toString(), d]));
    let serverTotal = 0;

    for (const it of items) {
      const dbItem = map.get(it.itemId);
      if (!dbItem) return res.status(400).json({ message: `Item not found: ${it.itemId}` });
      if (dbItem.quantity < it.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${dbItem.name}` });
      }
      serverTotal += dbItem.cost * it.quantity;
    }

    if (Math.abs(serverTotal - totalAmount) > 0.01) {
      return res.status(400).json({ message: 'Total amount mismatch.' });
    }

    // Update item stock directly (no transaction)
    for (const it of items) {
      const dbItem = map.get(it.itemId);
      const newQty = dbItem.quantity - it.quantity;
      const newStatus = newQty <= 0 ? 'Out-stock' : newQty <= 5 ? 'Low-stock' : 'In-stock';
      await Item.findByIdAndUpdate(dbItem._id, { quantity: newQty, status: newStatus });
    }

    const newOrder = new Order({
      userId: userId || null,
      items,
      totalAmount,
      status: 'Pending',
      paymentStatus: 'Unpaid',
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed', order: newOrder });
  } catch (err) {
    console.error('createOrder error:', err);
    res.status(500).json({ message: 'Server error placing order', error: err.message });
  }
};
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.itemId', 'name category');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId', 'name email').sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
