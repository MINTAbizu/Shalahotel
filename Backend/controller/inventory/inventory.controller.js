import Inventory from '../../models/inventory/inventory.model.js'

// POST
export const postitem = async (req, res) => {
    const { name, category, unit, cost, quantity, status } = req.body;

    try {
        if (!name || !category || !unit || !cost || !quantity) {
            return res.status(400).json({ msg: "Please provide all required fields" });
        }

        const newInventoryItem = new Inventory({
            name,
            category,
            unit,
            cost,
            quantity,
            status: status || 'available'
        });

        const savedItem = await newInventoryItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// GET
export const getitem = async (req, res) => {
    try {
        const items = await Inventory.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PUT
export const updateitem = async (req, res) => {
    try {
        const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE
export const delateitem = async (req, res) => {
    try {
        await Inventory.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
