import Order from "../models/order.model.js";

const validateText = (text) => {
  const trimmed = text.trim();

  if (trimmed.length > 200) {
    return "Maksymalnie 200 znaków";
  }

  const forbidden = /[<>{}()]/;

  if (forbidden.test(trimmed)) {
    return "Niedozwolone znaki: < > { } ( )";
  }

  return true;
};

export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, customer } = req.body;

     if (!items || items.length === 0) {
      return res.status(400).json({ message: "Koszyk jest pusty" });
    }

    if (!customer?.name || !customer?.address) {
      return res.status(400).json({ message: "Brak danych klienta" });
    }

    for (const item of items) {
      const result = validateText(item.info);

      if (result !== true) {
        return res.status(400).json({ message: result });
      }
    }

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