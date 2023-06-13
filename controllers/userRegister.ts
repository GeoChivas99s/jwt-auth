import { randomUUID } from "crypto";

import { RequestHandler } from "express";
import { DATA } from "../data";
import { API } from "../types/userData.type";
import bcrypt from "bcrypt";

import { isValidUser } from "../utils";

const userRegister: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!isValidUser(username, password)) {
    res.status(400).send("Username and password are required.");
  }

  const hash = await bcrypt.hash(password, 12);

  const newUser: API.IUserType = {
    id: randomUUID(),
    username: username,
    passoword: hash,
  };
  DATA.push(newUser);

  res.status(201).send({ message: "User created!", sucess: true, data: DATA });
};

module.exports = {
  userRegister,
};
