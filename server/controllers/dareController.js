import Dare from "../models/Dare.js";

// 🔹 GET DARES
export const getDares = async (req, res) => {
  try {
    const { category, type } = req.query;

    const dares = await Dare.find({
      category,
      type,
    }).limit(100);

    res.json(dares);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 ADD DARE
export const addDare = async (req, res) => {
  try {
    const { text, category, type } = req.body;

    const dare = new Dare({ text, category, type });
    await dare.save();

    res.status(201).json(dare);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 DELETE DARE
export const deleteDare = async (req, res) => {
  try {
    await Dare.findByIdAndDelete(req.params.id);

    res.json({ message: "Dare deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
