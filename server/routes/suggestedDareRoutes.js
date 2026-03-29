import express from "express";
import {
  getSuggestedDare,
  addSuggestedDare,
  deleteSuggestedDare,
  updateSuggestedStatusDare,
} from "../controllers/suggestionsController.js";
import { verifyKey } from "../middleware/auth.js";

const router = express.Router();

// GET SUGGESTION
router.get("/", verifyKey, getSuggestedDare);

// ADD SUGGESTION
router.post("/", verifyKey, addSuggestedDare);

// DELETE SUGGESTION
router.delete("/:id", verifyKey, deleteSuggestedDare);

// UPDATE SUGGESTION
router.patch("/:id/status", verifyKey, updateSuggestedStatusDare);

export default router;
