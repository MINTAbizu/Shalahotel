import Customer from "../models/customer.model.js";

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate('reservations');
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addCustomer = async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
