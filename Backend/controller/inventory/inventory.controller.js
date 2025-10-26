import Inventory from "../models/inventory.model.js";

export const getInventory = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addInventory = async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateInventory = async (req, res) => {
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteInventory = async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Inventory item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
