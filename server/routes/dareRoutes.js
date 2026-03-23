import express from "express";
import {
  getDares,
  addDare,
  deleteDare,
  fetchDareCategory,
} from "../controllers/dareController.js";
import { verifyKey } from "../middleware/auth.js";

const router = express.Router();

// GET dares
router.get("/", verifyKey, getDares);

// ADD dare
router.post("/", verifyKey, addDare);

// DELETE dare
router.delete("/:id", verifyKey, deleteDare);

// Get Categories
router.get("/categories", verifyKey, fetchDareCategory);

export default router;
