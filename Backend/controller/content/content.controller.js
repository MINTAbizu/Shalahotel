import Content from "../models/content.model.js";

export const getContents = async (req, res) => {
  try {
    const contents = await Content.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addContent = async (req, res) => {
  try {
    const newContent = new Content(req.body);
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateContent = async (req, res) => {
  try {
    const updatedContent = await Content.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteContent = async (req, res) => {
  try {
    await Content.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Content deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
