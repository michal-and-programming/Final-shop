import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./db.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

connectToDB().then(() => {
  console.log("Connected to DB");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
