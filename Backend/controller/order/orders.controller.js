import Order from "../models/orders.model.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customerId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
