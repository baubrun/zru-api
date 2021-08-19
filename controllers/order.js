import Order from "../models/order.js";
import ValidateDTO from "../dto/order.js";
import winston from "winston";

/**
 * GET order
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const getOrder = async (req, res) => {
  const params = req.query;

  const { error } = ValidateDTO.postOrder(params);
  if (error) return res.status(400).send(error.details[0]?.message);

  try {
    let order = await Order.findOne({ product_id: params });

    if (!order) return res.status(400).send("Order not found");

    return res.send(order);
  } catch (err) {
    winston.error("getOrder", err);
    res.status(400).send(err?.message);
  }
};

/**
 * Add order
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const postOrder = async (req, res) => {
  const params = req.body;

  const { error } = ValidateDTO.postOrder(params);
  if (error) return res.status(400).send(error.details[0]?.message);

  try {
    const order = await Order.create({
      user: params?.user,
      product: params?.product,
    });

    await order.save();

    return res.send(order);
  } catch (err) {
    winston.error("postOrder", err);
    res.status(400).send(err?.message);
  }
};
