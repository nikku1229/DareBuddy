import mongoose from "mongoose";

const gameSessionSchema = new mongoose.Schema({
  players: [String],
  category: String,
  type: String,
  usedDares: [mongoose.Schema.Types.ObjectId],
  customDares: [String],
  currentRound: Number
}, { timestamps: true });

export default mongoose.model("GameSession", gameSessionSchema);