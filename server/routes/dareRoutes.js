import express from "express";
import {
  getDares,
  addDare,
  deleteDare,
} from "../controllers/dareController.js";
import { verifyKey } from "../middleware/auth.js";

const router = express.Router();

// GET dares
router.get("/", verifyKey, getDares);

// ADD dare
router.post("/", verifyKey, addDare);

// DELETE dare
router.delete("/:id", verifyKey, deleteDare);

export default router;
