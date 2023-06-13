import bcrypt from "bcrypt";
import { DATA } from "../data";
import { randomUUID } from "crypto";
import { isValidUser } from "../utils";
import { RequestHandler } from "express";
import { API } from "../types/userData.type";

const verifyUserToken: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  if(!req.headers.authorization){
    res.status(401).send("Unauthorized request")
  }

  res.status(201).send({ message: "User created!", sucess: true, data: DATA });
};

module.exports = {
    verifyUserToken,
};
