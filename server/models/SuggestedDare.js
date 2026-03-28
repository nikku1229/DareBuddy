import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema(
  {
    dare: {
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
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Suggestions", suggestionSchema);
