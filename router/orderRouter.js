const express = require("express");
const orderRouter = express.Router();

const {OrderController} = require("../controllers/orderController");

orderRouter
    .route("/");


module.exports = orderRouter;