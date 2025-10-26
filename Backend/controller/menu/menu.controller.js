import Menu from "../models/menu.model.js";

// GET all menu items
export const getMenu = async (req, res) => {
  try {
    const items = await Menu.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// POST add a new menu item
export const addMenu = async (req, res) => {
  try {
    const newItem = new Menu(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// PUT update menu item
export const updateMenu = async (req, res) => {
  try {
    const updatedItem = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// DELETE menu item
export const deleteMenu = async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
