const express = require("express");
const itemRouter = express.Router();

const {ItemController} = require("../controllers/itemController.js");

itemRouter
    .route("/")
    .get(ItemController.getAllItem);

module.exports = itemRouter;