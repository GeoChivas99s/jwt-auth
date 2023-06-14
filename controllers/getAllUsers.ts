import { RequestHandler } from "express";
import { DATA } from "../data";


const getAllUsers: RequestHandler = (req, res) => {

  if (!Boolean(DATA.length)) {
    return res.status(404).send({ message: "Not exists users!" });
  }

  res.status(200).send({ sucess: true, data: DATA });
};

module.exports = {
    getAllUsers
}