import Store from "../models/store.model.js";

export const getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addStore = async (req, res) => {
  try {
    const newStore = new Store(req.body);
    await newStore.save();
    res.status(201).json(newStore);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateStore = async (req, res) => {
  try {
    const updatedStore = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStore);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteStore = async (req, res) => {
  try {
    await Store.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Store deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
