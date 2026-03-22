import express from "express";
import {
  getDares,
  addDare,
  deleteDare,
} from "../controllers/dareController.js";

const router = express.Router();

// GET dares
router.get("/", getDares);

// ADD dare
router.post("/", addDare);

// DELETE dare
router.delete("/:id", deleteDare);

export default router;
