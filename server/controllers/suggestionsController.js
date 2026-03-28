import SuggestedDare from "../models/SuggestedDare.js";

// 🔹 GET SUGGESTED DARE
export const getSuggestedDare = async (req, res) => {
  try {
    const dares = await SuggestedDare.find();

    res.json(dares);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 ADD SUGGESTED DARE
export const addSuggestedDare = async (req, res) => {
  try {
    const { dare, category, type } = req.body;

    const newSuggestion = new SuggestedDare({
      dare,
      category,
      type,
    });

    await newSuggestion.save();

    res.status(201).json({ message: "Suggestion added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 DELETE SUGGESTED DARE
export const deleteSuggestedDare = async (req, res) => {
  try {
    await SuggestedDare.findByIdAndDelete(req.params.id);

    res.status(201).json({ message: "Suggestion deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
