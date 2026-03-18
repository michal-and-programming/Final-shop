import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, customer } = req.body;

    const order = new Order({
      items,
      totalPrice,
      customer,
    });

    const saved = await order.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Błąd zapisu zamówienia" });
  }
};