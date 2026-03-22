import mongoose from "mongoose";

const dareSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["veg", "nonveg"],
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Dare", dareSchema);
