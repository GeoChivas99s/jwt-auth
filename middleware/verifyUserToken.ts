import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { DATA } from "../data";
import { randomUUID } from "crypto";
import { isValidUser } from "../utils";
import { RequestHandler } from "express";
import { API } from "../types/userData.type";
import { nextTick } from "process";

const verifyUserToken: RequestHandler = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send("Unauthorized request");
  }
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(401).send("Acess denied. No token provided");
  }

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      next();
    
  } catch (error) {
      return res.status(400).send("Ivalid token!");
    
  }

};

export default verifyUserToken;
