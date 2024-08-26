const express = require("express");
const userController = require("../controllers/userController");

const route = express.Router();

route.route("/").get(userController.getUsers);

module.exports = route;
