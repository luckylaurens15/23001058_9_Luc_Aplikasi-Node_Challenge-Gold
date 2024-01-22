const express = require("express");
const itemRouter = express.Router();

const {ItemController} = require("../controllers/itemController");

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
    .put(ItemController.updateItem);

itemRouter
    .route("/delete/:id")
    .get(ItemController.deleteItemPage)
    .delete(ItemController.deleteItem);

module.exports = itemRouter;