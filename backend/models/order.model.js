import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      productId: String,
      title: String,
      price: Number,
      quantity: Number,
      image: String,
      info: String,
    }
  ],
  totalPrice: Number,
  customer: {
    name: String,
    address: String,
  }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;