import bcrypt from "bcrypt";
import { DATA } from "../data";
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import { isValidUser } from "../utils";
import { RequestHandler } from "express";

const userLogin: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!isValidUser(username, password)) {
    return res.status(400).send("Invalid email or password");
  }

  const foundedUser = DATA.find((item) => item.username === username);

  if (!foundedUser) {
    return res.status(400).send("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, foundedUser.passoword);

  if (!isPasswordValid) {
    return res.status(400).send("Invalid email or password");
  }

  const token = jwt.sign({ username, password }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res
    .status(200)
    .send({ token: token, sucess: true, username: foundedUser.username });
};

module.exports = {
  userLogin,
};
