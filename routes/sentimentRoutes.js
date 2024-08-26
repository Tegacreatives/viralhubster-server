const express = require("express");
const sentimentController = require("../controllers/sentimentController");

const route = express.Router();

route.route("/").get(sentimentController.getSentiments);

module.exports = route;
