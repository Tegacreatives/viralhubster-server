const express = require("express");
const imageController = require("../controllers/imageController");

const route = express.Router();

route.route("/").get(imageController.getImages);

module.exports = route;
