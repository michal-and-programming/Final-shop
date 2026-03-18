import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./db.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

connectToDB();

app.get("/", (req, res) => {
  res.send("Serwer backendowy działa!");
});

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});