import newItem from '../../models/inventory/inventory.model.js'
export const postitem = async (req, res) => {
    const { name, category, unit, cost, quantity, status } = req.body;

    try {
        if(!name || !category || !unit || !cost || !quantity || !status){
            return res.status(400).json({msg:"Please provide all required fileds"})

        }
        const newItems = new newItem({
            name,
            category,
            unit,
            cost,
            quantity,
            status
        });

        const savedItem = await newItems.save(); // Save the instance
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// Get all items

   export const getitem= async (req, res) => {
   try {
        const items = await newItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Update an item
export const updateitem= async (req, res) => {
    try {
        const item = await item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an item

export const delateitem= async (req, res) => {
    try {
        await item.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



// export default postitem
//      getitem,
//     delateitem,
//     updateitem
