import User from "../models/user.js";
import ValidateDTO from "../dto/user.js";
import winston from "winston";

/**
 * GET user
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const getUser = async (req, res) => {
  const params = req.body;

  const { error } = ValidateDTO.getUser(params);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({
      $and: [
        { first_name: params.first_name },
        { last_name: params.last_name },
      ],
    });

    if (!user) return res.status(400).send("User not found");

    res.send(user);
  } catch (err) {
    winston.error("getUser", err);
    res.status(500).send(err?.message);
  }
};

/**
 * POST user
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const postUser = async (req, res) => {
  const params = req.body;

  const { error } = ValidateDTO.postUser(params);
  if (error) return res.status(400).send(error.details[0]?.message);

  try {
    let user = await User.findOne({
      first_name: params.first_name,
      last_name: params.last_name,
    });

    if (user) return res.status(400).send("User already created.");

    user = new User(params);

    await user.save();

    res.send(user);
  } catch (err) {
    winston.error("postUser", err);
    res.status(500).send(err?.message);
  }
};
