const express = require("express");
const itemRouter = express.Router();

const {ItemController} = require("../controllers/itemController.js");

itemRouter
    .route("/")
    .get(ItemController.getAllItem);

itemRouter
    .route("/item/:id")
    .get(ItemController.getItem);

itemRouter
    .route("/add")
    .get(ItemController.addItemPage)
    .post(ItemController.addNewItem);

itemRouter
    .route("/update/:id")
    .get(ItemController.updateItemPage)
    .post(ItemController.updateItem);

itemRouter
    .route("/delete/:id")
    .get(ItemController.deleteItemPage)
    .delete(ItemController.deleteItem);

module.exports = itemRouter;