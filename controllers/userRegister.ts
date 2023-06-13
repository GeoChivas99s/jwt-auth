import bcrypt from "bcrypt";
import { DATA } from "../data";
import { randomUUID } from "crypto";
import { isValidUser } from "../utils";
import { RequestHandler } from "express";
import { API } from "../types/userData.type";

const userRegister: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!isValidUser(username, password)) {
   return res.status(400).send("Username and password are required.");
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
