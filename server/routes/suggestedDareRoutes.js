import express from "express";
import {
  getSuggestedDare,
  addSuggestedDare,
  deleteSuggestedDare,
} from "../controllers/suggestionsController.js";
import { verifyKey } from "../middleware/auth.js";

const router = express.Router();

// GET SUGGESTION
router.get("/", verifyKey, getSuggestedDare);

// ADD SUGGESTION
router.post("/", verifyKey, addSuggestedDare);

// DELETE SUGGESTION
router.delete("/:id", verifyKey, deleteSuggestedDare);

export default router;
