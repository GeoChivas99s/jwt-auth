import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { DATA } from "../data";
import { randomUUID } from "crypto";
import { isValidUser } from "../utils";
import { RequestHandler } from "express";
import { API } from "../types/userData.type";

const verifyUserToken: RequestHandler = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send("Access denied. No token provided");
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(400).send("Ivalid token!");
  }
};

export default verifyUserToken;
