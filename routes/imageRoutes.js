const express = require("express");
const imageController = require("../controllers/imageController");

const route = express.Router();

route.route("/upload").post(imageController.uploadImage);
route.route("/caption/:id").get(imageController.getCaption);

module.exports = route;
