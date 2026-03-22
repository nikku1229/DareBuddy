import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dareRoutes from "./routes/dareRoutes.js";
import { limiter, dareLimiter } from "./middleware/rateLimiter.js";

const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dares", dareLimiter, dareRoutes);
app.use("/api", limiter);

app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
