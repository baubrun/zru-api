import Product from "../models/product.js";
import ValidateDTO from "../dto/product.js";
import winston from "winston";

/**
 * GET product
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const getProduct = async (req, res) => {
  const { id } = req.params;

  const { error } = ValidateDTO.getProduct(id);
  if (error) return res.status(400).send(error.details[0]?.message);

  try {
    let product = await Product.findOne({ product_id: id });

    if (!product) return res.status(400).send("Product not found");

    res.send(product);
  } catch (err) {
    winston.error("getProduct", err);
    res.status(400).send(err?.message);
  }
};
