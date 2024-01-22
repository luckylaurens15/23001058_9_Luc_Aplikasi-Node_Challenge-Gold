const express = require("express");
const orderRouter = express.Router();

const {OrderController} = require("../controllers/orderController");

orderRouter
    .route("/")
    .get(OrderController.getAllOrder);

orderRouter
    .route("/order/:id")
    .get(OrderController.getAnOrder);

orderRouter
    .route("/user/:id")
    .get(OrderController.getUserOrder);

orderRouter
    .route("/new-order")
    .get(OrderController.newOrderPage)
    .post(OrderController.createNewOrder);


// Update Status Note: Status must be ={On Process, Delivered, Done, Cancelled}
orderRouter
    .route("/update-status/:id")
    .get(OrderController.updateStatusPage)
    .put(OrderController.updateStatus);

module.exports = orderRouter;