const express = require("express");
const orderRouter = express.Router();

const {OrderController} = require("../controllers/orderController.js");

orderRouter
    .route("/")
    .get(OrderController.getAllItem);


module.exports = orderRouter;